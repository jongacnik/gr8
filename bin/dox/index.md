# ⓖⓡ⑧

[![NPM version](https://img.shields.io/npm/v/gr8.svg)](https://www.npmjs.com/package/gr8)
[![Standard](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

FUNctional CSS shorthand utilities. `gr8` is both a handy [**set**](#utilities) of functional css utilities, as well as a handy [**tool**](#custom-utilities-) for generating functional css utilities.

```
npm i gr8
```

## Features

- **super**: Makes structuring layouts fast [without imposing limitations](#faq)
- **handy**: Utilities for columns, spacing, flexbox, typography, and more!
- **flexible**: Customize included utilities using [options](#options) for breakpoints, spacing, units, etc...
- **extensible**: Add [custom utilities](#custom-utilities-) using simple objects
- **in-use**: [Folder Studio](http://folderstudio.com), [2Pac](http://www.2pac.com/), [Hardly Everything](https://hardlyeverything.com), [LA Forum](http://laforum.org), [Album Art IQ](http://daily.redbullmusicacademy.com/specials/2016-album-art-iq/), [Hassan Rahim](http://hassanrahim.com/), etc...

**Skip straight to the [utilities](#utilities)! 🏃**

## Example

Let's set up `gr8` with a couple options, add a custom `text-color` utility, and append the styles to the head of our doc using the `attach` method:

```js
var gr8 = require('gr8')

var css = gr8({
  spacing: [0, 1, 2, 4],
  responsive: true
})

css.add({
  prop: 'text-color',
  vals: ['red', 'blue', 'green']
})

css.attach()
```

Now we can use the available css selectors in our app!

```html
<div class="c6 p2 fs1-5 tcr" sm="c12 p1 tcb">subarashīdesu!</div>
```

## Utilities

`gr8` default utilities:

{{ utilitySections }}


## API

The `gr8` api is very small and contains only 3 methods.

### `css = gr8(options)`

Initialize `gr8`. View all available [options](#options).

### `css.attach()`

Attach all utilities to the document head in a style tag. Returns style node.

### `css.toString()`

Returns all utilities as a `String` of css. Generally useful for [writing css to a file](#production).

### `css.add(options)`

Adds a `gr8` utility. This is quite powerful so it [gets its own section](#custom-utilities-).

## Options

Here are default options and details for what each option controls.

```js
var css = gr8({{ defaults }})
```

{{ optionsDetails }}

## Custom Utilities ✨

**The best way to learn how to write custom utilities is by peeking at the default utilities in [src/utils](https://github.com/jongacnik/gr8/tree/master/src/utils)!**

Perhaps my favorite part about `gr8` is adding custom utilities because it makes it simple to think about *all* your styles for a project in a functional manner. Utilities are added by passing options to the [`add`](#css-add-options-) method. Let's take a look at creating a `text-color` utility:

```js
css.add({
  prop: 'text-color',
  vals: ['red', 'green', 'blue']
})
```

...creates these utilities:

```css
.tcr{text-color:red}
.tcg{text-color:green}
.tcb{text-color:blue}
```

*Estupendo!*

Under the hood, `gr8` tries to create sensible selectors using a [combination of abbreviated css properties and values](#utility-design). We can also pass more options to the `add` method for granular control:

```js
css.add({
  prefix: 'bdw',
  suffix: ':after',
  prop: 'border-width',
  vals: [
    { sm: 1 },
    { md: 4 },
    { lg: 8 }
  ],
  hyphenate: true,
  unit: 'px',
  transform: function (val) {
    return val * 100
  }
})
```

```css
.bdw-sm:after{border-width:100px}
.bdw-md:after{border-width:400px}
.bdw-lg:after{border-width:800px}
```

While those specific utilities are not very useful, fancy utilities are possible by combining these options.

## Responsive

If the **responsive** option is set to `true`, breakpoint attribute utilities will be generated:

```css
@media (max-width: 1439px) {
  [xl~="p0"]{padding:0}
  [xl~="p1"]{padding:1rem}
  [xl~="p2"]{padding:2rem}
  [xl~="p3"]{padding:3rem}
  [xl~="p4"]{padding:4rem}
  /* etc... */
}

@media (max-width: 1260px) {
  [lg~="p0"]{padding:0}
  [lg~="p1"]{padding:1rem}
  [lg~="p2"]{padding:2rem}
  [lg~="p3"]{padding:3rem}
  [lg~="p4"]{padding:4rem}
  /* etc... */
}

@media (max-width: 1023px) {
  [md~="p0"]{padding:0}
  [md~="p1"]{padding:1rem}
  [md~="p2"]{padding:2rem}
  [md~="p3"]{padding:3rem}
  [md~="p4"]{padding:4rem}
  /* etc... */
}

@media (max-width: 767px) {
  [sm~="p0"]{padding:0}
  [sm~="p1"]{padding:1rem}
  [sm~="p2"]{padding:2rem}
  [sm~="p3"]{padding:3rem}
  [sm~="p4"]{padding:4rem}
  /* etc... */
}
```

Now utilities can be applied to elements per breakpoint:

```html
<div class="p4" xl="p3" lg="p2" md="p1" sm="p0">My padding changes, groot!</div>
```

#### Prefixed Classes

If breakpoint attributes aren't your style, you can set the **attribute** option to `false` to use prefixed class selectors instead:

```css
@media (max-width: 1439px) {
  .xl-p0{padding:0}
  /* etc... */
}

@media (max-width: 1260px) {
  .lg-p0{padding:0}
  /* etc... */
}

@media (max-width: 1023px) {
  .md-p0{padding:0}
  /* etc... */
}

@media (max-width: 767px) {
  .sm-p0{padding:0}
  /* etc... */
}
```

#### Max vs. Min

You can use `min-width` instead of `max-width` media queries by setting the **max** option to `false`.

## Nested Columns

If the **nested** option is set to `true`, utilities will be generated for column nesting:

```css
.c1{width:8.333333333333332%}
.c1 .c1{width:100%}
.c2{width:16.666666666666664%}
.c2 .c1{width:50%}
.c2 .c2{width:100%}
.c3{width:25%}
.c3 .c1{width:33.33333333333333%}
.c3 .c2{width:66.66666666666666%}
.c3 .c3{width:100%}
/* etc... */
```

Now columns may be nested while retaining their actual size:

```html
<div class="c1">
  <div class="c1">I'm 100% of my parent!</div>
</div>
<div class="c2">
  <div class="c1">I'm 50% of my parent!</div>
</div>
<div class="c3">
  <div class="c1">I'm 33.333% of my parent!</div>
</div>
```

## Utility Design

The anatomy of `gr8` utilities generally follow a simple and similar structure. For example:

```css
.fs1-5{font-size:1.5rem}
```

```
 ┌─ prefix          ┌─ property        ┌─ unit
 ▼                  ▼                  ▼
.fs   1-5   {   font-size   :   1.5   rem   }
       ▲                         ▲
       └─ selector value         └─ value
```

- `prefix` is the shorthand identifier for what the utility does. Generally this will be an abbreviation of the respective css property (`font-size` → `fs`)
- `selector value` is the specific identifier for the utility value. To make it css classname safe, decimals are replaced with hyphens (`1.5` → `1-5`)
- `property` is the css property name which the utility targets
- `value` is the value corresponding to the css property
- `unit` is the unit attached to the value

This structure is modified based on context and need of the utility. For example, the column utilities define the width property, but their suffix is a `c` and the selector value is a numeric index rather than a sanitized version of the width value.

## Production

The `attach` method is handy, especially during development, but for production you might want to css loaded in an external file, which is autoprefixed, minified, and maybe even [purified](https://www.npmjs.com/package/purify-css) (especially when using responsive utilities and nested columns!). The `toString` method returns all the css as a simple string, and we can leverage this in a node script to save our css to a file:

```js
var fs = require('fs')
var gr8 = require('gr8')

var css = gr8()
var cssString = css.toString()

fs.writeFile('gr8.css', cssString, function (err) {
  if (err) {
    return console.log(err)
  }

  console.log('gr8 saved to gr8.css!')
})
```

From there you may use whatever build process you like to get a nice, production-ready css file! **Example of this is coming soon...**

## FAQ

**Work in progress...**

### Why was this made?

[f(css)](http://www.jon.gold/2015/07/functional-css/) is super and there are many solid approaches to functional css out there, `gr8` just happens to be my personal take. I like a system which is very flexible. Many of the sites we make at [Folder Studio](http://folderstudio.com) would be quite tricky to pull off without quickly and easily adjusting utilities en masse.

### Why not use..?

Let me start by shouting out [gravitons](https://github.com/jxnblk/gravitons/), [basscss](https://github.com/jxnblk/basscss/),
[tachyons](https://github.com/tachyons-css/tachyons/), and the like. These are all awesome tools, huge ups to their creators, and if you like 'em, use 'em. I've tried them all to varying degrees of success, I just happen to prefer `gr8` style 🙃

## Fin!

`gr8` is built and maintained by [Jon Gacnik](http://jongacnik.com) and used extensively in projects at [Folder Studio](http://folderstudio.com).

Shout out [Jon-Kyle Mohr](http://jon-kyle.com/) for using `gr8` for the past bits, totally tearing this thing apart and helping rebuild it in various past incarnations. This handy version is much thanks to him.

Subarashīdesu!
