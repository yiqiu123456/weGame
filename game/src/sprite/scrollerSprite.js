import { TilingSprite } from 'pixi.js'
export default class ScrollerSprite extends TilingSprite {
    // X轴移动速率
    delta_x
    // 视窗位置
    viewportX
    constructor(textrue, width, height, delta = 0.128) {
        super(textrue, width, height)
        this.delta_x = delta
        this.viewportX = width / 2
    }

    // 滚动更新
    setViewportX(newViewportX) {
        debugger
        let distanceTravelled  = newViewportX - this.viewportX
        this.viewportX = newViewportX
        this.tilePosition.x -= (distanceTravelled * this.delta_x)
    }
}
