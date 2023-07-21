import { render as renderSSR } from 'https://esm.sh/preact-render-to-string?deps=preact'
import { serve } from "https://deno.land/std/http/server.ts"
import { refresh } from "https://deno.land/x/refresh/mod.ts"
import Home from '../Client/index.jsx'



// Create refresh middleware
const middleware = refresh()
async function handler(_req) {
  const { pathname } = new URL(_req.url)

  //static svg
  if (pathname.startsWith("/Cache/")) {
    const file = await Deno.readFile('.'+pathname)
    return new Response(file, {
      headers: {
        "content-type": "image/svg+xml",
      },
    })
  }
  //static js
  if (pathname.startsWith("/Assets/Scripts")) {
    const file = await Deno.readFile('.'+pathname)
    return new Response(file, {
      headers: {
        "content-type": "application/javascript",
      },
    })
  }
  //static images
  if (pathname.startsWith("/Assets/Images")) {
    const file = await Deno.readFile('.'+pathname)
    return new Response(file, {
      headers: {
        "content-type": "image/jpeg",
      },
    })
  }
  //static fonts
  if (pathname.startsWith("/Assets/Fonts")) {
    const file = await Deno.readFile('.'+pathname)
    return new Response(file, {
      headers: {
        "content-type": "font-src",
      },
    })
  }

  //fast refresh
  const res = middleware(_req)
  if (res) return res
  //reply

  try {
    //prod mode
    const index = await Deno.readTextFile('./Client/dist/index.html')
    const html = index.replace(`<div id="app">`, `<div id="app">${renderSSR(<Home />)}`).replace(`<script type="module" crossorigin src="/assets/index.4abc4036.js"></script>`,`<script defer async type="module" crossorigin src="/Assets/Scripts/index.js"></script>`)
    return new Response( html, {
      headers: { "content-type": "text/html; charset=utf-8" },
    })

    //dev mode
    //loading index.html in prod should be done when server boots
    // const index = await Deno.readTextFile('./Client/index.html')
    // const html = index.replace(`<div id="app">`, `<div id="app">${renderSSR(<Home />)}`).replace(`<script type="module" src="./index.jsx"></script>`,`<script defer async type="module" src="http://localhost:3000/index.jsx"></script>`)
    // return new Response( html, {
    //   headers: { "content-type": "text/html; charset=utf-8" },
    // })

  }
  catch(problem) { return new Response(`<div style='text-align: center;font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;margin-top: 50vh;color: red;'>${problem}<br /><span style="color:#000">${problem.stack}</span></div>`, { headers: { "content-type": "text/html; charset=utf-8" },}) }
}

serve(handler)
