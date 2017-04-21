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

The fastest way to use `gr8` is to include [gr8.css]() in your project and begin using styles:

```html
<div class="c6 p2 fs1-5 tcr" sm="c12 p1 tcb">subarashīdesu!</div>
```

### More advanced...

While using the prebuilt css is handy, `gr8` becomes exceptionally useful if you use the [javascript API](#api) to customize the output. Let's set up with a couple options, add a custom `text-color` utility, and write the styles to stdout using the `toString` method:

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

// pipe the css to a file, perhaps?
process.stdout.write(css.toString())
```

## Utilities

`gr8` default utilities:

<details id="column">
<summary>column</summary>

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

Included Utilities: `column.column`, `column.offset`, `column.nestedColumn`, `column.nestedOffset`
</details>

<details id="margin">
<summary>margin</summary>

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

Included Utilities: `margin.margin`, `margin.marginX`, `margin.marginY`
</details>

<details id="padding">
<summary>padding</summary>

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

Included Utilities: `padding.padding`, `padding.paddingX`, `padding.paddingY`
</details>

<details id="opacity">
<summary>opacity</summary>

```css
.op0{opacity:0}
.op25{opacity:0.25}
.op50{opacity:0.5}
.op75{opacity:0.75}
.op100{opacity:1}
```

Included Utilities: `opacity`
</details>

<details id="background">
<summary>background</summary>

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

Included Utilities: `background.size`, `background.position`, `background.repeat`
</details>

<details id="flex">
<summary>flex</summary>

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

Included Utilities: `flex.display`, `flex.align`, `flex.direction`, `flex.justify`, `flex.wrap`, `flex.flex`, `flex.order`, `flex.orderSpecial`
</details>

<details id="display">
<summary>display</summary>

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

Included Utilities: `display`
</details>

<details id="float">
<summary>float</summary>

```css
.fl{float:left}
.fr{float:right}
.fn{float:none}
.cf:after{content:"";display:block;clear:both}
```

Included Utilities: `float.float`, `float.clear`
</details>

<details id="overflow">
<summary>overflow</summary>

```css
.oh{overflow:hidden}
.os{overflow:scroll}
.oxh{overflow-x:hidden}
.oxs{overflow-x:scroll}
.oyh{overflow-y:hidden}
.oys{overflow-y:scroll}
```

Included Utilities: `overflow`
</details>

<details id="positioning">
<summary>positioning</summary>

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

Included Utilities: `positioning.position`, `positioning.placement`, `positioning.zindex`
</details>

<details id="size">
<summary>size</summary>

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

Included Utilities: `size.size`, `size.viewportWidth`, `size.viewportHeight`, `size.viewportMinWidth`, `size.viewportMinHeight`, `size.viewportMaxWidth`, `size.viewportMaxHeight`, `size.aspect`
</details>

<details id="type">
<summary>typography</summary>

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
.toi{text-overflow:initial}
.toc{text-overflow:clip}
.toe{text-overflow:ellipsis}
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
.wsn{white-space:normal}
.wsnw{white-space:nowrap}
.wsp{white-space:pre}
.wsi{white-space:inherit}
.tc1{columns:1}
.tc2{columns:2}
.tc3{columns:3}
.tc4{columns:4}
```

Included Utilities: `type.fontSize`, `type.lineHeight`, `type.fontStyle`, `type.fontWeight`, `type.textAlign`, `type.textOverflow`, `type.textDecoration`, `type.textTransform`, `type.verticalAlign`, `type.whiteSpace`, `type.textColumn`
</details>

<details id="misc">
<summary>miscellaneous</summary>

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

Included Utilities: `misc.cursor`, `misc.userSelect`, `misc.pointerEvents`
</details>

<details id="dev">
<summary>development</summary>

```css
.dev{outline:1px solid #912eff}
.dev > *{outline:1px solid #5497ff}
.dev > * > *{outline:1px solid #51feff}
.dev > * > * > *{outline:1px solid #ff0000}
.dev > * > * > * *{outline:1px solid #00ff00}
```

Included Utilities: `dev`
</details>


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

  `column.column`, `column.offset`, `column.nestedColumn`, `column.nestedOffset`, `margin.margin`, `margin.marginX`, `margin.marginY`, `padding.padding`, `padding.paddingX`, `padding.paddingY`, `opacity`, `background.size`, `background.position`, `background.repeat`, `flex.display`, `flex.align`, `flex.direction`, `flex.justify`, `flex.wrap`, `flex.flex`, `flex.order`, `flex.orderSpecial`, `display`, `float.float`, `float.clear`, `overflow`, `positioning.position`, `positioning.placement`, `positioning.zindex`, `size.size`, `size.viewportWidth`, `size.viewportHeight`, `size.viewportMinWidth`, `size.viewportMinHeight`, `size.viewportMaxWidth`, `size.viewportMaxHeight`, `size.aspect`, `type.fontSize`, `type.lineHeight`, `type.fontStyle`, `type.fontWeight`, `type.textAlign`, `type.textOverflow`, `type.textDecoration`, `type.textTransform`, `type.verticalAlign`, `type.whiteSpace`, `type.textColumn`, `misc.cursor`, `misc.userSelect`, `misc.pointerEvents`, `dev`
</details>

## Options

Here are default options and details for what each option controls.

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
| spacing | `Array`/`Number` | [margin](#margin) & [padding](#padding) utilities |
| fontSize | `Array`/`Number` | [font-size](#type) utilities |
| lineHeight | `Array`/`Number` | [line-height](#type) utilities |
| size | `Array`/`Number` | [width & height](#size) utilities |
| viewport | `Array`/`Number` | [viewport](#size) utilities |
| zIndex | `Array`/`Number` | [zIndex](#positioning) utilities |
| order | `Array`/`Number` | [flex-order](#flex) utilities |
| opacity | `Array`/`Number` | [opacity](#opacity) utilities |
| aspect | `Array`/`Number` | [aspect ratio](#size) utilities |
| textColumns | `Array`/`Number` | [text columns](#type) utilities |
| unit | `String` | default unit for numerical values |
| nested | `Bool` | support for [nested columns](#nested-columns) ⚠️ increases size of css output ⚠️ |
| responsive | `Bool` | support for [responsive utilities](#responsive) |
| attribute | `Bool` | [breakpoint attribute selectors](#responsive) or prefixed class selectors? |
| max | `Bool` | `max-width` (desktop-first) or `min-width` (mobile-first) breakpoints? |
| breakpoints | `Object` | breakpoint keys and widths (only applies if using responsive utilities) |


## Custom Utilities ✨

**The best way to learn how to write custom utilities is by peeking at the default utilities in [src/utils](https://github.com/jongacnik/gr8/tree/master/src/utils)!**

Perhaps the most useful aspect of `gr8` is adding custom utilities because it makes it simple to think about *all* your styles for a project in a functional manner. Utilities are added by passing options to the [`add`](#css-add-options-) method. Let's take a look at creating a `text-color` utility:

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

**Warning:** There are some [specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) concerns when using nested columns in combination with responsive utilities. To minimize bloat 😳 not every possible cascade permutation is provided. You'll need to be a little redundant with your utilities to avoid issues, but it's quite doable. ⚠️ **In general I recommend avoiding nested columns unless you are implementing a design which absolutely requires them!** ⚠️

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

The `attach` method can be useful during development, but you'll usually want to make use of the `toString` method when thinking about bundling for production. That way you can autoprefix, minify, and maybe even [purify](https://www.npmjs.com/package/purify-css) (especially when using responsive utilities and nested columns!). The `toString` method returns all the css as a simple string, and we can leverage this in a node script to pipe to stdout or to save to a file:

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
