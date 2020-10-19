import { h, Fragment } from "https://x.lcas.dev/preact@10.5.3/mod.js";
export { h, Fragment };
import { render } from "https://x.lcas.dev/preact-render-to-string@5.1.10/mod.js";

const STATIC = new URL("./static/", import.meta.url);

/**
 * Creates a new homepage.
 */
export function homepage(Page) {
  addEventListener("fetch", (event) => {
    event.respondWith(handler(event.request, Page));
  });
}

/**
 * Handles incoming requests.
 *
 * @param {Request} request
 * @returns {Promise<Response>}
 */
async function handler(request, Page) {
  const url = new URL(request.url);

  console.log(url.pathname);

  if (url.pathname.startsWith("/static")) {
    return fetch(new URL("." + url.pathname.substring(7), STATIC));
  } else {
    return new Response(render(h(Wrapper, { Page })));
  }
}

function Wrapper({ Page }) {
  return h(
    "html",
    { lang: "en" },
    h(
      "head",
      null,
      h("meta", { charset: "UTF-8" }),
      h("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
      }),
      h("link", {
        rel: "stylesheet",
        href: "https://vanillacss.com/vanilla.css",
      }),
      h(
        "style",
        null,
        `
      body{margin:0 auto;max-width:50rem;}
      @media(max-width:50rem) {
          body {
              padding: 10px;
          }
      }
  `
      )
    ),
    h("body", { class: "page", role: "document" }, h("div", {}, h(Page)))
  );
}
