import LnImage from '../LnGame/LnImage'
import LnSprite from '../LnGame/LnSprite'
import EnemyAnime from './EnemyAnime'
import PlayerLinearBP from '../bullet/PlayerLinearBP'


export default class Cute extends LnSprite{
  constructor(game,type = 0, startComputerLeave = 120) {


    var configs = [
      
      {name: '01',x:0 * 32 ,y:type * 32 + 320 },
      {name: '02',x:1 * 32 ,y:type * 32 + 320 },
      {name: '03',x:2 * 32 ,y:type * 32 + 320 },
      {name: '04',x:3 * 32 ,y:type * 32 + 320 },
      {name: '05',x:4 * 32 ,y:type * 32 + 320 },
      {name: '06',x:5 * 32 ,y:type * 32 + 320 },
      {name: '07',x:6 * 32 ,y:type * 32 + 320 },
      {name: '08',x:7 * 32 ,y:type * 32 + 320 },
      {name: '09',x:8 * 32 ,y:type * 32 + 320 },
      {name: '10',x:9 * 32 ,y:type * 32 + 320 },
      {name: '11',x:10 * 32 ,y:type * 32 + 320 },
      {name: '12',x:11 * 32 ,y:type * 32 + 320 },

    ]

    super(game, 'enemy', 32, 32, configs)


    this.type = 'enemy'

    this.x = 0
    this.y = 0

    this.hp = 80

    this.collide = false // 体术
    this.pointRadius = 2 // 体术碰撞半径

    this.side = 16

    this.t = 0

    this.destroy = false


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
    let player = this.game.scene.player
    let bp = new PlayerLinearBP(this.x, this.y+16,player.x,player.y,6,2.5)
    this.game.scene.addEle(bp)
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