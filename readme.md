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
var css = gr8({
  spacing: [0, 1, 2, 3, 4],
  fontSize: [6.4, 3.2, 2.4, 1.6, 1.2, 1.0],
  lineHeight: [1, 1.5],
  size: [0, 100],
  viewport: 100,
  zIndex: [0, 1, 2, 3, 4],
  order: [0, 1, 2, 3, 4],
  opacity: [0, 25, 50, 75, 100],
  aspect: [0, 20, 50, 75, 100],
  textColumns: [1, 2, 3, 4],
  unit: 'rem',
  nested: false,
  responsive: false,
  attribute: true,
  max: true,
  breakpoints: {
    xl: '1439px',
    lg: '1260px',
    md: '1023px',
    sm: '767px'
  }
})
```

| option | expects | controls |
| --- | --- | --- |
| spacing | (`Array`/`Number`) | [margin](#margin) & [padding](#padding) utilities |
| fontSize | (`Array`/`Number`) | [font-size](#typography) utilities |
| lineHeight | (`Array`/`Number`) | [line-height](#typography) utilities |
| size | (`Array`/`Number`) | [width & height](#size) utilities |
| viewport | (`Array`/`Number`) | [viewport](#size) utilities |
| zIndex | (`Array`/`Number`) | [zIndex](#positioning) utilities |
| order | (`Array`/`Number`) | [flex-order](#flex) utilities |
| opacity | (`Array`/`Number`) | [opacity](#opacity) utilities |
| aspect | (`Array`/`Number`) | [aspect ratio](#size) utilities |
| textColumns | (`Array`/`Number`) | [text columns](#typography) utilities |
| unit | (`String`) | default unit for numerical values |
| nested | (`Bool`) | support for [nested columns](#nesting) ⚠️ &nbsp;increases size of css output ⚠️ |
| responsive | (`Bool`) | support for [responsive utilities](#responsive) |
| attribute | (`Bool`) | [breakpoint attribute selectors](#responsive) or prefixed class selectors? |
| max | (`Bool`) | `max-width` (desktop-first) or `min-width` (mobile-first) breakpoints? |
| breakpoints | (`Object`) | breakpoint keys and widths (only applies if using responsive utilities) |


## Utilities

`gr8` default utilities:

- [column](#column)
- [margin](#margin)
- [padding](#padding)
- [opacity](#opacity)
- [background](#background)
- [flex](#flex)
- [display](#display)
- [float](#float)
- [overflow](#overflow)
- [positioning](#positioning)
- [size](#size)
- [typography](#typography)
- [miscellaneous](#miscellaneous)
- [development](#development)

#### column
```css
.c1{width:8.333333333333332%}
.c2{width:16.666666666666664%}
.c3{width:25%}
.c4{width:33.33333333333333%}
.c5{width:41.66666666666667%}
.c6{width:50%}
.c7{width:58.333333333333336%}
.c8{width:66.66666666666666%}
.c9{width:75%}
.c10{width:83.33333333333334%}
.c11{width:91.66666666666666%}
.c12{width:100%}
.co0{margin-left:0}
.co1{margin-left:8.333333333333332%}
.co2{margin-left:16.666666666666664%}
.co3{margin-left:25%}
.co4{margin-left:33.33333333333333%}
.co5{margin-left:41.66666666666667%}
.co6{margin-left:50%}
.co7{margin-left:58.333333333333336%}
.co8{margin-left:66.66666666666666%}
.co9{margin-left:75%}
.co10{margin-left:83.33333333333334%}
.co11{margin-left:91.66666666666666%}
.co12{margin-left:100%}

