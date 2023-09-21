require('./adapter/weapp-adapter')
import { ShaderSystem } from '@pixi/core'
import { install } from '@pixi/unsafe-eval'
import 'whatwg-fetch';
// Apply the patch to PIXI
install({ ShaderSystem })
import Game from './game/game'
let game = new Game()
game.run()