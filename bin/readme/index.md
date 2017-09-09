# ⓖⓡ⑧

[![NPM version](https://img.shields.io/npm/v/gr8.svg)](https://www.npmjs.com/package/gr8)
[![Standard](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

FUNctional CSS shorthand utilities. `gr8` is both a handy [**set**](#utilities) of functional css utilities, as well as a handy [**tool**](#custom-utilities-) for generating functional css utilities.

```
$ npm i gr8
```

## Features

- **super**: Makes structuring layouts fast [without imposing limitations](#faq)
- **handy**: Utilities for columns, spacing, flexbox, typography, and more!
- **flexible**: Customize included utilities using [options](#options) for breakpoints, spacing, units, etc...
- **extensible**: Add [custom utilities](#custom-utilities-) using simple objects
- **in-use**: [Folder Studio](http://folderstudio.com), [2Pac](http://www.2pac.com/), [Hardly Everything](https://hardlyeverything.com), [LA Forum](http://laforum.org), [Album Art IQ](http://daily.redbullmusicacademy.com/specials/2016-album-art-iq/), [Hassan Rahim](http://hassanrahim.com/), etc...

**Skip straight to the [utilities](#utilities)! 🏃**

## Example

The fastest way to use `gr8` is to include [gr8.css](https://github.com/jongacnik/gr8/blob/master/dist/gr8.css) in your project and begin using styles:

```html
<div class="c6 p2 fs1-5 bcr">subarashīdesu!</div>
```

### More advanced...

While using the prebuilt css is handy, `gr8` becomes exceptionally useful if you use the [javascript API](#api) to customize the output. Let's set up with a couple options, add a custom `background-color` utility, and write the styles to stdout using the `toString` method:

```js
var gr8 = require('gr8')

var css = gr8({
  spacing: [0, 1, 2, 4],
  responsive: true
})

css.add({
  prop: 'background-color',
  vals: ['red', 'blue', 'green']
})

// pipe the css to a file, perhaps?
process.stdout.write(css.toString())
```

## Utilities

`gr8` default utilities:

{{ utilitySections }}


## API

The `gr8` api is very small and contains only 5 methods.

### `css = gr8(options)`

Initialize `gr8`. View all available [options](#options).

### `css.toString()`

Returns all utilities as a `String` of css. Very useful for [writing css to a file](#production).

### `css.attach()`

Attach all utilities to the document head in a style tag. Returns style node.

### `css.add(options)`

Adds a `gr8` utility. This is quite powerful so it [gets its own section](#custom-utilities-).

### `css.remove(key)`

Removes a built-in `gr8` utility. Accepts a single key or an array of keys.

<details>
  <summary>Accepted values</summary>

  {{ utilityKeys }}
</details>

## Options

Here are default options and details for what each option controls.

```js
var css = gr8({{ defaults }})
```

{{ optionsDetails }}

## Custom Utilities ✨

**The best way to learn how to write custom utilities is by peeking at the default utilities in [src/utils](https://github.com/jongacnik/gr8/tree/master/src/utils)!**

Perhaps the most useful aspect of `gr8` is adding custom utilities because it makes it simple to think about *all* your styles for a project in a functional manner. Utilities are added by passing options to the [`add`](#css-add-options-) method. Let's take a look at creating a `background-color` utility:

```js
css.add({
  prop: 'background-color',
  vals: ['red', 'green', 'blue']
})
```

...creates these utilities:

```css
.bcr{background-color:red}
.bcg{background-color:green}
.bcb{background-color:blue}
```

*Estupendo!*

Under the hood, `gr8` tries to create sensible selectors using a [combination of abbreviated css properties and values](#utility-design). We can also pass more options to the `add` method for granular control:

```js
css.add({
  prefix: 'bdw',
  suffix: ':after',
  prop: 'border-width',
  vals: {
    sm: 1,
    md: 4,
    lg: 8
  },
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

The `attach` method can be useful during development, but you'll usually want to make use of the `toString` method when thinking about bundling for production. That way you can autoprefix, minify, and maybe even [purify](https://www.npmjs.com/package/purify-css) (especially when using responsive utilities). The `toString` method returns all the css as a simple string, and we can leverage this in a node script to pipe to stdout or to save to a file:

```js
var fs = require('fs')
var gr8 = require('gr8')

var css = gr8()
var cssString = css.toString()

// pipe to stdout
process.stdout.write(cssString)

// or write to file
fs.writeFile('gr8.css', cssString, function (err) {
  if (err) {
    return console.log(err)
  }

  console.log('gr8 saved to gr8.css!')
})
```

From there you may use whatever build process you like to create your production bundle! I usually have my styles piped to stdout from a file like, **styles.js**, and will bundle using something like:

```
$ node styles.js | postcss --use autoprefixer | cssnano > dist/bundle.css
```

## FAQ

### Why was this made?

[f(css)](http://www.jon.gold/2015/07/functional-css/) is an interesting way to think about css. There are many solid approaches out there, `gr8` just happens to be my personal take. I like a system which is very flexible. Many of the sites we make at [Folder Studio](http://folderstudio.com) would be quite tricky to pull off without quickly and easily adjusting utilities en masse. 

### Why not use..?

Things like [gravitons](https://github.com/jxnblk/gravitons/), [basscss](https://github.com/jxnblk/basscss/), and [tachyons](https://github.com/tachyons-css/tachyons/) are all rad. If you like 'em, use 'em. I've tried them all to varying degrees of success, I just happen to prefer maximum flexibility, `gr8` style 🙃

## Fin!

`gr8` is built and maintained by [Jon Gacnik](http://jongacnik.com) and used extensively in projects at [Folder Studio](http://folderstudio.com).

Shout out [Jon-Kyle Mohr](http://jon-kyle.com/) for using `gr8` for the past bits, totally tearing this thing apart and helping rebuild it in various past incarnations.