```
#### margin
```css
.m0{margin:0}
.m1{margin:1rem}
.m2{margin:2rem}
.m3{margin:3rem}
.m4{margin:4rem}
.mt0{margin-top:0}
.mt1{margin-top:1rem}
.mt2{margin-top:2rem}
.mt3{margin-top:3rem}
.mt4{margin-top:4rem}
.mr0{margin-right:0}
.mr1{margin-right:1rem}
.mr2{margin-right:2rem}
.mr3{margin-right:3rem}
.mr4{margin-right:4rem}
.mb0{margin-bottom:0}
.mb1{margin-bottom:1rem}
.mb2{margin-bottom:2rem}
.mb3{margin-bottom:3rem}
.mb4{margin-bottom:4rem}
.ml0{margin-left:0}
.ml1{margin-left:1rem}
.ml2{margin-left:2rem}
.ml3{margin-left:3rem}
.ml4{margin-left:4rem}
.mx0{margin-left:0;margin-right:0}
.mx1{margin-left:1rem;margin-right:1rem}
.mx2{margin-left:2rem;margin-right:2rem}
.mx3{margin-left:3rem;margin-right:3rem}
.mx4{margin-left:4rem;margin-right:4rem}
.my0{margin-top:0;margin-bottom:0}
.my1{margin-top:1rem;margin-bottom:1rem}
.my2{margin-top:2rem;margin-bottom:2rem}
.my3{margin-top:3rem;margin-bottom:3rem}
.my4{margin-top:4rem;margin-bottom:4rem}

```
#### padding
```css
.p0{padding:0}
.p1{padding:1rem}
.p2{padding:2rem}
.p3{padding:3rem}
.p4{padding:4rem}
.pt0{padding-top:0}
.pt1{padding-top:1rem}
.pt2{padding-top:2rem}
.pt3{padding-top:3rem}
.pt4{padding-top:4rem}
.pr0{padding-right:0}
.pr1{padding-right:1rem}
.pr2{padding-right:2rem}
.pr3{padding-right:3rem}
.pr4{padding-right:4rem}
.pb0{padding-bottom:0}
.pb1{padding-bottom:1rem}
.pb2{padding-bottom:2rem}
.pb3{padding-bottom:3rem}
.pb4{padding-bottom:4rem}
.pl0{padding-left:0}
.pl1{padding-left:1rem}
.pl2{padding-left:2rem}
.pl3{padding-left:3rem}
.pl4{padding-left:4rem}
.px0{padding-left:0;padding-right:0}
.px1{padding-left:1rem;padding-right:1rem}
.px2{padding-left:2rem;padding-right:2rem}
.px3{padding-left:3rem;padding-right:3rem}
.px4{padding-left:4rem;padding-right:4rem}
.py0{padding-top:0;padding-bottom:0}
.py1{padding-top:1rem;padding-bottom:1rem}
.py2{padding-top:2rem;padding-bottom:2rem}
.py3{padding-top:3rem;padding-bottom:3rem}
.py4{padding-top:4rem;padding-bottom:4rem}

```
#### opacity
```css
.op0{opacity:0}
.op25{opacity:0.25}
.op50{opacity:0.5}
.op75{opacity:0.75}
.op100{opacity:1}

```
#### background
```css
.bgsc{background-size:cover}
.bgsct{background-size:contain}
.bgpc{background-position:center}
.bgpt{background-position:top}
.bgpr{background-position:right}
.bgpb{background-position:bottom}
.bgpl{background-position:left}
.bgrn{background-repeat:no-repeat}
.bgrx{background-repeat:repeat-x}
.bgry{background-repeat:repeat-y}

```
#### flex
```css
.x{display:flex}
.xac{align-items:center}
.xab{align-items:baseline}
.xas{align-items:stretch}
.xafs{align-items:flex-start}
.xafe{align-items:flex-end}
.xdr{flex-direction:row}
.xdrr{flex-direction:row-reverse}
.xdc{flex-direction:column}
.xdcr{flex-direction:column-reverse}
.xjc{justify-content:center}
.xjb{justify-content:space-between}
.xja{justify-content:space-around}
.xjs{justify-content:flex-start}
.xje{justify-content:flex-end}
.xw{flex-wrap:wrap}
.xwr{flex-wrap:wrap-reverse}
.xwn{flex-wrap:nowrap}
.xi{flex:initial}
.xx{flex:1}
.xa{flex:auto}
.xn{flex:none}
.xo0{order:0}
.xo1{order:1}
.xo2{order:2}
.xo3{order:3}
.xo4{order:4}
.xot{order:-1}
.xob{order:99}

