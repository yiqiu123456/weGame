import {Application, Container, Assets, Sprite} from 'pixi.js'
import Scroller from '../sprite/scroller'
export default class Game {
    app
    container
    windowWidth
    windowHeight
    Assets
    constructor() {
        // 获取适配屏幕大小
        const {pixelRatio, windowWidth, windowHeight} = wx.getSystemInfoSync()
        this.windowWidth = windowWidth * pixelRatio
        this.windowHeight = windowHeight * pixelRatio
        this.init()
    }
    init() {
        this.Assets = Assets
        this.app = new Application({
            width: this.windowWidth,
            height: this.windowHeight,
            // background: '#1099bb',
            view: canvas
        })
        this.container = new Container()
        this.app.stage.addChild(this.container)
    }
    run() {
        this.Assets.add('bunny', 'assets/bunny.png')
        this.Assets.add('bg', 'assets/layers/parallax-mountain-bg.png')
        this.Assets.add('foreground_trees', 'assets/layers/parallax-mountain-foreground-trees.png')
        this.Assets.add('montain_far', 'assets/layers/parallax-mountain-montain-far.png')
        this.Assets.add('mountains', 'assets/layers/parallax-mountain-mountains.png')
        this.Assets.add('mountain_trees', 'assets/layers/parallax-mountain-trees.png')
        this.Assets.load(['bg', 'bunny', 'foreground_trees', 'montain_far', 'mountains', 'mountain_trees']).then((textures) => {
            let backgroundSprite = new Sprite(textures.bg)
            backgroundSprite.anchor.set(0.5)
            backgroundSprite.scale.set(3.5)
            backgroundSprite.position.x = this.windowWidth / 2
            backgroundSprite.position.y = this.windowHeight / 2
            this.container.addChild(backgroundSprite)
            let scroller = new Scroller(this.container, textures)
            this.app.ticker.add(() => {
                scroller.moveviewportxBy(0.5)
            });

        })


    }
    loadTexture(textureName, url) {
        this.Assets.add(textureName, url)
        return this.Assets.load([textureName])
    }
    start() {
        
    }

    stop() {

    }
}