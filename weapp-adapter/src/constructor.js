import HTMLElement from './HTMLElement'

let HTMLImageElement = wx.createImage().constructor
class HTMLCanvasElement extends HTMLElement {
  constructor() {
    super('canvas')
  }
}
export {
  HTMLImageElement,
  HTMLCanvasElement
}