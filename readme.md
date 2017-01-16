gr8 is both a **set** of functional css utilities, as well as a **tool** for generating functional css utilities.

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
