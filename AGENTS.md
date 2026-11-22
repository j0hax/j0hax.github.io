# AGENTS.md

Personal website of Johannes Arnold (j0hax) built with Hugo and deployed to GitHub Pages at `https://johannes.arnold.onl/`. This is a content repository: there is virtually no application code, only Markdown content, Hugo templates (shortcodes/partials), a little CSS, and CI.

## Commands

```bash
# Build (mirrors CI)
hugo build --gc --minify

# Build into a scratch dir to check a change without touching ./public
hugo build --destination /tmp/hugo-verify --cacheDir /tmp/hugo-cache

# Local dev server with drafts
hugo server -D
```

- Requires **Hugo extended** (CI pins `0.163.3`; local toolchain has been used with newer versions). The theme is pulled as a **Hugo Module** (`go.mod`), so the first build downloads modules and is slow (~30s+); later builds use the module cache. No `npm`, no `package.json`, no Makefile, no test suite, no linter.
- There is **no separate test command**; a successful `hugo build` with no `ERROR` lines is the check.
- Deployment happens automatically on push to `main` via `.github/workflows/hugo.yml` (GitHub Actions Pages). Don't run deploy steps manually.

## Theme and configuration

- `hugo.toml` sets `theme = "github.com/jpanther/congo/v2"` (pinned in `go.mod`/`go.sum`; keep those in sync and free of extra modules). There is no `themes/` directory; never vendor theme files.
- Congo's extension points, as used here:
  - `assets/css/custom.css`: the only custom stylesheet. Congo bundles it after its own CSS automatically. Do not use `assets/css/extended/`, which is a PaperMod convention and was never loaded.
  - `layouts/partials/extend-head.html` and `extend-footer.html`: hyphenated names, they are called from the theme's `head.html`/`footer.html`. The underscore spelling (`extend_head.html`) is silently ignored.
  - `layouts/404.html` is a full `define "main"` override.
- Math: there is no longer a math partial. Congo ships KaTeX and only loads it when the page contains the theme's no-op `katex` shortcode, so every notes page with formulas opens with `{{< katex >}}` (the `math: true` front matter is now vestigial). Notes use `\\( ... \\)` inline and `\begin{equation}` blocks.
- `enableGitInfo = true`: last-modified dates come from git history, so commits matter for display.
- Permalinks for posts are `/:year/:slug/` (under `/post/`). A broken date in front matter changes a post's URL.

## Content layout

| Path | Purpose |
| --- | --- |
| `content/_index.md` | Homepage |
| `content/CV/index.md` | CV page (`/cv/`), uses `cvEntry` + `age` shortcodes |
| `content/post/` | Blog ("Journal"); posts are **page bundles** (`post/<slug>/index.md` + images) for anything with images, otherwise flat `post/<slug>.md` |
| `content/page/` | Miscellaneous sections: `computing` (draft), `contact`, `edc` (drafts), `food` (draft), `hotsauces`, `notes` |
| `content/page/notes/` | University lecture notes (English only) |
| `content/quotes.json` | Unused quote database; no shortcode reads it any more |
| `static/` | Files served verbatim at root (`CNAME`, `fonts/`, images, `vps.ign`) |
| `archetypes/default.md` | Template for `hugo new` (YAML, `draft: true`) |

### Conventions

- The site is **English only**; do not add `.de.md` files or `languages` config.
- **Front matter** is YAML (`---`) for almost all pages; section index pages (`content/post/_index.md`, `content/page/_index.md`) use TOML (`+++`). Every content file must open with one of these blocks.
- Menu entries are declared via `menus = 'main'` / `menu = "main"` in the page front matter (both spellings appear).
- Images live in the page bundle and are referenced by bare filename through the theme's `figure` shortcode (`{{< figure src="foo.jpg" caption="..." >}}`). Some use the `#center` fragment (`src="foo.png#center"`).
- Use plain Markdown links; wiki-style `[[text](url)]` is not supported and renders literally.

## Shortcodes

Custom shortcodes live in `layouts/shortcodes/`:

- `age`: optional epoch arg, default `1998-05-20`.
- `cvEntry`: paired shortcode; params `position`, `employer`, `location`, `from`, `to` (omit `to` => "Present"). Arguments are run through `markdownify`, so inline Markdown/links work in params; dates must parse with `time.AsTime` (use `YYYY-MM-DD`, quote values with colons).
- `rating`: `score` is 0-100, rendered as 5 stars.
- `blockquote`: paired, `author` param for the citation line.

`figure`, `details`, and `katex` come from the theme.

## Style notes

- Prose is personal writing; keep voice intact when editing content and don't "correct" intentional style.
- **Never extend writing unprompted**: agents should not add, reword, or improvise prose when making content changes. Only fix grammar, spelling, and idioms — and only when asked or clearly needed.
- **Tone**: keep it warm yet intellectual; avoid slang, hype, and stiff or overwrought phrasing while preserving the author's voice.
- **Technical fixes are welcome**: correct broken front matter (e.g., invalid dates that change permalinks), missing/malformed SEO fields (`description`, `images`, Open Graph, Twitter cards), and similar mechanical issues — these are not "extending writing" and should be fixed proactively.
- Commit messages are short, imperative (`Fix dates`, `Update CV`, `Reword`). No conventional-commit prefixes.
- `public/` and `resources/_gen/` are generated and gitignored; never edit them.
