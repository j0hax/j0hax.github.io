---
layout: post
title: Creating a Minima 3.0 Skin
categories: programming
---

One of the greatest causes of confusion for setting up my new blog was theming. I'll admit to having fallen in love with the default [Minima](https://github.com/jekyll/minima) theme.
However, adding a distinguishing touch is also important to me, and as such I decided to, at the very least, customize colors.

Customizing Minima before the upcoming 3.0 release was disorienting as a person with no prior experience using Sass and Jekyll. The [official docs](https://jekyllrb.com/docs/step-by-step/07-assets/#sass) and [Minima docs](https://github.com/jekyll/minima/tree/2.5-stable#customization) had slightly different descriptions, but with a little trial-and-error I was able to change basic branding for the stable 2.5.1 release. Another problem arose: I didn't feel like maintaining seperate `assets` and `_sass` folders for what amounts to essentially the same CSS. On top of that, if I ever want to change the theme, global assets could become mixed up.

Fortunately, Minima has recently added [skin support](https://github.com/jekyll/minima/blob/3cdd14dff1216f561c68329e0b7420c2dc9b796a/README.md#skins). This makes the entire process of maintaining a theme easier, as all I needed to do was change my variables and use a provided template.

## Setting up the changes

I was able to dump my variables[^1] into a new SCSS file under the `_sass/minima/skins/` directory, which overrode those marked as `!default` in the imported theme.

```scss
$brand-color: #556B2F;
$base-font-family: "Fira Sans", sans-serif;
$code-font-family: "Fira Code", monospace;
@import "minima/skins/dark";
```

*Of course I prefer a dark mode ;)*

Afterwards, all that needed to be done was tell GitHub to use the `master` branch of Minima and set the skin:

```yaml
# Build settings
#theme: minima

remote_theme: jekyll/minima

minima:
  skin: carl
```

I'm quite happy with the way my blog looks now, and I've learned the basics of Jekyll and Sass through it.

Follow its development on [GitHub](https://github.com/j0hax/j0hax.github.io/blob/main/_sass/minima/skins/carl.scss)!

[^1]: When using custom fonts, don't forget to specify the needed files in `_includes/custom-header.html`
