---
layout: post
title: "Hitcounters: better than you remember"
categories: programming
---

Remember, back in the 90s, those crazy odometer things on every website and eBay description?

When creating my blog I avoided Google Analytics.
Not only do I want to respect my readers' privacy, I aim for GDPR compliance (even though I think it's flawed, more on that later).

> Jeez, those cookie consent banners are annoying.

Because Jekyll generates static sites, it's tough to do tricks like with PHP, and as GitHub Pages doesn't provide access to web traffic logs, I decided to try a basic site counter like back in the day.

It didn't take long to find a suitable project: [brentvollebregt/hit-counter](https://github.com/brentvollebregt/hit-counter).
It's open-source and can be self-hosted!

## Flaws

My current implementation isn't perfect;
because the script doesn't use cookies and is called for every page with the same referrer, counts are *per-site*, not *per-page*, and update with every load.
Additionally, most adblockers will prevent counting.
With my current setup, both Brave and uBlock Origin block the the JavaScript from loading by default.

I don't see it as a huge problem however:
It should be enough to give a basic estimate. If one of my posts ever becomes popular, I'll notice the difference between a couple hundred and thousands, or even hundreds of thousands. *(A man can dream, right?)*

## Implementation

I followed the project's usage example and created a simple script for my site. All it does is perform a request to the public demo server at [hitcounter.pythonanywhere.com](https://hitcounter.pythonanywhere.com/), and if everything succeeds, puts the results in the footer of my site:

```javascript
window.addEventListener('DOMContentLoaded', (event) => {
  const xmlHttp = new XMLHttpRequest()
  xmlHttp.withCredentials = true
  xmlHttp.open('GET', 'https://hitcounter.pythonanywhere.com/count', false)
  xmlHttp.send(null)
  const count = xmlHttp.responseText

  const footer = document.getElementsByClassName('footer-col')[1]

  const newP = document.createElement('p')
  const textNode = document.createTextNode('Ca. ' + count + ' site visits')
  newP.appendChild(textNode)
  footer.appendChild(newP)
})
```

## The Verdict

It's far from a perfect solution, but finds the proper balance between getting rough estimates and maintaining user privacy. By using JavaScript to inject the resulting count in the bottom corner of the page, it stays out of people's way and doesn't result in the eyesore of one of these things:

<div style="text-align: center;"><span style="font-family: serif; font-size: 1.5em; color: red; background: black;">123,456</span></div>
