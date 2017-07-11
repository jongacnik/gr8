declare namespace gr8 {
  interface Options {
    spacing?: number[] | number
    fontSize?: number[] | number
    lineHeight?: number[] | number
    size?: number[] | number
    viewport?: number[] | number
    zIndex?: number[] | number
    order?: number[] | number
    opacity?: number[] | number
    aspect?: number[] | number
    textColumns?: number[] | number
    unit?: string
    nested?: boolean
    responsive?: boolean
    attribute?: boolean
    max?: boolean
    breakpoints?: { [k: string]: string }
  }

  type Vals = string[] | number[] | { [k: string]: string } | { [k: string]: number }

  interface UtilityOptions {
    vals: Vals
    prop: string | string[][]
    prefix?: string
    suffix?: string
    hyphenate?: boolean
    unit?: string
    transform?: (val: number | string) => number | string
  }

  type RemovableUtility = 'column.column' | 'column.offset' | 'column.nestedColumn' | 'column.nestedOffset' | 'margin.margin' | 'margin.marginX' | 'margin.marginY' | 'padding.padding' | 'padding.paddingX' | 'padding.paddingY' | 'opacity | background.size' | 'background.position' | 'background.repeat' | 'flex.display' | 'flex.align' | 'flex.direction' | 'flex.justify' | 'flex.wrap' | 'flex.flex' | 'flex.order' | 'flex.orderSpecial' | 'display | float.float' | 'float.clear' | 'overflow' | 'positioning.position' | 'positioning.placement' | 'positioning.zindex' | 'size.size' | 'size.viewportWidth' | 'size.viewportHeight' | 'size.viewportMinWidth' | 'size.viewportMinHeight' | 'size.viewportMaxWidth' | 'size.viewportMaxHeight' | 'size.aspect' | 'type.fontSize' | 'type.lineHeight' | 'type.fontStyle' | 'type.fontWeight' | 'type.textAlign' | 'type.textOverflow' | 'type.textDecoration' | 'type.textTransform' | 'type.verticalAlign' | 'type.whiteSpace' | 'type.textColumn' | 'misc.cursor' | 'misc.userSelect' | 'misc.pointerEvents' | 'dev'

  interface Css {
    toString: () => string
    add: (options: gr8.UtilityOptions) => void
    reset: () => void
    attach: () => HTMLStyleElement
    remove: (key: RemovableUtility | RemovableUtility[]) => void
  }
}

declare function gr8(options?: gr8.Options): gr8.Css

declare module 'gr8' {
  export = gr8
}
