require('./adapter/weapp-adapter')
// import "@babel/polyfill";
import { ShaderSystem } from '@pixi/core';
import { install } from '@pixi/unsafe-eval';
import 'whatwg-fetch';
// Apply the patch to PIXI
install({ ShaderSystem });
import * as PIXI from 'pixi.js'
import {Spine} from 'pixi-spine'

// 获取适配屏幕大小
const {pixelRatio, windowWidth, windowHeight} = wx.getSystemInfoSync();
let app = new PIXI.Application({
    width: windowWidth * pixelRatio,
    height: windowHeight * pixelRatio,
    background: '#1099bb',
    view: canvas
});
document.body.appendChild(app.view);

PIXI.Assets.load('assets/pixi-spine/dragon.json').then(onAssetsLoaded);

function onAssetsLoaded(dragonAsset) {
    // instantiate the spine animation
    const dragon = new Spine(dragonAsset.spineData);
    dragon.skeleton.setToSetupPose();
    dragon.update(0);
    dragon.autoUpdate = false;

    // create a container for the spine animation and add the animation to it
    const dragonCage = new PIXI.Container();
    dragonCage.addChild(dragon);

    // measure the spine animation and position it inside its container to align it to the origin
    const localRect = dragon.getLocalBounds();
    dragon.position.set(-localRect.x, -localRect.y);

    // now we can scale, position and rotate the container as any other display object
    const scale = Math.min(
        (app.screen.width * 0.7) / dragonCage.width,
        (app.screen.height * 0.7) / dragonCage.height,
    );
    dragonCage.scale.set(scale, scale);
    dragonCage.position.set(
        (app.screen.width - dragonCage.width) * 0.5,
        (app.screen.height - dragonCage.height) * 0.5,
    );

    // add the container to the stage
    app.stage.addChild(dragonCage);

    // once position and scaled, set the animation to play
    dragon.state.setAnimation(0, 'flying', true);


    app.ticker.add(() => {
        // update the spine animation, only needed if dragon.autoupdate is set to false
        dragon.update(app.ticker.deltaMS / 1000); // IN SECONDS!
    });
}
