---
title: Adding printers on Arch Linux at Chalmers
date: 2013-02-25
author: Dan Johansson
template: post.hbt
---
Okay, so this may not be of so much use to anyone else but I fiddled with this earlier and decided to document it for future reference.

Using instructions from the [excellent wiki](https://wiki.archlinux.org/) on [CUPS](https://wiki.archlinux.org/index.php/CUPS_printer_sharing#Configuration_using_the_web_interface) and [how to add a Chalmers printer](https://student.portal.chalmers.se/sv/kontaktochservice/it-passerkort-kopiering/egenadministrerad/linux/utskrifter/Sidor/anslut-till-skrivare.aspx) (in Swedish) I managed to get it working.

Using the CUPS web interface, accessed at http://localhost:631, I could add a printer by clicking the administration tab and clicking the "Add Printer" (duh) and then following Chalmers instructions from there with the exception of using the below device URI instead.

```
smb://NET\cid:password@print.chalmers.se/name_of_printer
```