```
#### display
```css
.df{display:flex}
.db{display:block}
.dib{display:inline-block}
.di{display:inline}
.dt{display:table}
.dtc{display:table-cell}
.dtr{display:table-row}
.dn{display:none}

```
#### float
```css
.fl{float:left}
.fr{float:right}
.fn{float:none}
.cf:after{content:"";display:block;clear:both}

```
#### overflow
```css
.oh{overflow:hidden}
.os{overflow:scroll}
.oxh{overflow-x:hidden}
.oxs{overflow-x:scroll}
.oyh{overflow-y:hidden}
.oys{overflow-y:scroll}

```
#### positioning
```css
.psa{position:absolute}
.psr{position:relative}
.psf{position:fixed}
.pss{position:static}
.t0{top:0}
.r0{right:0}
.b0{bottom:0}
.l0{left:0}
.z0{z-index:0}
.z1{z-index:1}
.z2{z-index:2}
.z3{z-index:3}
.z4{z-index:4}

```
#### size
```css
.w0{width:0}
.w100{width:100%}
.h0{height:0}
.h100{height:100%}
.vw100{width:100vw}
.vh100{height:100vh}
.vwmn100{min-width:100vw}
.vhmn100{min-height:100vh}
.vwmx100{max-width:100vw}
.vhmx100{max-height:100vh}
.ar0{content:"";display:block;padding-top:0}
.ar20{content:"";display:block;padding-top:20%}
.ar50{content:"";display:block;padding-top:50%}
.ar75{content:"";display:block;padding-top:75%}
.ar100{content:"";display:block;padding-top:100%}

```
#### typography
```css
.fs6-4{font-size:6.4rem}
.fs3-2{font-size:3.2rem}
.fs2-4{font-size:2.4rem}
.fs1-6{font-size:1.6rem}
.fs1-2{font-size:1.2rem}
.fs1{font-size:1rem}
.lh1{line-height:1}
.lh1-5{line-height:1.5}
.fsn{font-style:normal}
.fsi{font-style:italic}
.fwn{font-weight:normal}
.fwb{font-weight:bold}
.tal{text-align:left}
.tac{text-align:center}
.tar{text-align:right}
.taj{text-align:justify}
.tdu{text-decoration:underline}
.tdo{text-decoration:overline}
.tdlt{text-decoration:line-through}
.tdn{text-decoration:none}
.ttu{text-transform:uppercase}
.ttl{text-transform:lowercase}
.ttc{text-transform:capitalize}
.ttn{text-transform:none}
.vabl{vertical-align:baseline}
.vat{vertical-align:top}
.vam{vertical-align:middle}
.vab{vertical-align:bottom}
.tc1{columns:1}
.tc2{columns:2}
.tc3{columns:3}
.tc4{columns:4}

```
#### miscellaneous
```css
.curp{cursor:pointer}
.curd{cursor:default}
.cura{cursor:alias}
.curzi{cursor:zoom-in}
.curzo{cursor:zoom-out}
.usn{user-select:none}
.usa{user-select:auto}
.ust{user-select:text}
.pen{pointer-events:none}
.pea{pointer-events:auto}

```
#### development
```css
.dev{outline:1px solid #912eff}
.dev > *{outline:1px solid #5497ff}
.dev > * > *{outline:1px solid #51feff}
.dev > * > * > *{outline:1px solid #ff0000}
.dev > * > * > * > *{outline:1px solid #00ff00}

```

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
