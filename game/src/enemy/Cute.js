import LnImage from '../LnGame/LnImage'
import EnemyAnime from './EnemyAnime'
import PlayerLinearBP from '../bullet/PlayerLinearBP'


export default class Cute extends LnImage{
  constructor(game,type = '1') {
    super(game, `cute_${type}_01`)
    this.x = 0
    this.y = 0

    this.collide = false // 体术
    this.pointRadius = 2 // 体术碰撞半径

    this.side = 16

    this.t = 0

    this.destroy = false

    this.anime = new EnemyAnime(
    	this,
    	[`cute_${type}_01`,`cute_${type}_02`,`cute_${type}_03`,`cute_${type}_04`,`cute_${type}_05`],
    	[`cute_${type}_06`,`cute_${type}_07`,`cute_${type}_08`],
    	[`cute_${type}_09`,`cute_${type}_10`,`cute_${type}_11`,`cute_${type}_12`],
    )
  }

  toRight() {
  	this.isReverse = false;
  }
  toLeft() {
  	this.isReverse = true;
  }

  update(game){
    this.move(game.scene.player)
    this.computeLeave()
    this.computeCollide(game.scene.player)
  }

  move(player){
    this.t++
    let o = this.path.call(this,this.t)

    if (o.x) this.x = o.x;
    if (o.y) this.y = o.y;

    this.shot(player)
  }
  path(t) {

  }
  shot(player) {
    if (Utils.probability(0.02)) {
      let bp = new PlayerLinearBP(this.x, this.y+16,player.x,player.y)
      this.game.scene.addEle(bp)
    }
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
}