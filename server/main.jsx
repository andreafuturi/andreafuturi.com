import { serve } from "https://deno.land/std/http/server.ts";
const grazie = await Deno.readTextFile("./client/grazie.html");
async function handler(_req) {
  const portfolio = await Deno.readTextFile("./client/portfolio/andreafuturi.com/index.html");

  const { pathname } = new URL(_req.url);
  //thank you page
  if (pathname.startsWith("/grazie")) {
    return new Response(grazie, {
      headers: {
        "content-type": "text/html; charset=utf-8",
      },
    });
  }
  //static favicon
  if (pathname.endsWith(".svg")) {
    const file = await Deno.readTextFile("." + pathname);
    return new Response(file, {
      headers: {
        "content-type": "image/svg+xml",
      },
    });
  }
//static favicon
  if (pathname.endsWith(".jpg")) {
    const file = await Deno.readTextFile("." + pathname);
    return new Response(file, {
      headers: {
        "content-type": "image/jpeg",
      },
    });
  }
if (pathname.endsWith(".png")) {
  const file = await Deno.readTextFile("." + pathname);
    return new Response(file, {
      headers: {
        "content-type": "image/png",
      },
    });
}
if (pathname.endsWith(".ico")) {
  const file = await Deno.readTextFile("." + pathname);
    return new Response(file, {
      headers: {
        "content-type": "image/x-icon",
      },
    });
}


  //static js
  if (pathname.endsWith(".js")) {
    const file = await Deno.readTextFile("." + pathname);
    return new Response(file, {
      headers: {
        "content-type": "application/javascript",
      },
    });
  }
  try {
    return new Response(portfolio, {
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  } catch (problem) {
    return new Response(
      `<div style='text-align: center;font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;margin-top: 50vh;color: red;'>${problem}<br /><span style="color:#000">${problem.stack}</span></div>`,
      { headers: { "content-type": "text/html; charset=utf-8" } }
    );
  }
}

serve(handler);
