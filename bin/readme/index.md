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

`gr8` is a customizable [**set**](#utilities) of functional css utilities, as well as a [**tool**](#custom-utilities-) for generating custom functional css utilities. Builds on top of [**gr8-util**](https://github.com/jongacnik/gr8-util).

## Features

- **zero-config**: Include [gr8.css](https://github.com/jongacnik/gr8/blob/master/dist/gr8.css) in your project and begin building mobile-first interfaces.
- **customizable**: For more advanced use-cases, the [Javascript API](#api) generates custom `gr8` builds.
- **extensible**: It's easy to generate [custom css utilities](#custom-utilities) using simple objects.
- **postcss**: Use the [postcss transform](#postcss) to include `gr8` and generate utilities directly within your css.

## Utilities

{{ utilitySections }}

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

`gr8` is built on top of [**gr8-util**](https://github.com/jongacnik/gr8-util). This makes it easy to generate custom utilities. Pass an array of objects into the `utils` option, one for each custom utility. These are passed directly into `gr8-util`:

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
