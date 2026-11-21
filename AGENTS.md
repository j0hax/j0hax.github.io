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
- There is **no separate test command**; a successful `hugo build` with no `ERROR` lines is the check. Warnings like `deprecated: project config key languageCode` are expected and pre-existing.
- Deployment happens automatically on push to `main` via `.github/workflows/hugo.yml` (GitHub Actions Pages). Don't run deploy steps manually.

## Theme and configuration

- `hugo.toml` sets `theme = "github.com/jpanther/congo/v2"`. **`themes/ehrlich/` is an empty git submodule** (not checked out here) and does not affect builds; don't try to use or init it.
- Do not copy or vendor theme files. Override theme behavior only through `layouts/`, `assets/css/extended/`, and `hugo.toml` params, which is the existing pattern:
  - `assets/css/extended/*.css` are auto-loaded by Congo without any registration.
  - `layouts/partials/extend_head.html`, `extend_footer.html` are Congo hook partials.
  - `layouts/404.html` is a full `define "main"` override.
- `enableGitInfo = true`: last-modified dates come from git history, so commits matter for display.
- Permalinks for posts are `/:year/:slug/` (under `/post/`).

## Content layout

| Path | Purpose |
| --- | --- |
| `content/_index.md`, `content/_index.de.md` | Homepage, EN/DE pair |
| `content/CV/index.md` | CV page (`/cv/`), uses `cvEntry` + `age` shortcodes |
| `content/post/` | Blog ("Journal"); posts are **page bundles** (`post/<slug>/index.md` + images) for anything with images, otherwise flat `post/<slug>.md` |
| `content/page/` | Miscellaneous sections: `computing`, `contact`, `edc`, `food`, `hotsauces`, `notes` |
| `content/page/notes/` | University lecture notes, nested sections; many are German |
| `content/quotes.json` | Quote database consumed by `quotes`/`randQuote`/`motd` shortcodes |
| `static/` | Files served verbatim at root (`CNAME`, `fonts/`, images, `vps.ign`) |
| `archetypes/default.md` | Template for `hugo new` (YAML, `draft: true`) |

### Conventions

- **Front matter** is YAML (`---`) for almost all pages; section index pages (`content/post/_index.md`, `content/page/_index.md`) use TOML (`+++`). Any text-plus-front-matter file in content must start with one of these; a bare Markdown file with no front matter still renders but gets no title/menu entry.
- Menu entries are declared via `menus = 'main'` / `menu = "main"` in the page front matter (both spellings appear).
- **Bilingual content** uses Hugo's filename scheme: `page.md` (EN) + `page.de.md` (DE), or `index.md` + `index.de.md` inside bundles. The DE homepage uses the separate shortcode `myAge` rather than `age`.
- Images live in the page bundle and are referenced by bare filename through the theme's `figure` shortcode (`{{< figure src="foo.jpg" caption="..." >}}`). Some use the `#center` fragment (`src="foo.png#center"`).
- Do not add a `math` param; math is enabled per-page via `.Params.math`/site param checked in `layouts/partials/extend_head.html`, and notes use KaTeX delimiters `\\( ... \\)` inline and `\begin{equation}` blocks. Escape backslashes correctly in Markdown.

## Shortcodes

Custom shortcodes live in **two** directories with different semantics:

- `layouts/shortcodes/` (`age`, `cvEntry`) are plain overrides/lookups.
- `layouts/_shortcodes/` (`blockquote`, `motd`, `quotes`, `randQuote`, `rating`, `myAge`) exist so they can be called unambiguously when a theme shortcode of the same name exists. Keep this split in mind when adding shortcodes: names that could collide with a theme (or the old `age` vs `myAge`) belong in `_shortcodes`.

Details:
- `age` / `myAge`: optional epoch arg, default `1998-05-20`.
- `cvEntry`: paired shortcode; params `position`, `employer`, `location`, `from`, `to` (omit `to` => "Present"). Arguments are run through `markdownify`, so inline Markdown/links work in params; dates must parse with `time.AsTime` (use `YYYY-MM-DD`, quote values with colons).
- `quotes` / `randQuote` / `motd`: take a filename and load it via `.Page.Resources.Get`, so the JSON must be a **page-bundle resource** of the calling page; they error out loudly if not found. Data entries have `quote` and `attr` (optionally `work`).
- `rating`: `score` is 0-100, rendered as 5 stars.

## Style notes

- Prose is personal writing; keep voice intact when editing content and don't "correct" intentional style.
- Commit messages are short, imperative (`Fix dates`, `Update CV`, `Reword`). No conventional-commit prefixes.
- `public/` and `resources/_gen/` are generated and gitignored; never edit them.
