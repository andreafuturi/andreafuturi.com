/**
 * andreafuturi.com — Deno Deploy entry.
 * Teleporty engagement: GIF/MP4 hits → Deno KV; Hub polls GET /api/teleporty/stats?k=…
 * Env: TELEPORTY_TRACK_SECRET (required for stats reads)
 */
const grazie = await Deno.readTextFile("./client/grazie.html");
const kv = await Deno.openKv();

/** @typedef {{ openedAt: string | null, clickedAt: string | null, gifHits: number, mp4Hits: number }} TeleportyHit */

function emptyHit() {
  return { openedAt: null, clickedAt: null, gifHits: 0, mp4Hits: 0 };
}

/** @param {string} pathname */
function parseTeleportyMedia(pathname) {
  const tele = pathname.match(
    /^\/assets\/teleporty\/([^/]+)\/(comparison-email\.gif|comparison\.mp4)$/i,
  );
  if (tele) {
    return {
      domain: tele[1].toLowerCase(),
      kind: tele[2].toLowerCase().endsWith(".gif") ? "gif" : "mp4",
    };
  }
  const flat = pathname.match(/^\/assets\/([^/]+\.[^/]+)\.mp4$/i);
  if (flat) return { domain: flat[1].toLowerCase(), kind: "mp4" };
  return null;
}

/** @param {string} domain @param {'gif'|'mp4'} kind */
async function recordHit(domain, kind) {
  const key = ["teleporty", domain];
  const cur = (await kv.get(key)).value || emptyHit();
  const now = new Date().toISOString();
  if (kind === "gif") {
    cur.gifHits = (cur.gifHits || 0) + 1;
    if (!cur.openedAt) cur.openedAt = now;
  } else {
    cur.mp4Hits = (cur.mp4Hits || 0) + 1;
    if (!cur.clickedAt) cur.clickedAt = now;
  }
  await kv.set(key, cur);
}

/** @param {Request} req */
function authOk(req) {
  const secret = Deno.env.get("TELEPORTY_TRACK_SECRET");
  if (!secret) return false;
  const url = new URL(req.url);
  return url.searchParams.get("k") === secret;
}

/** @param {Request} req @param {string} pathname */
async function maybeTrack(req, pathname) {
  const parsed = parseTeleportyMedia(pathname);
  if (!parsed) return;
  if (parsed.kind === "mp4") {
    const range = req.headers.get("range");
    // ponytail: skip mid-file seeks; first play is usually no Range or bytes=0-
    if (range && !/^bytes=0-/i.test(range)) return;
  }
  try {
    await recordHit(parsed.domain, parsed.kind);
  } catch (err) {
    console.error("teleporty track failed", err);
  }
}

async function allHits() {
  /** @type {Record<string, TeleportyHit>} */
  const out = {};
  for await (const entry of kv.list({ prefix: ["teleporty"] })) {
    const domain = entry.key[1];
    if (typeof domain === "string") out[domain] = entry.value || emptyHit();
  }
  return out;
}

async function handler(req) {
  const { pathname } = new URL(req.url);

  // Hub poll — all domains
  if (pathname === "/api/teleporty/stats") {
    if (!Deno.env.get("TELEPORTY_TRACK_SECRET")) {
      return new Response(JSON.stringify({ error: "TELEPORTY_TRACK_SECRET not set" }), {
        status: 503,
        headers: { "content-type": "application/json" },
      });
    }
    if (!authOk(req)) {
      return new Response(JSON.stringify({ error: "unauthorized" }), {
        status: 401,
        headers: { "content-type": "application/json" },
      });
    }
    return new Response(JSON.stringify(await allHits()), {
      headers: { "content-type": "application/json", "cache-control": "no-store" },
    });
  }

  // Per-domain JSON (same auth)
  const one = pathname.match(/^\/teleporty\/([^/]+)\.json$/i);
  if (one) {
    if (!authOk(req)) {
      return new Response(JSON.stringify({ error: "unauthorized" }), {
        status: 401,
        headers: { "content-type": "application/json" },
      });
    }
    const domain = one[1].toLowerCase();
    const hit = (await kv.get(["teleporty", domain])).value || emptyHit();
    return new Response(JSON.stringify({ domain, ...hit }), {
      headers: { "content-type": "application/json", "cache-control": "no-store" },
    });
  }

  if (pathname.startsWith("/grazie")) {
    return new Response(grazie, {
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }

  if (pathname.endsWith(".svg")) {
    const file = await Deno.readTextFile("." + pathname);
    return new Response(file, { headers: { "content-type": "image/svg+xml" } });
  }
  if (pathname.endsWith(".jpg")) {
    const file = await Deno.readFile("." + pathname);
    return new Response(file, { headers: { "content-type": "image/jpeg" } });
  }
  if (pathname.endsWith(".png")) {
    const file = await Deno.readFile("." + pathname);
    return new Response(file, { headers: { "content-type": "image/png" } });
  }
  if (pathname.endsWith(".ico")) {
    const file = await Deno.readFile("." + pathname);
    return new Response(file, { headers: { "content-type": "image/x-icon" } });
  }
  if (pathname.endsWith(".gif")) {
    await maybeTrack(req, pathname);
    const file = await Deno.readFile("." + pathname);
    return new Response(file, { headers: { "content-type": "image/gif" } });
  }
  if (pathname.endsWith(".mp4")) {
    await maybeTrack(req, pathname);
    const file = await Deno.readFile("." + pathname);
    return new Response(file, { headers: { "content-type": "video/mp4" } });
  }
  if (pathname.endsWith(".js")) {
    const file = await Deno.readTextFile("." + pathname);
    return new Response(file, { headers: { "content-type": "application/javascript" } });
  }

  try {
    const portfolio = await Deno.readTextFile("./client/portfolio/andreafuturi.com/index.html");
    return new Response(portfolio, {
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  } catch (problem) {
    return new Response(
      `<div style='text-align: center;font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;margin-top: 50vh;color: red;'>${problem}<br /><span style="color:#000">${problem.stack}</span></div>`,
      { headers: { "content-type": "text/html; charset=utf-8" } },
    );
  }
}

{
  const g = parseTeleportyMedia("/assets/teleporty/GlameStudio.STORE/comparison-email.gif");
  if (g?.domain !== "glamestudio.store" || g.kind !== "gif") throw new Error("gif parse");
  const m = parseTeleportyMedia("/assets/glamestudio.store.mp4");
  if (m?.domain !== "glamestudio.store" || m.kind !== "mp4") throw new Error("flat mp4 parse");
  const leg = parseTeleportyMedia("/assets/teleporty/acme.it/comparison.mp4");
  if (leg?.kind !== "mp4") throw new Error("legacy mp4 parse");
}

Deno.serve(handler);
