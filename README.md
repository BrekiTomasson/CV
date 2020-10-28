# The Wobsite

This is the Github repository for the personal webpage of Breki Tomasson.

All code is made public as this page is, in a way, a demonstration of my ability to write clean and intelligent code 
without having to rely on a large framework of any kind, relying instead on my own code and on the most relevant third
party libraries. 

## The Requirement

To have a personal website, complete wi‚th a blog, a portfolio, some kind of CV or resume, links to social media
profiles, as well as any other additional bells and whistles that make for a good presentation of who I am, what I do,
what I want to do more of and what I have done in the past.

## The Challenge

To do so using PHP and JavaScript without relying on any large frameworks that provide an environment that promotes lazy
development. This means that I am not allowed to use Laravel, React, Vue, and so on. One of the biggest issues here will
be that this also means that I am not allowed to rely on jQuery or Lodash, two very popular JavaScript packages, as both
of these are too "framework:y".

In terms of language versions, my code will be written assuming the PHP version is `PHP 7.4.x`. As for the JavaScript
version, I will primarily be writing `ECMAScript 6`-compatible code, but may find myself needing to reach for things
from ECMAScript 7, 8 or 9. However, all code will be transpiled down to `ECMAScript 5` using Webpack to guarantee the
best possible browser compatibility.

## But What About ...

If you have checked out `composer.json` and `package.json`, you might have spotted something that you consider to be
a framework or that is very close to being a framework. Most likely, you're thinking of `Webpack` or `PostCSS`, both
of which are somewhat "frameworky", for want of a better word. As far as these two packages (and the libraries and
plugins that are connected to them) go, I consider them to be part of the build pipeline rather than the website
itself, and have decided to allow them for that purpose.

As for the CSS library `Tailwind`, I do not consider it to be a framework, but I will grant you the fact that I am 
stretching the definition somewhat and should probably have built the site without the help of Tailwind.

## This Looks Familiar ...

If you think the directory structure looks familiar, it's probably because it is inspired by Laravel. I have worked 
with Laravel for so long that it just makes sense to me to put most of the code in an `app` folder, put the various 
configuration files in a `config` folder, keep the public resources in a `public` folder and put all the resources 
used for the build process in the `resources` folder. This is, however, as far as it goes, as the contents of these
folders are not the same as the contents of your basic Laravel installation.

I have also written a number of "Helpers" (see the `app/Helpers` directory) that are directly inspired by Laravel in
case I find myself reaching for a method that is part of Laravel rather than being a part of PHP. These methods have
been written by me, not copied from the Laravel source, even though their name and functionality may often be the same
or similar. 

## Thanks, Acknowledgments and Best Wishes

If you find anything in this repository to be good or great, it is only because I am standing on the shoulders of
giants. I have many people to thank for my journey as a developer;  because of the many great conversations that I have
had with them, because of the great code that they have written and which has inspired me, and because of the many
packages that they have made available for me to use in my own projects. They are surely too many to mention, but the
first couple of people that come to mind are:

`@TODO`

## Copyright, Permissions, Trademarks, Licences, etc.

There are two different licenses to consider for this website, one for my code and one for my non-code creative output.
The latter category includes any blog posts I write, any visual or auditory productions I make, etc. This `README` file,
for example, falls under the "non-code" part of the license.

**All JavaScript and PHP code _written by me_ is under the GNU General Public License.**

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public
License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later
version.

See more details regarding this license at [https://www.gnu.org/licenses/](https://www.gnu.org/licenses/).

**Non-code content is licensed under the [Attribution-NonCommercial-NoDerivatives 4.0 International](https://creativecommons.org/licenses/by-nc-nd/4.0/) Licence**,
meaning you are allowed to share (copy and redistribute) the material in any medium or format so long as you:

- give appropriate credit, provide a link to the license, and indicate if changes were made, and
- do not use the material for commercial purposes.

If you were to remix, transform, or build upon the (non-code) material, you may not distribute the modified material,
even if you give credit and use it for non-commercial purposes. Fair Use rules do apply to non-code content, so quoting
small sections of text will **not** be considered a remix or transformation, so long as an attribution to the original
material exists.
