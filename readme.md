<h1 align="center">gr8</h1>

<div align="center">
  <a href="https://www.npmjs.com/package/gr8">
    <img src="https://img.shields.io/npm/v/gr8.svg?style=flat-square" alt="NPM version" />
  </a>
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="NPM version" />
  </a>
</div>

<br />

`gr8` is a customizable [**set**](#utilities) of functional css utilities, as well as a [**tool**](#custom-utilities-) for generating custom functional css utilities. 

Builds on top of [**gr8-util**](https://github.com/jongacnik/gr8-util).

## Features

- **zero-config**: Include [gr8.css](https://github.com/jongacnik/gr8/blob/master/dist/gr8.css) in your project and begin building mobile-first interfaces.
- **customizable**: For more advanced use-cases, the [Javascript API](#api) generates custom `gr8` builds.
- **extensible**: It's easy to generate [custom css utilities](#custom-utilities) using simple objects.
- **postcss**: Use the [postcss transform](#postcss) to include `gr8` and generate utilities directly within your css.

## Utilities

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
.s1{width:100%}
.s2{width:50%}
.s3{width:33.33333333333333%}
.s4{width:25%}
.s5{width:20%}
.s6{width:16.666666666666664%}
.s7{width:14.285714285714285%}
.s8{width:12.5%}
.s9{width:11.11111111111111%}
.s10{width:10%}
.s11{width:9.090909090909092%}
.s12{width:8.333333333333332%}
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

</details>

<details id="opacity">
<summary>opacity</summary>

```css
.op0{opacity:0}
.op25{opacity:25}
.op50{opacity:50}
.op75{opacity:75}
.op100{opacity:100}
```

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

</details>

<details id="float">
<summary>float</summary>

```css
.fl{float:left}
.fr{float:right}
.fn{float:none}
.cf:after{content:"";display:block;clear:both}
```

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

</details>

<details id="size">
<summary>size</summary>

```css
.w0{width:0}
.w100{width:100%}
.h0{height:0}
.h100{height:100%}
.vw50{width:50vw}
.vw100{width:100vw}
.vwmn50{min-width:50vw}
.vwmn100{min-width:100vw}
.vwmx50{max-width:50vw}
.vwmx100{max-width:100vw}
.vh50{height:50vh}
.vh100{height:100vh}
.vhmn50{min-height:50vh}
.vhmn100{min-height:100vh}
.vhmx50{max-height:50vh}
.vhmx100{max-height:100vh}
.ar25:before{content:"";display:block;padding-top:25%;}
.ar50:before{content:"";display:block;padding-top:50%;}
.ar75:before{content:"";display:block;padding-top:75%;}
.ar100:before{content:"";display:block;padding-top:100%;}
```

</details>

<details id="typography">
<summary>typography</summary>

```css
.fs1{font-size:1rem}
.fs1-2{font-size:1.2rem}
.fs1-6{font-size:1.6rem}
.fs2-4{font-size:2.4rem}
.fs3-2{font-size:3.2rem}
.fs6-4{font-size:6.4rem}
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

</details>

<details id="miscellaneous">
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

</details>

<details id="development">
<summary>development</summary>

```css
.dev{outline:1px solid #912eff}
.dev > * {outline:1px solid #5497ff}
.dev > * > * {outline:1px solid #51feff}
.dev > * > * > * {outline:1px solid #ff0000}
.dev > * > * > * * {outline:1px solid #00ff00}
```

</details>

## API

### `css = gr8(options)`

Returns `gr8` utilties as a string of css. View all available [options](#options).

## Options

Options are documented below in 3 parts: [Value Options](#value-options), [Selector Options](#selector-options), and [Custom Utilities](#custom-utilities)

### Value Options

Value options are used to customize the values of numeric `gr8` utilities. They accept numbers, strings, arrays, or objects allowing for granular control over utilities. Refer to [gr8-util](https://github.com/jongacnik/gr8-util) for details. 

```js
var css = gr8({
  spacing: [0, 1, 2, 3, 4],
  fontSize: [1, 1.2, 1.6, 2.4, 3.2, 6.4],
  lineHeight: [1, 1.5],
  size: [0, 100],
  viewport: [50, 100],
  zIndex: [0, 1, 2, 3, 4],
  flexOrder: [0, 1, 2, 3, 4],
  opacity: [0, 25, 50, 75, 100],
  aspectRatio: [25, 50, 75, 100],
  textColumn: [1, 2, 3, 4]
})
```

<details>
  <summary>More Details</summary>

  | option | controls |
  | --- | --- |
  | spacing | [margin](#margin) & [padding](#padding) utilities |
  | fontSize | [font-size](#typography) utilities |
  | lineHeight | [line-height](#typography) utilities |
  | size | [width & height](#size) utilities |
  | viewport | [viewport](#size) utilities |
  | zIndex | [zIndex](#positioning) utilities |
  | flexOrder | [flex-order](#flex) utilities |
  | opacity | [opacity](#opacity) utilities |
  | aspectRatio | [aspect ratio](#size) utilities |
  | textColumn | [text columns](#typography) utilities |
</details>

<details>
  <summary>Example</summary>

  Given these `fontSize` options, the following font-size utilities will be generated:

  ```js
  var css = gr8({
    fontSize: [ 1, 2, 3, { huge: 50 } ]
  })
  ```
  
  ```css
  .fs1{font-size:1rem}
  .fs2{font-size:2rem}
  .fs3{font-size:3rem}
  .fshuge{font-size:50rem}
  ```

</details>

### Selector Options

Selector options help customize the selectors in `gr8` output.

### `selector`

Provide a function to customize the default css selector. Function expects a selector name as input and returns a css selector string as output. For example, to use an attribute selector instead of classes:

```js
var css = gr8({
  selector: s => `[gr8~="${s}"]`
})
```

<details>
  <summary>Output</summary>

  ```css
  [gr8~="fs1"]{font-size:1rem}
  [gr8~="fs1-6"]{font-size:1.6rem}
  /* etc... */
  ```

</details>

### `breakpoints`

Pass an object to customize responsive utilities, pass `false` to disable responsive utilities. Object keys are used in selector names and object values are used to define the media queries. Pass in integers (defaults to `min-width` pixel based media queries), or an actual media query string:

```js
var css = gr8({
  breakpoints: {
    sm: 1024,
    nb: 'max-width:1024px',
    data-md: 1280,
    portrait: 'orientation:portrait'
  }
})
```

<details>
  <summary>Output</summary>

  ```css
  @media(min-width:1024px){
    [sm~="fs1"]{font-size:1rem}
    /* etc... */  
  }
  @media(max-width:1024px){
    [nb~="fs1"]{font-size:1rem}
    /* etc... */  
  }
  @media(min-width:1280px){
    [data-md~="fs1"]{font-size:1rem}
    /* etc... */  
  }
  @media(orientation:portrait){
    [portrait~="fs1"]{font-size:1rem}
    /* etc... */  
  }
  ```

</details><br>

**Note:** By default `gr8` generates minimal attribute selectors for responsive utilities (ex: `[sm~="util"]`). If you need this to be valid html, for React or something, simply prepend `data-` to your breakpoint keys. You'll end up with selectors like: `[data-sm~="util"]`.

### `breakpointSelector`

The `breakpointSelector` option allows you to change the responsive utility selectors to use classes using a shortcut `'class'`, or to provide your own selector function for further customization:

#### `'class'` Shortcut

```js
var css = gr8({
  breakpointSelector: 'class'
})
```

<details>
  <summary>Output</summary>
  
  ```css
  @media(min-width:1024px){
    .sm-fs1{font-size:1rem}
    /* etc... */
  }
  @media(min-width:1280px){
    .md-fs1{font-size:1rem}
    /* etc... */
  }
  @media(min-width:1440px){
    .lg-fs1{font-size:1rem}
    /* etc... */
  }
  ```

</details>

#### Selector Function


```js
var css = gr8({
  breakpointSelector: key => s => `.gr8-${key}-${s}`
})
```

<details>
  <summary>Output</summary>

  ```css
  @media(min-width:1024px){
    .gr8-sm-fs1{font-size:1rem}
    /* etc... */
  }
  @media(min-width:1280px){
    .gr8-md-fs1{font-size:1rem}
    /* etc... */
  }
  @media(min-width:1440px){
    .gr8-lg-fs1{font-size:1rem}
    /* etc... */
  }
  ```

</details>

## Custom Utilities

`gr8` is built on top of [gr8-util](https://github.com/jongacnik/gr8-util). This makes it easy to generate custom utilities. Pass an array of objects into the `utils` option, one for each custom utility. These are passed directly into `gr8-util`:

```js
var bgcolor = {
  prop: {
    bgc: 'background-color'
  },
  vals: ['red', 'blue', 'green']
}

var css = gr8({
  utils: [ bgcolor ]
})
```

```css
.bgcr{background-color:red}
.bgcb{background-color:blue}
.bgcg{background-color:green}
```

**Refer to [gr8-util](https://github.com/jongacnik/gr8-util) for further documentation on generating custom utilities. Also take a look at the `utils` directory in this repository to review how the default gr8 utilities are constructed.**

## Philosophy

`gr8` has been developed and iterated on (ongoing), specifically for use within projects at [Folder Studio](http://folderstudio.com). It shares similarities with other functional css libraries like [tachyons](https://github.com/tachyons-css/tachyons) or [basscss](https://github.com/basscss/basscss), but diverges in it's minimalism and customizability. `gr8` provides no colors, no borders, no font families, etc out of the box, but instead provides ways to rapidly define your own utilties for things like these using simple objects.

## See Also

- [gr8-util](https://github.com/jongacnik/gr8-util)
- ~~[gr8-tachyons]()~~

## License

[MIT](https://github.com/jongacnik/gr8/blob/master/LICENSE)
