import Cute from '../enemy/Cute'


export default {
	30(game) {
	  let cute = new Cute(game)
	  cute.path = t => { return {x: 20 + 0.6 * t,y: t} }
	  game.scene.addEle(cute)
	},
	60(game) {
	  let cute = new Cute(game)
	  cute.path = t => { return {x: 380 - 0.6 * t,y: t} }
	  game.scene.addEle(cute)
	},
	90(game) {
	  let cute = new Cute(game)
	  cute.path = t => { return {x: 50 + 0.5 * t,y: t} }
	  game.scene.addEle(cute)
	},
	120(game) {
	  let cute = new Cute(game)
	  cute.path = t => { return {x: 380 - 0.6 * t,y: t} }
	  game.scene.addEle(cute)
	},
	150(game) {
	  let cute = new Cute(game)
	  cute.path = t => { return {x: 50 + 0.5 * t,y: t} }
	  game.scene.addEle(cute)
	},
	180(game) {
	  let cute = new Cute(game)
	  cute.path = t => { return {x: 380 - 0.6 * t,y: t} }
	  game.scene.addEle(cute)
	},
	210(game) {
	  let cute = new Cute(game)
	  cute.path = t => { return {x: 50 + 0.5 * t,y: t} }
	  game.scene.addEle(cute)
	},
	240(game) {
	  let cute = new Cute(game)
	  cute.path = t => { return {x: 380 - 0.6 * t,y: t} }
	  game.scene.addEle(cute)
	},
	270(game) {
	  let cute = new Cute(game)
	  cute.path = t => { return {x: 50 + 0.5 * t,y: t} }
	  game.scene.addEle(cute)
	},
	300(game) {
	  let cute = new Cute(game)
	  cute.path = t => { return {x: 380 - 0.6 * t,y: t} }
	  game.scene.addEle(cute)
	},
}