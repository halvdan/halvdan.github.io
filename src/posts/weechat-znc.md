---
title: IRC on Raspberry Pi with ZNC and Weechat
date: 2015-04-12
author: Dan Johansson
template: post.hbt
---

As we all love to idle in IRC channels across the web why not do so using
a low-powered Raspberry Pi instead of leaving your desktop awake? 

With this post I share the process of setting up the IRC bouncer software ZNC
on a Raspberry Pi and my IRC client of choice, Weechat.

My particular Raspberry Pi runs
[Archlinux](http://archlinuxarm.org/platforms/armv6/raspberry-pi) but this
process should be applicable to most distributions.






```
/alias znc quote znc
/znc listchans
/znc detach *
```

Feel that something is missing or that I messed up a paragraph? Reach out and
I'll see what I can do.
