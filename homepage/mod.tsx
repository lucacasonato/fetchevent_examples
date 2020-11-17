import {
  ComponentType,
  Fragment,
  h,
} from "https://x.lcas.dev/preact@10.5.3/mod.js";
export { Fragment, h };
import { render } from "https://x.lcas.dev/preact-render-to-string@5.1.10/mod.js";

const STATIC = new URL("./static/", import.meta.url);

/**
 * Creates a new homepage.
 */
export function homepage(Page: ComponentType) {
  addEventListener("fetch", (event: any) => {
    event.respondWith(handler(event.request, Page));
  });
}

/**
 * Handles incoming requests.
 */
async function handler(request: Request, Page: ComponentType) {
  const url = new URL(request.url);

  console.log(url.pathname);

  if (url.pathname.startsWith("/static")) {
    return fetch(new URL("." + url.pathname.substring(7), STATIC));
  } else {
    return new Response(render(h(Wrapper, { Page })));
  }
}

function Wrapper({ Page }: { Page: ComponentType }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://vanillacss.com/vanilla.css" />
        <style>
          {`body{margin:0 auto;max-width:50rem;}
@media(max-width:50rem) {
    body {
        padding: 10px;
    }
}`}
        </style>
      </head>
      <body class="page" role="document">
        <div>
          <Page />
        </div>
      </body>
    </html>
  );
}
