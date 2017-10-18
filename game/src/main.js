import enableDebugMode from './enableDebugMode'
import images from './images'
import LnGame from './LnGame/LnGame'
import Scene from './scene/scene'

game = LnGame.instance(60, images, function(g){
	let s = new Scene(g)
  g.runWithScene(s)
})
enableDebugMode(game, true)

console.log(game)