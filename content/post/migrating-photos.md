---
title: "Migrating All the Photos"
date: 2025-07-16T19:24:51+02:00
---

```
$ rclone copy -P backblaze:johannes-photos/ --include "**.{jpe?g,png,heic,mov}" --ignore-case nextcloud:Photos/backblaze
```

```
$ find . -type f -exec mv -iv '{}' . ';'
renamed './2015/04/01/IMG_1460.MOV' -> './IMG_1460.MOV'
renamed './2015/04/01/IMG_1462.MOV' -> './IMG_1462.MOV'
renamed './2015/04/01/IMG_1463.MOV' -> './IMG_1463.MOV'
```

Note the `-i` flag passed to mv, to prevent any accidental overwrites.

`2025/07/16 19:28:46 INFO  : 2015/07/09/IMG_5308.MOV: Moved (server-side) to: IMG_5308.MOV`
