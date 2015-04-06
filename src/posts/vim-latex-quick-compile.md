---
title: Vim LaTeX quick compile
date: 2013-02-21
author: Dan Johansson
template: post.hbt
---

Whenever it is time to write assignments or whatever in LaTeX I find myself using to compile the result in order to see how the formulae came out and whether it needs to be spaced more between the equations and such.

This command has proved to be very useful for me since I haven't dabbled with vim-latex nor have had the need for such a comprehensive toolset.

Just add this to your .vimrc and get back to work. Replace what key you are using (in my case it is F9) and what you use to create your .pdf files (here I use pdflatex).

```vim
" ~/.vimrc
noremap <F9> :!pdflatex %<cr>
inoremap <F9> <esc>:!pdflatex %<cr>
```
