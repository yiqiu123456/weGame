import  "./libs/weapp-adapter"
import  "./libs/symbol"
// require("./libs/pixi.min")
import * as PIXI from "./libs/pixi.min";
GameGlobal.PIXI = PIXI
require("./libs/pixi/unsafe-eval.min")


/**
 * 游戏主函数
 */
export default class Main {
  constructor() {
    // 维护当前requestAnimationFrame的id
    this.aniId = 0

    this.restart()
  }

  restart() {
    const {pixelRatio, windowWidth, windowHeight} = wx.getSystemInfoSync()
    const app = new PIXI.Application({ background: '#1099bb' });
    const graphics = new PIXI.Graphics();

        // Rectangle
        graphics.beginFill(0xDE3249);
        graphics.drawRect(50, 50, 100, 100);
        graphics.endFill();
    app.stage.addChild(graphics)
    let clktext = new PIXI.Text("Click me!", {fill: "#ffffff", fontSize: 32})
    clktext.interactive = true
    let times = 0
    clktext.on("pointerdown", () => {
        clktext.text = `times${++times}`
    })
    clktext.x = 200
    clktext.y = 300
    app.stage.addChild(clktext)
 }

}
