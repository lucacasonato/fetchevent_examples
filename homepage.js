import { h, Fragment, homepage } from "./homepage/mod.js";

const PROJECTS = {
  "dext.ts": "https://github.com/lucacasonato/dext.ts",
  Deno: "https://github.com/denoland/deno",
};

homepage(() => {
  return h(
    Fragment,
    null,
    h(
      "header",
      {},
      h("img", {
        src: "https://avatars0.githubusercontent.com/u/7829205",
        style: "max-width: 120px",
      }),
      h("h2", {}, "Luca Casonato"),
      h("a", { href: "luca@deno.com" }, "luca@deno.com")
    ),
    h(
      "div",
      { style: "margin-top: 64px;" },
      Object.keys(PROJECTS).map((name) =>
        h("p", {}, h("a", { href: PROJECTS[name] }, name))
      )
    )
  );
});
