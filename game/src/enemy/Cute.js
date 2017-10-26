
import EnemyAnime from './EnemyAnime'
import PlayerLinearBP from '../bullet/PlayerLinearBP'

import Enemy from './Enemy'

export default class Cute extends Enemy{
  constructor(game,type = 0) {

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

    super(game, 32, 32, configs)

    this.hp = 80

    this.pointRadius = 2 // 体术碰撞半径

    this.side = 16

    this.anime = new EnemyAnime(
    	this,
    	[`01`,`02`,`03`,`04`,`05`],
    	[`06`,`07`,`08`],
    	[`09`,`10`,`11`,`12`],
    )
  }

  shot() {  
    let player = this.game.scene.player
    let bp = new PlayerLinearBP(this.x, this.y+16,player.x,player.y,6,2.5)
    this.game.scene.addEle(bp)
  }
}