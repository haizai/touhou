import Cute from '../enemy/Cute'

function cuteLtoR(game) {
  let cute = new Cute(game,0)
  cute.anime.move()
  cute.path = t => {
  	if (t < 200) {
  		return {x: 0.8 * t,y:  t}
  	} else if (t >= 200 && t < 300) {
  		cute.anime.stay()
  		return {x: 160 + 0.5 * (t-200),y: 200 + 0.5 * (t-200)}
  	} else {
  		cute.anime.move()
  		return {x: 210 + 2 * (t-300),y:  200 + 0.5 * (t-200)}
  	}
  }
  game.scene.addEle(cute)
}
function cuteRtoL(game) {
  let cute = new Cute(game,1)
  cute.toLeft()
  cute.anime.move()
  cute.path = t => {   	
  	if (t < 200) {
  		return {x: 400 - 0.8 * t,y:  t}
  	} else if (t >= 200 && t < 300) {
  		cute.anime.stay()
  		return {x: 400 - (160 + 0.5 * (t-200)),y: 200 + 0.5 * (t-200)}
  	} else {
  		cute.anime.move()
  		return {x: 400 - (210 + 2 * (t-300)),y:  200 + 0.5 * (t-200)}
  	} 
  }
  game.scene.addEle(cute)
}

function test(game) {
  let cute = new Cute(game,1)
  cute.toLeft()
  cute.anime.move()
  cute.path = t => {    
    return {
      x:150,y:100,
    }
  }
  game.scene.addEle(cute)
}

export default {
	20(game) {cuteLtoR(game)},
	40(game) {cuteRtoL(game)},
	60(game) {cuteLtoR(game)},
	80(game) {cuteRtoL(game)},
	100(game) {cuteLtoR(game)},
	120(game) {cuteRtoL(game)},
	140(game) {cuteLtoR(game)},
	160(game) {cuteRtoL(game)},
	180(game) {cuteLtoR(game)},
	200(game) {cuteRtoL(game)},
	220(game) {cuteLtoR(game)},
	240(game) {cuteRtoL(game)},
	260(game) {cuteLtoR(game)},
	280(game) {cuteRtoL(game)},
	300(game) {cuteLtoR(game)},
  // 10(game) {
  //   test(game)
  // } 
}