import ScrollerSprite from './scrollerSprite'
// 获取适配屏幕大小
const {pixelRatio, windowWidth, windowHeight} = wx.getSystemInfoSync()
const width = pixelRatio * windowWidth, height = pixelRatio * windowHeight / 4
export default class Scroller {
    viewportX
    sprites
    constructor(container, textures) {
        this.sprites = []
        this.viewportX = 0
        debugger

        let far = new ScrollerSprite(textures.montain_far, width, height)
        far.anchor.set(0.5)
        far.scale.set(2)
        far.position.set(0, 340)
        far.tilePosition.x = 0
        far.tilePosition.y = 0
        container.addChild(far)
        this.sprites.push(far)
        
        let mountain = new ScrollerSprite(textures.mountains, width, height)
        mountain.anchor.set(0.5)
        mountain.scale.set(2)
        mountain.position.set(0, 340)
        mountain.tilePosition.x = 0
        mountain.tilePosition.y = 0
        container.addChild(mountain)
        this.sprites.push(mountain)


        let foreGroundTree = new ScrollerSprite(textures.foreground_trees, width, height, 0.64)
        foreGroundTree.scale.set(2)
        foreGroundTree.position.set(0, 200)
        foreGroundTree.tilePosition.x = 0
        foreGroundTree.tilePosition.y = 0
        container.addChild(foreGroundTree)
        this.sprites.push(foreGroundTree)
        
        let tree = new ScrollerSprite(textures.mountain_trees, width, height, 0.64)
        tree.scale.set(2)
        tree.position.set(0, 200)
        tree.tilePosition.x = 0
        tree.tilePosition.y = 0
        container.addChild(tree)
        this.sprites.push(tree)
    }
    getViewport() {
        return this.viewportX
    }
    
    setViewportX(newViewport) {
        this.viewportX = newViewport
    }
    moveviewportxBy(units) {
        let newViewport = this.viewportX + units
        this.setViewportX(newViewport)
        debugger
        this.sprites.forEach(sprite => {
            sprite.setViewportX(newViewport)
        })
    }
}