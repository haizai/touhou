import LnImage from '../LnGame/LnImage'
import EnemyAnime from './EnemyAnime'
import LinearBP from '../bullet/LinearBP'


export default class Cute extends LnImage{
  constructor(game) {
    super(game, 'cute_1_01')
    this.x = 0
    this.y = 0

    this.collide = false // 体术
    this.pointRadius = 2 // 体术碰撞半径

    this.side = 16

    this.t = 0

    this.destroy = false

    this.anime = new EnemyAnime(
    	this,
    	['cute_1_01','cute_1_02','cute_1_03','cute_1_04','cute_1_05'],
    	['cute_1_06','cute_1_07','cute_1_08'],
    	['cute_1_09','cute_1_10','cute_1_11','cute_1_12'],
    )
  }

  toRight() {
  	this.isReverse = false;
  }
  toLeft() {
  	this.isReverse = true;
  }

  update(game){
    this.move()
    this.computeLeave()
    this.computeCollide(game.scene.player)
  }

  move(){
    this.t++
    let o = this.path.call(this,this.t)

    if (o.x) this.x = o.x;
    if (o.y) this.y = o.y;

    this.shot()
  }
  path(t) {

  }
  shot() {
    if (Utils.probability(0.02)) {
      let bp = new LinearBP(this.x, this.y+16)
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