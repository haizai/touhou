let enableDebugMode = (game, enable) => {
	if(!enable) return


}


import LnGame from './LnGame/LnGame'
import Scene from './scene/scene'
import config from './config'


var images = {
  ball: 'img/ball.png',
  // block: 'img/block.png',
  // paddle: 'img/paddle.png',
  pl00_01: 'img/pl00/pl00_01.png',
  pl00_02: 'img/pl00/pl00_02.png',
  pl00_03: 'img/pl00/pl00_03.png',
  pl00_04: 'img/pl00/pl00_04.png',
  pl00_05: 'img/pl00/pl00_05.png',
  pl00_06: 'img/pl00/pl00_06.png',
  pl00_07: 'img/pl00/pl00_07.png',
  pl00_08: 'img/pl00/pl00_08.png',
  pl00_09: 'img/pl00/pl00_09.png',
  pl00_10: 'img/pl00/pl00_10.png',
  pl00_11: 'img/pl00/pl00_11.png',
  pl00_12: 'img/pl00/pl00_12.png',
  pl00_13: 'img/pl00/pl00_13.png',
  pl00_14: 'img/pl00/pl00_14.png',
  pl00_15: 'img/pl00/pl00_15.png',
  pl00_16: 'img/pl00/pl00_16.png',
  pl00_17: 'img/pl00/pl00_17.png',
  pl00_18: 'img/pl00/pl00_18.png',
  pl00_19: 'img/pl00/pl00_19.png',
  pl00_20: 'img/pl00/pl00_20.png',
  pl00_21: 'img/pl00/pl00_21.png',
  pl00_22: 'img/pl00/pl00_22.png',
  pl00_23: 'img/pl00/pl00_23.png',
  pl00_24: 'img/pl00/pl00_24.png',
}
var game = LnGame.instance(30, config, images, function(g){
	let s = new Scene(g)
  g.runWithScene(s)
})
enableDebugMode(game, true)

console.log(game)