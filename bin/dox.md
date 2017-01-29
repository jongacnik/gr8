# ⓖⓡ⑧

[![gr8.style](https://img.shields.io/badge/website-gr8.style-ff69b4.svg)]()
[![NPM version](https://img.shields.io/npm/v/gr8.svg)]()
[![Standard](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)]()

FUNctional CSS shorthand utilities. `gr8` is both a handy **set** of functional css utilities, as well as a handy **tool** for generating functional css utilities.

```
npm i gr8
```

## Features
- **super**: Makes structuring layouts fast [without imposing limitations]()
- **simple**: Single purpose utilities avoid specificity issues
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

## Options

## Methods

## Utilities

`gr8` default utilities:

{{ utilityIndex }}

{{ utilitySections }}

## Why?

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
