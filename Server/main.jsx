import { render as renderSSR } from 'https://esm.sh/preact-render-to-string?deps=preact'
import { serve } from "https://deno.land/std/http/server.ts"
import { refresh } from "https://deno.land/x/refresh/mod.ts"
import { getNetworkAddr } from 'https://deno.land/x/local_ip/mod.ts';
import Home from '../Client/index.jsx'



// Create refresh middleware
const middleware = refresh()
const index = await Deno.readTextFile('./Client/index.html')
async function handler(_req) {
  const { pathname } = new URL(_req.url)

  //static svg
  if (pathname.startsWith("/Cache/")) {
    const file = await Deno.readTextFile('.'+pathname)
    return new Response(file, {
      headers: {
        "content-type": "image/svg+xml",
      },
    })
  }
  //static js
  if (pathname.startsWith("/Assets/Scripts")) {
    const file = await Deno.readTextFile('.'+pathname)
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
    const ip = await getNetworkAddr(); 
    const ssrRender = window.ssr ? renderSSR(<Home />) : ""
    let html = ""


    //switch between dev and prod
    if (window.prod) {
      html = index.replace(`<div id="app">`, `<div id="app">${ssrRender}`).replace(`./index.jsx`,`/Assets/Scripts/index.js`)
    } else {
      const index = await Deno.readTextFile('./Client/index.html') //in dev mode index html is loaded at each request
      html = index.replace(`<div id="app">`, `<div id="app">${ssrRender}`).replace(`./index.jsx`,`http://${ip}:3456/index.jsx`)
    }


    return new Response( html, {
      headers: { "content-type": "text/html; charset=utf-8" },
    })

  }
  catch(problem) { return new Response(`<div style='text-align: center;font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;margin-top: 50vh;color: red;'>${problem}<br /><span style="color:#000">${problem.stack}</span></div>`, { headers: { "content-type": "text/html; charset=utf-8" },}) }
}

serve(handler)

//when in prod mode it would be nice if yarn build is run everytime so save a file (maybe we can use denon for that?)