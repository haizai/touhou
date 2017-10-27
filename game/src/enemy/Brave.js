import EnemyAnime from './EnemyAnime'
import LinearBP from '../bullet/LinearBP'
import PlayerLinearBP from '../bullet/PlayerLinearBP'

import Enemy from './Enemy'

export default class Brave extends Enemy{
  constructor(game) {

    var configs = [
      
      {name: '01',x:0 * 64 ,y: 448 },
      {name: '02',x:1 * 64 ,y: 448 },
      {name: '03',x:2 * 64 ,y: 448 },
      {name: '04',x:3 * 64 ,y: 448 },

      {name: '05',x:4 * 64 ,y: 448 },
      {name: '06',x:5 * 64 ,y: 448 },
      {name: '07',x:6 * 64 ,y: 448 },
      {name: '08',x:7 * 64 ,y: 448 },

      {name: '09',x:5 * 64 ,y: 6 * 64 },
      {name: '10',x:6 * 64 ,y: 7 * 64 },
      {name: '11',x:5 * 64 ,y: 6 * 64 },
      {name: '12',x:6 * 64 ,y: 7 * 64 },

    ]

    super(game, 64, 64, configs)

    this.maxHp = this.hp = 10000

    this.pointRadius = 4 // 体术碰撞半径

    this.side = 32

    this.stage = 1
    this.stageTime = 0


    this.anime = new EnemyAnime(
    	this,
      [`01`,`02`,`03`,`04`],
      [`05`,`06`,`07`,`08`],
    	[`09`,`10`,`11`,`12`],
    )
  }

  drawHPRound(){
    let ctx = this.game.context
      
    ctx.beginPath()
    ctx.strokeStyle = 'red'
    ctx.arc(this.x, this.y,47,0,Math.PI * 2)
    ctx.stroke()

    ctx.beginPath()
    ctx.strokeStyle = 'red'
    ctx.arc(this.x, this.y,51,0,Math.PI * 2)
    ctx.stroke()

    let hpPer = this.hp/this.maxHp

    ctx.beginPath()
    ctx.fillStyle = '#fff'
    ctx.arc(this.x, this.y,48,Math.PI*2*hpPer,0,true)
    ctx.arc(this.x, this.y,50,0,Math.PI *2* hpPer)
    ctx.fill()

  }

  shot_round(a){
    let bp = new LinearBP(this.x, this.y,3,1.5,a,20)
    this.game.scene.addEle(bp)
  }
  shot_round2(a){
    for (let i = 0; i < 6;i++) {
      let bp = new LinearBP(this.x, this.y,4,3,i*60 + a)
      this.game.scene.addEle(bp)
    } 
  }
  shot_round3(a){
    for (let i = 0; i < 4;i++) {
      let bp = new LinearBP(this.x, this.y,16,1.5,i*120 + a)
      this.game.scene.addEle(bp)
    } 
  }
  shot_pbp() {
    let player = this.game.scene.player
    var bp = new PlayerLinearBP(this.x, this.y+16,player.x,player.y,6,2)
    this.game.scene.addEle(bp)
  }
  updateBoss() {

    switch (this.stage) {
      case 0:
        break;
      case 1:
        if (this.hp < 6666) {
          this.stage = 2
          this.stageTime = 60
          this.game.scene.clear()
        }
        break;
      case 2:
        this.stageTime-- 
        if (this.stageTime <= 0) this.stage = 3
        break;
      case 3:
        if (this.hp < 3333) {
          this.stage = 4
          this.stageTime = 60
          this.game.scene.clear()
        }
        break;
      case 4:
        this.stageTime-- 
        if (this.stageTime <= 0) this.stage = 5
        break;
      default:
        // statements_def
        break;
    }

  }
  beShot(val) {
    this.hp -= val
    if (this.hp <= 0) {
      this.game.scene.clear()
      this.destroy = true
    }
  }
}