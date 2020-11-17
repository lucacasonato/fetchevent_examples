import { Fragment, h, homepage } from "./homepage/mod.js";

const PROJECTS = {
  "dext.ts": "https://github.com/lucacasonato/dext.ts",
  Deno: "https://github.com/denoland/deno",
};

homepage(() => {
  return (
    <>
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/7829205"
          style="max-width: 120px"
        />
        <h2>Luca Casonato</h2>
        <a href="mailto:luca@deno.com">luca@deno.com</a>
      </header>
      <div style="margin-top: 64px;">
        {Object.keys(PROJECTS).map((name) =>
          <p><a href={PROJECTS[name]}>{name}</a></p>
        )}
      </div>
    </>
  );
});
