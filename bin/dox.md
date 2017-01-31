# ⓖⓡ⑧

[![gr8.style](https://img.shields.io/badge/website-gr8.style-ff69b4.svg)]()
[![NPM version](https://img.shields.io/npm/v/gr8.svg)]()
[![Standard](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)]()

FUNctional CSS shorthand utilities. `gr8` is both a handy [**set**](#utilities) of functional css utilities, as well as a handy **tool** for generating functional css utilities.

```
npm i gr8
```

## Features
- **super**: Makes structuring layouts fast [without imposing limitations]()
- **simple**: Single purpose utilities are easy to learn and avoid specificity issues
- **flexible**: Customize included utilities using [options]() for breakpoints, spacing, units, etc...
- **handy**: Add [custom utilities]() using simple objects
- **in-use**: [Folder Studio](http://folderstudio.com), [2Pac](http://www.2pac.com/), [Hardly Everything](https://hardlyeverything.com), [LA Forum](http://laforum.org), [Album Art IQ](http://daily.redbullmusicacademy.com/specials/2016-album-art-iq/), [Hassan Rahim](http://hassanrahim.com/), etc...

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

Now we can use the utilities in our app! [Click here to see a running example]().

```html
<div class="c6 p2 fs1-5 tcr" sm="c12 p1">subarashīdesu!</div>
```

## API

The `gr8` api is very simple and only contains 3 methods.

### css = gr8(options)

Initialize `gr8`. View all available [options](#options).

### css.attach()

Attach all utilities to the document head in a style tag. Returns style node.

### css.toString()

Returns all utilities as a `String` of css. Generally used for [writing css to a file]().

### css.add(obj)

Add your own `gr8` utility! This is really powerful so it [gets its own section]().

## Options

The following options are available for customizing `gr8` utilities:

```js
var css = gr8({{ defaults }})
```
- `spacing` values create [margin](#margin) and [padding](#padding) utilities
- `fontSize` values create [font-size](#typography) utilities
- `lineHeight` values create [line-height](#typography) utilities
- `size` values create [width & height](#size) utilities
- `viewport` values create [viewport](#size) utilities
- `zIndex` values create [zIndex](#positioning) utilities
- `order` values create [flex-order](#flex) utilities
- `opacity` values create [opacity](#opacity) utilities
- `aspect` values create [aspect ratio](#size) utilities
- `textColumns` values create [text columns (css columns property)](#typography) utilities
- `unit` is the default unit used for numerical values which do not have a specific unit defined (things like font-size, margin, padding, etc.)
- `nested` adds support for [infinitely nestable columns](#nesting) which always retain actual size (⚠️ increases size of css output)
- `responsive` adds support for [responsive utilities](#responsive)
- `attribute` use `gr8` [breakpoint attribute selectors](#responsive) — set to false to use prefixed class selectors instead
- `max` should breakpoints be `max-width` or `min-width` → desktop-first or mobile-first?
- `breakpoints` for which to create responsive utilities (only applies if `responsive` is `true`)

## Utilities

`gr8` default utilities:

{{ utilityIndex }}

{{ utilitySections }}

## FAQ (WIP)

### Huh?

### Why not Tachyons or Basscss or...

`gr8` was built because I like building my own tools. I've actually used many of the other toolkits including Tachyons, Basscss, Gravitons which are all fantastic and big big credit to their creators

Tachyons, Basscss, and the like are incredible tools, and gravitons was the original inspiration for the initial naming structure of gr8 a couple years ago. However, the designs which we often execute in the studio can end up getting quite complex, and the configurability of some of the existing fxcss libs are not quite up to par.

gr8 is a *very* tweakable set of functional css utilities. I've been using it, in various incarnations, for almost two years, and has certainly been used in production

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
- `selector value` is the specific identifier for the utility value. To make it css classname safe, decmials are replaced with hyphens (`1.5` → `1-5`)
- `property` is the css property name which the utility targets
- `value` is the value corresponding to the css property
- `unit` is the unit attached to the value

This structure is modified based on context and need of the utility. For example, the column utilities define the width property, but their suffix is a `c` and the selector value is a numeric index rather than a sanitized version of the width value.

## Production

The `attach` method is handy, especially during development, but for production you might want to load your css in an external file, which is autoprefixed, minified, and maybe even [purified](https://www.npmjs.com/package/purify-css) (especially when using responsive utilities and nested columns!). The `toString` method returns all the css as a simple string, and we can leverage this in a node script to get a nice, production-ready css file:

```js
var fs = require('fs')
var gr8 = require('gr8')
var postcss = require('postcss')
var autoprefixer = require('autoprefixer')

var css = gr8(/* pass in your options */)
var cssString = css.toString()

fs.writeFile('gr8.css', cssString, function (err) {
  if (err) {
    return console.log(err)
  }

  console.log('production-ready gr8 build saved to gr8.css!')
})
```

## Super!
