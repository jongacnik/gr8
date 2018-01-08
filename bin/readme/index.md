<h1 align="center">gr8</h1>

<div align="center">
  <a href="https://www.npmjs.com/package/gr8">
    <img src="https://img.shields.io/npm/v/gr8.svg?style=flat-square" alt="NPM version" />
  </a>
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="NPM version" />
  </a>
  <a href="http://gr8.style">
    <img src="https://img.shields.io/badge/website-gr8.style-ff69b4.svg?style=flat-square" alt="Website">
  </a>
</div>

<br />

Customizable, functional css utilities built using [**gr8-util**](https://github.com/jongacnik/gr8-util). Includes:

- [**css stylesheet**](#stylesheet-usage) with default utilities
- [**`gr8` function**](#javascript-usage) to generate and customize utilities within javascript

## Usage

### stylesheet usage

The simplest way to use `gr8` is to include the [gr8.css](https://github.com/jongacnik/gr8/blob/master/dist/gr8.css) stylesheet in your project:

```html
<link rel="stylesheet" href="dist/gr8.css" />
```

### javascript usage

Use the `gr8` function to generate utilities:

```js
var gr8 = require('gr8')
var css = gr8()
```

[Detailed usage →](#api)

## Utilities

Default utilities:

{{ utilitySections }}

## API

### `css = gr8([opts])`

Generate utilities and return a string of css. `opts` accepts the following values:

#### Value Options

- `opts.spacing` **[Mixed]** values for [margin](#margin) & [padding](#padding) utilities
- `opts.fontSize` **[Mixed]** values for [font-size](#typography) utilities
- `opts.lineHeight` **[Mixed]** values for [line-height](#typography) utilities
- `opts.size` **[Mixed]** values for [width & height](#size) utilities
- `opts.viewport` **[Mixed]** values for [viewport](#size) utilities
- `opts.zIndex` **[Mixed]** values for [zIndex](#positioning) utilities
- `opts.flexOrder` **[Mixed]** values for [flex-order](#flex) utilities
- `opts.opacity` **[Mixed]** values for [opacity](#opacity) utilities
- `opts.aspectRatio` **[Mixed]** values for [aspect ratio](#size) utilities
- `opts.textColumn` **[Mixed]** values for [text columns](#typography) utilities

#### Selector Options

- `opts.selector` **[Function]** css selector template function
- `opts.breakpoints` **[Object]** values for breakpoint utilities
- `opts.breakpointSelector` **[String | Function]** selector shortcut or css selector template function

#### Custom Utilities Options

- `opts.utils` **[Array]** custom [gr8-util](https://github.com/jongacnik/gr8-util) utilities
- `opts.exclude` **[Array]** keys of default utilities to exclude

## Value Options

Value options customize numeric `gr8` utilities. They accept Numbers, Strings, Arrays, or Objects. Typically Arrays of Numbers will be used. Refer to [gr8-util](https://github.com/jongacnik/gr8-util) for details on all possible ways to format values.

**Defaults:**

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

## Selector Options

Selector options control selectors & breakpoints.

**Defaults:**

```js
var css = gr8({
  selector: s => `.${s}`,
  breakpoints: {
    sm: 768,
    md: 1024,
    lg: 1280
  },
  breakpointSelector: 'attribute'
})
```

### `opts.selector`

Function expects a selector name as input and returns a css selector string as output. For example, to use an attribute selector instead of classes:

```js
var css = gr8({
  selector: s => `[gr8~="${s}"]`
})
```

<details>
  <summary><strong>Output</strong></summary>

  ```css
  [gr8~="fs1"]{font-size:1rem}
  [gr8~="fs1-6"]{font-size:1.6rem}
  /* etc... */
  ```

</details>

### `opts.breakpoints`

Object keys are used in selector names and object values are used to define the media queries. Object values can either be integers (which results in a `min-width` media queries), or object values can be media query strings. Pass `false` to disable breakpoint utilities entirely:

```js
var css = gr8({
  breakpoints: {
    small: 1024,
    medium: '(min-width:768px) and (max-width:1280px)',
    'not-big': '(max-width:1024px)',
    portrait: '(orientation:portrait)'
  }
})
```

<details>
  <summary><strong>Output</strong></summary>

  ```css
  @media (min-width:1024px) {
    [small~="fs1"]{font-size:1rem}
    /* etc... */  
  }
  @media (min-width:768px) and (max-width:1280px) {
    [medium~="fs1"]{font-size:1rem}
    /* etc... */  
  }
  @media (max-width:1024px) {
    [not-big~="fs1"]{font-size:1rem}
    /* etc... */  
  }
  @media (orientation:portrait) {
    [portrait~="fs1"]{font-size:1rem}
    /* etc... */  
  }
  ```

</details><br>

**Note:** If you care about valid attribute selectors, prepend `data-` to your breakpoint keys.

### `opts.breakpointSelector`

By default, attribute selectors are generated for breakpoint utilities (as seen above). Use prefixed classes instead by passing in the `'class'` shortcut, or provide a selector function for more granular control:

#### `'class'` Shortcut

```js
var css = gr8({
  breakpointSelector: 'class'
})
```

<details>
  <summary><strong>Output</strong></summary>
  
  ```css
  @media (min-width:768px) {
    .sm-fs1{font-size:1rem}
    /* etc... */
  }
  @media (min-width:1024px) {
    .md-fs1{font-size:1rem}
    /* etc... */
  }
  @media (min-width:1280px) {
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
  <summary><strong>Output</strong></summary>

  ```css
  @media (min-width:768px) {
    .gr8-sm-fs1{font-size:1rem}
    /* etc... */
  }
  @media (min-width:1024px) {
    .gr8-md-fs1{font-size:1rem}
    /* etc... */
  }
  @media (min-width:1280px) {
    .gr8-lg-fs1{font-size:1rem}
    /* etc... */
  }
  ```

</details>

## Custom Utilities Options

[gr8-util](https://github.com/jongacnik/gr8-util) is a little function for generating functional css utilities. Given a plain object, concise css utilities are generated. All the utilities in `gr8` are built using this.

Use the `utils` option to pass an array of `gr8-util` objects to extend the `gr8` output with custom utilities:

```js
var bgcolor = {
  prop: {
    bgc: 'background-color'
  },
  vals: ['red', 'blue', 'green']
}

var fontcolor = {
  prop: {
    fc: 'color'
  },
  vals: ['red', 'blue', 'green']
}

var css = gr8({
  utils: [
    bgcolor,
    fontcolor
  ]
})
```

<details>
  <summary><strong>Output</strong></summary>

  ```css
  .bgcr{background-color:red}
  .bgcb{background-color:blue}
  .bgcg{background-color:green}
  .fcr{color:red}
  .fcb{color:blue}
  .fcg{color:green}
  /* etc... */

  @media (min-width:768px) {
    [sm~="bgcr"]{background-color:red}
    [sm~="bgcb"]{background-color:blue}
    [sm~="bgcg"]{background-color:green}
    [sm~="fcr"]{color:red}
    [sm~="fcb"]{color:blue}
    [sm~="fcg"]{color:green}
    /* etc... */
  }

  @media (min-width:1024px) {
    [md~="bgcr"]{background-color:red}
    [md~="bgcb"]{background-color:blue}
    [md~="bgcg"]{background-color:green}
    [md~="fcr"]{color:red}
    [md~="fcb"]{color:blue}
    [md~="fcg"]{color:green}
    /* etc... */
  }

  @media (min-width:1280px) {
    [lg~="bgcr"]{background-color:red}
    [lg~="bgcb"]{background-color:blue}
    [lg~="bgcg"]{background-color:green}
    [lg~="fcr"]{color:red}
    [lg~="fcb"]{color:blue}
    [lg~="fcg"]{color:green}
    /* etc... */
  }
  ```

</details><br>

**[Refer to gr8-util for further documentation on generating custom utilities.](https://github.com/jongacnik/gr8-util)**

### `opts.exclude`

Use the `exclude` option to remove some of the default utilities. Accepts an array with any of the following values:

{{ utilityKeys }}

## Proxies

For more advanced use cases, some additional methods are proxied:

```js
// direct access to gr8-util
var gr8util = require('gr8/util')
var css = gr8util({options})
```

```js
// direct access to gr8-utils
var gr8utils = require('gr8/utils')
var css = gr8utils({options})

// or even lower level
gr8utils.generate(gr8utils.utils, gr8utils.defaults)
```

## Notes

`gr8` is developed and iterated-on primarily for use within projects at [Folder Studio](http://folderstudio.com). It shares similarities with other functional css libraries like [tachyons](https://github.com/tachyons-css/tachyons) or [basscss](https://github.com/basscss/basscss), but diverges in its minimalism and customizability. `gr8` provides no colors, no borders, no font-families, etc out of the box, but instead provides ways to quickly define your own utilities for things like these using plain objects. It facilitates creating coherent design systems without imposing one by default.

In any case, I hope you like it and perhaps find it useful!

## Todo

- [ ] Advanced documentation
- [ ] Website

## See Also

- [gr8-util](https://github.com/jongacnik/gr8-util)

## License

[MIT](https://github.com/jongacnik/gr8/blob/master/LICENSE)
