import Cute from '../enemy/Cute'


let {sin,PI,cos,tan} = Math

let deg = PI/180


function cuteLtoR(game,dx=0,type=0) {
  let cute = new Cute(game,type)
  cute.anime.move()
  cute.path = t => {

    let at = 120


      if (t%20==0 && t>0 && dx==30) cute.shot()
    if (t<at) {


      return {
        x: sin((t/2-90) * deg) * 300 + 300 + dx,
        y: cos((t/2-90) * deg) * 300 - dx/2 ,
      }
    } else {
      return {
        x: sin((at/2-90) * deg) * 300 + 300 + dx + (t-at),
        y: cos((at/2-90) * deg) * 300 - dx/2+ (t-at)/3,
      }
    }

  }
  game.scene.addEle(cute)
}
function cuteRtoL(game,dx=0,type=0) {
  let cute = new Cute(game,type)
  cute.anime.move()
  cute.path = t => {

    let at = 120



      if (t%20==0 && t>0 &&dx==30) cute.shot()

    if (t<at) {
      return {
        x: 400-(sin((t/2-90) * deg) * 300 + 300 + dx),
        y: cos((t/2-90) * deg) * 300 - dx/2 ,
      }
    } else {
      return {
        x: 400-(sin((at/2-90) * deg) * 300 + 300 + dx + (t-at)),
        y: cos((at/2-90) * deg) * 300 - dx/2+ (t-at)/3,
      }
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
	20(game) {cuteLtoR(game);cuteLtoR(game,30,1);cuteLtoR(game,60);},
  80(game) {cuteLtoR(game);cuteLtoR(game,30,1);cuteLtoR(game,60);},
  140(game) {cuteLtoR(game);cuteLtoR(game,30,1);cuteLtoR(game,60);},
  200(game) {cuteLtoR(game);cuteLtoR(game,30,1);cuteLtoR(game,60);},
  260(game) {cuteLtoR(game);cuteLtoR(game,30,1);cuteLtoR(game,60);},
  320(game) {cuteLtoR(game);cuteLtoR(game,30,1);cuteLtoR(game,60);},
  380(game) {cuteLtoR(game);cuteLtoR(game,30,1);cuteLtoR(game,60);},
  440(game) {cuteLtoR(game);cuteLtoR(game,30,1);cuteLtoR(game,60);},

  540(game) {cuteRtoL(game);cuteRtoL(game,30,1);cuteRtoL(game,60);},
  600(game) {cuteRtoL(game);cuteRtoL(game,30,1);cuteRtoL(game,60);},
  660(game) {cuteRtoL(game);cuteRtoL(game,30,1);cuteRtoL(game,60);},
  720(game) {cuteRtoL(game);cuteRtoL(game,30,1);cuteRtoL(game,60);},
  780(game) {cuteRtoL(game);cuteRtoL(game,30,1);cuteRtoL(game,60);},
  840(game) {cuteRtoL(game);cuteRtoL(game,30,1);cuteRtoL(game,60);},
  900(game) {cuteRtoL(game);cuteRtoL(game,30,1);cuteRtoL(game,60);},
  960(game) {cuteRtoL(game);cuteRtoL(game,30,1);cuteRtoL(game,60);}



	// 40(game) {cuteRtoL(game)},
	// 60(game) {cuteLtoR(game)},
	// 80(game) {cuteRtoL(game)},
	// 100(game) {cuteLtoR(game)},
	// 120(game) {cuteRtoL(game)},
	// 140(game) {cuteLtoR(game)},
	// 160(game) {cuteRtoL(game)},
	// 180(game) {cuteLtoR(game)},
	// 200(game) {cuteRtoL(game)},
	// 220(game) {cuteLtoR(game)},
	// 240(game) {cuteRtoL(game)},
	// 260(game) {cuteLtoR(game)},
	// 280(game) {cuteRtoL(game)},
	// 300(game) {cuteLtoR(game)},
  // 10(game) {
  //   test(game)
  // } 
}