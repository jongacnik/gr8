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
