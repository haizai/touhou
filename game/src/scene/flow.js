import Cute from '../enemy/Cute'
import Brave from '../enemy/Brave'


let {sin,PI,cos,tan} = Math

let deg = PI/180


function cuteLtoR(game,dx=0,type=0) {
  let cute = new Cute(game,type)
  cute.anime.move()
  cute.path = t => {

    let at = 120
    if (t%20==0 && t>0 && t < 150 && dx==30) cute.shot()

    if (t<at) {
      return {
        x: sin((t/2-90) * deg) * 300 + 300 + dx,
        y: cos((t/2-90) * deg) * 300 - dx/2 ,
      }
    } else {
      cute.anime.stay()
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
  cute.toLeft()
  cute.anime.move()
  cute.path = t => {
    let at = 120
    if (t%20==0 && t>0 && t < 150 &&dx==30) cute.shot()

    if (t<at) {
      return {
        x: 400-(sin((t/2-90) * deg) * 300 + 300 + dx),
        y: cos((t/2-90) * deg) * 300 - dx/2 ,
      }
    } else {
      cute.anime.stay()
      return {
        x: 400-(sin((at/2-90) * deg) * 300 + 300 + dx + (t-at)),
        y: cos((at/2-90) * deg) * 300 - dx/2+ (t-at)/3,
      }
    }

  }
  game.scene.addEle(cute)
}

function test(game) {
  let brave = new Brave(game)
  brave.path = t => { 

    if (t >=60 & brave.stage == 1) {
      brave.shot_round((t-60)*9)
    }

    if (brave.stage==3 && t%6==0) {
      brave.shot_round2((t-500))
    }
    if (brave.stage==5 && t%2==0) {
      brave.shot_round3(t)
    }
    

    if (t%120==0 && t>60) {
      brave.shot_pbp()
    }


    if (t < 30) {
      return {
        x:200,y:200/30*t
      }
    } else if (brave.stage == 2) {
      return {
        x:200+60-brave.stageTime,y:200
      }
    } else if (brave.stage == 3) {
      return {
        x:260,y:200
      }
    }else if (brave.stage == 4) {
      return {
        x:200+brave.stageTime,y:200
      }
    }
    else {
      return {
        x:200,y:200,
      }
    }
  }
  log(brave)
  game.scene.addEle(brave)
}

export default {
  20(g) {cuteLtoR(g);cuteLtoR(g,30,1);cuteLtoR(g,60);},
  80(g) {cuteLtoR(g);cuteLtoR(g,30,1);cuteLtoR(g,60);},
  140(g) {cuteLtoR(g);cuteLtoR(g,30,1);cuteLtoR(g,60);},
  200(g) {cuteLtoR(g);cuteLtoR(g,30,1);cuteLtoR(g,60);},
  260(g) {cuteLtoR(g);cuteLtoR(g,30,1);cuteLtoR(g,60);},
  320(g) {cuteLtoR(g);cuteLtoR(g,30,1);cuteLtoR(g,60);},
  380(g) {cuteLtoR(g);cuteLtoR(g,30,1);cuteLtoR(g,60);},
  440(g) {cuteLtoR(g);cuteLtoR(g,30,1);cuteLtoR(g,60);},

  540(g) {cuteRtoL(g);cuteRtoL(g,30,1);cuteRtoL(g,60);},
  600(g) {cuteRtoL(g);cuteRtoL(g,30,1);cuteRtoL(g,60);},
  660(g) {cuteRtoL(g);cuteRtoL(g,30,1);cuteRtoL(g,60);},
  720(g) {cuteRtoL(g);cuteRtoL(g,30,1);cuteRtoL(g,60);},
  780(g) {cuteRtoL(g);cuteRtoL(g,30,1);cuteRtoL(g,60);},
  840(g) {cuteRtoL(g);cuteRtoL(g,30,1);cuteRtoL(g,60);},
  900(g) {cuteRtoL(g);cuteRtoL(g,30,1);cuteRtoL(g,60);},
  960(g) {cuteRtoL(g);cuteRtoL(g,30,1);cuteRtoL(g,60);},

  1300(g) {test(g)},
}