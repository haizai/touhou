import LnImage from '../LnGame/LnImage'
import LnSprite from '../LnGame/LnSprite'
import EnemyAnime from './EnemyAnime'
import PlayerLinearBP from '../bullet/PlayerLinearBP'


export default class Enemy extends LnSprite{
  constructor(game,width,height,configs) {

    super(game, 'enemy', width, height, configs)


    this.type = 'enemy'

    this.x = 0
    this.y = 0

    this.hp = 80

    this.collide = false // 体术
    this.pointRadius = 2 // 体术碰撞半径

    this.side = 16

    this.t = 0

    this.destroy = false

    this.startComputerLeave = 120


    this.anime = new EnemyAnime(
    	this,
    	[`01`,`02`,`03`,`04`,`05`],
    	[`06`,`07`,`08`],
    	[`09`,`10`,`11`,`12`],
    )
  }

  toRight() {
  	this.isReverse = false;
  }
  toLeft() {
  	this.isReverse = true;
  }

  update(game){
    if (this.changeStage) this.changeStage()
    this.move(game.scene.player)
    if (this.t > this.startComputerLeave) this.computeLeave()
    this.computeCollide(game.scene.player)

  }

  move(player){
    this.t++
    let o = this.path.call(this,this.t)

    if (o.x) this.x = o.x;
    if (o.y) this.y = o.y;

    // this.shot(player)
  }
  path(t) {

  }
  shot() {  

  }


  computeLeave(){
    if (
    this.y < - this.side || 
    this.x < - this.side ||
    this.y > CONFIG.height + this.side ||
    this.x > CONFIG.width + this.side 
    ) {
      this.destroy = true
      console.log('destroy')
    }
  }

  computeCollide(player){
    let dx = player.x - this.x
    let dy = player.y - this.y

    let dr = Math.sqrt(dx*dx + dy*dy)

    let r = player.pointRadius + this.pointRadius

    this.collide = dr < r
  }

  beShot(val) {
    this.hp -= val
    if (this.hp <= 0) {
      this.destroy = true
    }
  }
}