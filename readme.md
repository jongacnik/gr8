gr8 is both a **set** of functional css utilities, as well as a **tool** for generating functional css utilities.

# Blah blah blah, these dox are just a data dump rn

## Usage

The fastest way to use **gr8** is by including the provided stylesheet in your project:

```html
<link rel="stylesheet" type="text/css" href="gr8.css">
<div class="c6 p2">subarashīdesu!</div>
```

It is likely you'll want to customize the utilities with your own margins, paddings, font sizes, breakpoints, etc. You can do this via the Javascript API:

### Javascript API

```js
var gr8 = require('gr8')
var utils = require('gr8/utils')

var css = gr8(utils)
// → returns object with 2 little methods:

css.toString()
// → returns css as string. Write to file in nodeland, perhaps?

css.attach()
// → attaches css to the doc!
```

# Some Flavors

Tachyons, Basscss, and the like are incredible tools, and gravitons was the original inspiration for the initial naming structure of gr8 a couple years ago. However, the designs which we often execute in the studio can end up getting quite complex, and the configurability of some of the existing fxcss libs are not quite up to par.

gr8 is a *very* tweakable set of functional css utilities. I've been using it, in various incarnations, for almost two years, and has certainly been used in production:

- [Folder Studio](http://folderstudio.com)
- [2Pac](http://www.2pac.com/)
- [LA Forum](http://laforum.org)
- [RBMA Album Art IQ](http://daily.redbullmusicacademy.com/specials/2016-album-art-iq/)
- [Hassan Rahim](http://hassanrahim.com/)

For many more, check out [Folder Studio](http://folderstudio.com), which was also built with gr8.

For an example of how utilites are constructed, let's go ahead and create a `border-color` utility. At the most basic:

```js
{
  prop: 'border-color',
  vals: ['red', 'green', 'blue']
}
```

Becomes

```
.bcr { border-color: red }
.bcg { border-color: green }
.bcb { border-color: blue }
```

Perhaps we want to introduce `rgba` vals instead. The auto generation of selector vals becomes a little tricker since its no longer a single string. Instead lets specify an abbreviation and value:

```js
{
  prop: 'border-color',
  vals: [
    {
      abr: 'r',
      val: 'rgba(255,0,0,0.5)'
    },
    {
      abr: 'g',
      val: 'rgba(0,255,0,0.5)'
    },
    {
      abr: 'b',
      val: 'rgba(0,0,255,0.5)'
    }
  ]
}
```

Becomes

```
.bcr { border-color: rgba(255,0,0,0.5) }
.bcg { border-color: rgba(0,255,0,0.5) }
.bcb { border-color: rgba(0,0,255,0.5) }
```

You could mix and match that type of value as well:

```js
{
  prop: 'border-color',
  vals: [
    {
      abr: 'r',
      val: 'rgba(255,0,0,0.5)'
    },
    'green',
    'blue'
  ]
}
```

Becomes

```
.bcr { border-color: rgba(255,0,0,0.5) }
.bcg { border-color: green }
.bcb { border-color: blue }
```

Perhaps you also don't want the prefix `bc`. Let's us `bdcl` instead:

```js
{
  prop: 'border-color',
  prefix: 'bdcl',
  vals: [
    {
      abr: 'r',
      val: 'rgba(255,0,0,0.5)'
    },
    'green',
    'blue'
  ]
}
```

Becomes

```
.bdclr { border-color: rgba(255,0,0,0.5) }
.bdclg { border-color: green }
.bdclb { border-color: blue }
```

Want to hyphenate?

```js
{
  prop: 'border-color',
  prefix: 'bdcl',
  hyphenate: true,
  vals: [
    {
      abr: 'r',
      val: 'rgba(255,0,0,0.5)'
    },
    'green',
    'blue'
  ]
}
```

Becomes

```
.bdcl-r { border-color: rgba(255,0,0,0.5) }
.bdcl-g { border-color: green }
.bdcl-b { border-color: blue }
```

Don't want to abbreviate?

```js
{
  prop: 'border-color',
  prefix: 'bdcl',
  hyphenate: true,
  abbreviate: false,
  vals: [
    {
      abr: 'red',
      val: 'rgba(255,0,0,0.5)'
    },
    'green',
    'blue'
  ]
}
```

Becomes

```
.bdcl-red { border-color: rgba(255,0,0,0.5) }
.bdcl-green { border-color: green }
.bdcl-blue { border-color: blue }
```

Values are also transformable. Each value will be passed into the transform function. The following example is a bit contrived, but I'll follow up with a more realitic.

```js
{
  prop: 'border-color',
  prefix: 'bdcl',
  hyphenate: true,
  abbreviate: false,
  vals: [
    {
      abr: 'red',
      val: 'rgba(255,0,0,0.5)'
    },
    'green',
    'blue'
  ],
  transform: val => val === 'green' ? 'lime' : val
}
```

Becomes

```
.bdcl-red { border-color: rgba(255,0,0,0.5) }
.bdcl-green { border-color: lime }
.bdcl-blue { border-color: blue }
```

A more realistic example is how column classes are constructed. You'll notice another option passed in here as well, for `unit`.

```js
{
  prefix: 'c',
  prop: 'width',
  unit: '%',
  vals: [...Array(13).keys()],
  transform: val => (val / 12) * 100
}
```

```
.c0{width:0}
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
```



# More Examples

```js
{
  prop: 'line-height',
  vals: [ 1, 1.5 ] // decimals will be sanitized with hyphens in selector
}

// .lh1 { line-height: 1 }
// .lh1-5 { line-height: 1.5 }

{
  prop: 'margin-top',
  vals: [ 0, 1, 2, 3, 4 ],
  unit: true // true indicates default unit, can also pass specific unit
}

{
  prop: ['margin-top'],
  vals: [ 0, 1, 2, 3, 4 ],
  unit: true // true indicates default unit, can also pass specific unit
}

// .mt0 { margin-top: 0 }
// .mt1 { margin-top: 1rem }
// .mt2 { margin-top: 2rem }
// .mt3 { margin-top: 3rem }
// .mt4 { margin-top: 4rem }

{
  prop: 'display',
  vals: [ 'block', 'hidden', 'inline-block' ]
}

// .db { display: block }
// .dh { display: block }
// .dib { display: inline-block }

{
  prefix: 'ps', // if prefix, this used instead of abbreviated prop
  prop: 'position',
  vals: [ 'relative', 'absolute', 'fixed', 'static' ]
}

// .psr { position: relative }
// .psa { position: absolute }
// .psf { position: fixed }
// .pss { position: static }

{
  prefix: 'bgs',
  prop: 'background-size',
  vals: [
    { c: 'cover' }, // if object used as val, key is used in selector
    { ct: 'contain' }
  ]
}

// .bgsc { background-size: cover }
// .bgsct { background-size: contain }

{
  prefix: 'op',
  prop: 'opacity',
  vals: [ 0, 25, 50, 75, 100 ],
  transform: val => val / 100 // function which modifies val in declaration
}

// .op0 { opacity: 0 }
// .op25 { opacity: .25 }
// .op50 { opacity: .5 }
// .op75 { opacity: .75 }
// .op100 { opacity: 1 }

{
  prefix: 'ar',
  suffix: ':after',
  vals: [ 50, 100 ],
  declaration: val => `
    content: "";
    display: block;
    padding-top: ${val}%
  ` // declaration function can be used instead of prop for more complex rules
}

// .ar50:after {
//   content:"";
//   display:block;
//   padding-top:50%
// }
// .ar100:after {
//   content:"";
//   display:block;
//   padding-top:100%
// }

{
  prefix: 'cf',
  suffix: ':after',
  declaration: `
    content:"";
    display:block;
    clear:both
  ` // can also simply pass a string for specific styles, no value iteration
}

// .cf:after {
//   content:"";
//   display:block;
//   clear:both
// }

{
  prefix: 'c',
  prop: 'width',
  vals: [...Array(13).keys()],
  unit: '%',
  transform: val => (val / 12) * 100
}

// .c0{width:0}
// .c1{width:8.333333333333332%}
// .c2{width:16.666666666666664%}
// .c3{width:25%}
// .c4{width:33.33333333333333%}
// .c5{width:41.66666666666667%}
// .c6{width:50%}
// .c7{width:58.333333333333336%}
// .c8{width:66.66666666666666%}
// .c9{width:75%}
// .c10{width:83.33333333333334%}
// .c11{width:91.66666666666666%}
// .c12{width:100%}

{
  prefix: ['c2', 'c1'],
  declaration: `width:50%`
}

// .c2 .c1 { width: 50% }


// flattens deep utils:
// { padding: {}, paddingX: {}, special: options => [ {}, {} ] }
// -> [{}, {}, {}, {}]

var utils = [
  require('./utils/background').size,
  require('./utils/background').position,
  require('./utils/background').repeat,
  require('./utils/column').column,
  require('./utils/column').offset,
  require('./utils/column').nestedColumn,
  require('./utils/column').nestedOffset,
  require('./utils/display'),
  require('./utils/flex').display,
  require('./utils/flex').align,
  require('./utils/flex').direction,
  require('./utils/flex').justify,
  require('./utils/flex').wrap,
  require('./utils/flex').flex,
  require('./utils/flex').order,
  require('./utils/float').float,
  require('./utils/float').clear,
  require('./utils/index'),
  require('./utils/margin').margin,
  require('./utils/margin').marginX,
  require('./utils/margin').marginY,
  require('./utils/misc').cursor,
  require('./utils/misc').userSelect,
  require('./utils/misc').pointerEvents,
  require('./utils/opacity'),
  require('./utils/overflow'),
  require('./utils/padding').padding,
  require('./utils/padding').paddingX,
  require('./utils/padding').paddingY,
  require('./utils/positioning').position,
  require('./utils/positioning').placement,
  require('./utils/positioning').zindex,
  require('./utils/size').size,
  require('./utils/size').viewportWidth,
  require('./utils/size').viewportHeight,
  require('./utils/size').viewportMinWidth,
  require('./utils/size').viewportMinHeight,
  require('./utils/size').viewportMaxWidth,
  require('./utils/size').viewportMaxHeight,
  require('./utils/size').aspect,
  require('./utils/type').fontSize,
  require('./utils/type').lineHeight,
  require('./utils/type').fontStyle,
  require('./utils/type').fontWeight,
  require('./utils/type').textAlign,
  require('./utils/type').textDecoration,
  require('./utils/type').textTransform,
  require('./utils/type').verticalAlign,
  require('./utils/type').textColumn
]
```
