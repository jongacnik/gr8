# ⓖⓡ⑧

[![gr8.style](https://img.shields.io/badge/website-gr8.style-ff69b4.svg)]()
[![NPM version](https://img.shields.io/npm/v/gr8.svg)]()
[![Standard](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)]()

FUNctional CSS shorthand utilities. `gr8` is both a handy [**set**](#utilities) of functional css utilities, as well as a handy [**tool**](#custom-utilities-) for generating functional css utilities.

```
npm i gr8
```

## Table of Contents

## Features
- **super**: Makes structuring layouts fast [without imposing limitations](#faq)
- **handy**: Utilities for columns, spacing, flexbox, typography, and more!
- **flexible**: Customize included utilities using [options](#options) for breakpoints, spacing, units, etc...
- **extensible**: Add [custom utilities](#custom-utilities-) using simple objects
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

The `gr8` api is very small and only contains 3 methods.

### css = gr8(options)

Initialize `gr8`. View all available [options](#options).

### css.attach()

Attach all utilities to the document head in a style tag. Returns style node.

### css.toString()

Returns all utilities as a `String` of css. Generally useful for [writing css to a file]().

### css.add(obj)

Adds a `gr8` utility. This is quite powerful so it [gets its own section]().

## Options

This sections covers default options and provides details for what each option controls.

```js
var css = gr8({{ defaults }})
```

{{ optionsDetailsAlt }}

## Utilities

`gr8` default utilities:

{{ utilityIndex }}

{{ utilitySections }}

## Custom Utilities ✨

This section is split into 2 parts, a how-to guide and a reference documenting options:

- [How-To]()
- [Options Reference]()

### How-To

Perhaps my favorite part about `gr8` is adding custom utilities because it makes it simple to think about *all* your css for a project in a functional manner. Utilities are added by passing an object with options to the [`add`](#css-add-obj-) method. Let's take a look at creating a `text-color` utility:

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

Under the hood, `gr8` tries to create sensible selectors using a [combination of abbreviated css properties and values](#utility-design). Of course, you can pass more options to the `add` method for more granular control. Let's say we want to specify our colors using `rgba` values, but still keep simple abbreviations in the utility name:

```js
css.add({
  prop: 'text-color',
  vals: [
    { r: rgba(255, 0, 0, 0) },
    { g: rgba(0, 255, 0, 0) },
    { b: rgba(0, 0, 255, 0) }
  ]
})
```

```css
.tcr{text-color:rgba(255, 0, 0, 0)}
.tcg{text-color:rgba(0, 255, 0, 0)}
.tcb{text-color:rgba(0, 0, 255, 0)}
```

Maybe we want to use our own prefix instead of `tc`. We also want a hyphen between the prefix and the value, and we want to use full color names instead of abbreviated versions:

```js
css.add({
  prefix: 'color',
  prop: 'text-color',
  vals: [
    { red: rgba(255, 0, 0, 0) },
    { green: rgba(0, 255, 0, 0) },
    { blue: rgba(0, 0, 255, 0) }
  ],
  hyphenate: true
})
```

```css
.color-red{text-color:rgba(255, 0, 0, 0)}
.color-green{text-color:rgba(0, 255, 0, 0)}
.color-blue{text-color:rgba(0, 0, 255, 0)}
```

*Nice!*

We can also make numerical utilities:

```js
css.add({
  prop: 'border-width',
  vals: [1, 25.7, 100],
  unit: true
})
```

```css
.bw1{border-width:1rem}
.bw25-7{border-width:25.7rem}
.bw100{border-width:100rem}
```

Notice how float values are made selector safe using hyphens. The values get appended with `rem` because that is the default unit set in the [options](#options). It's easy to override:

```js
css.add({
  prop: 'border-width',
  vals: [1, 25.7, 100],
  unit: 'px'
})
```

```css
.bw1{border-width:1px}
.bw25-7{border-width:25.7px}
.bw100{border-width:100px}
```

### All Options

| option | expects | controls |
| --- | --- | --- |
| prefix | `String` | |
| suffix | `String` | |
| prop | `String` | |
| vals | `Array`, `Number` | |
| hyphenate | `Bool` | |
| unit | `Bool`, `String` | |
| transform | `Fcn` | |


## Responsive

## Nested Columns

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

<small>`gr8` is built and maintained by [Jon Gacnik](http://jongacnik.com) and used extensivley at [Folder Studio](http://folderstudio.com)</small>


estupendo!
groot!
groß!
flott!
