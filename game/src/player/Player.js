import LnImage from '../LnGame/LnImage'
import LnSprite from '../LnGame/LnSprite'

import LnAnime from '../LnGame/LnAnime'

import PlayerAnime from './PlayerAnime'


export default class Player extends LnSprite{

  constructor(game, name) {


    var configs = [
      
      {name: '01',x:0 * 32 ,y:0 * 48 },
      {name: '02',x:1 * 32 ,y:0 * 48 },
      {name: '03',x:2 * 32 ,y:0 * 48 },
      {name: '04',x:3 * 32 ,y:0 * 48 },
      {name: '05',x:4 * 32 ,y:0 * 48 },
      {name: '06',x:5 * 32 ,y:0 * 48 },
      {name: '07',x:6 * 32 ,y:0 * 48 },
      {name: '08',x:7 * 32 ,y:0 * 48 },

      {name: '09',x:0 * 32 ,y:1 * 48 },
      {name: '10',x:1 * 32 ,y:1 * 48 },
      {name: '11',x:2 * 32 ,y:1 * 48 },
      {name: '12',x:3 * 32 ,y:1 * 48 },
      {name: '13',x:4 * 32 ,y:1 * 48 },
      {name: '14',x:5 * 32 ,y:1 * 48 },
      {name: '15',x:6 * 32 ,y:1 * 48 },
      {name: '16',x:7 * 32 ,y:1 * 48 },

      {name: '17',x:0 * 32 ,y:2 * 48 },
      {name: '18',x:1 * 32 ,y:2 * 48 },
      {name: '19',x:2 * 32 ,y:2 * 48 },
      {name: '20',x:3 * 32 ,y:2 * 48 },
      {name: '21',x:4 * 32 ,y:2 * 48 },
      {name: '22',x:5 * 32 ,y:2 * 48 },
      {name: '23',x:6 * 32 ,y:2 * 48 },
      {name: '24',x:7 * 32 ,y:2 * 48 },

    ]

    super(game, name, 32, 48, configs)
    this.x = 200
    this.y = 500
    this.speed = 4
    this.player = 'player'

    this.pointRadius = 2


    this.l = false
    this.r = false
    this.t = false
    this.b = false
    this.lf = null
    this.tb = null

    this.anime = new PlayerAnime(
      this,
      ['01','02','03','04','05','06','07','08'],
      ['09','10','11','12'],
      ['13','14','15','16'],
      ['17','18','19','20'],
      ['21','22','23','24'],
    )
  }

  move(direction) {
    switch(direction) {
      case 'l': this.moveLeft(); break;
      case 'r': this.moveRight(); break;
      case 't': this.moveTop(); break;
      case 'b': this.moveBottom(); break;
    }
  }
  moveLeft(){
    this.anime.moveLeft()
    this.x > this.speed + this.w/2 ? this.x -= this.speed : this.x = this.w/2
  }
  moveRight(){
    this.anime.moveRight()
    this.x < CONFIG.width - this.w/2 - this.speed ? this.x += this.speed : this.x = CONFIG.width - this.w/2
  }
  moveTop(){
    this.y > this.speed + this.h/2 ? this.y -= this.speed : this.y = this.h/2 
  }
  moveBottom(){
    this.y < CONFIG.height - this.h/2 - this.speed ? this.y += this.speed : this.y = CONFIG.height - this.h/2
  }
  stay(){
    this.anime.stay()
  }
  onDirection(direction) {
    switch (direction) {
      case 'l':
        if (!this.l && this.r) this.lr = 'l'
        this.l = true
        break;
      case 'r':
        if (!this.r && this.l) this.lr = 'r'
        this.r = true
        break;
      case 't':
         if (!this.t && this.b) this.tb = 't'
        this.t = true
        break;
      case 'b':
         if (!this.b && this.t) this.tb = 'b'
        this.b = true
        break;
    }

  }
  offDirection(direction) {
    switch (direction) {
      case 'l':
        this.l = false
        this.lr = null
        break;
      case 'r':
        this.r = false
        this.lr = null
        break;
      case 't':
        this.t = false
        this.tb = null
        break;
      case 'b':
        this.b = false
        this.tb = null
        break;
    }
  }

  update(){
    if (this.lr) {
      this.move(this.lr)
    } else {
      if (this.l) {
        this.move('l')
      } else if (this.r)  {
        this.move('r')
      } else {
        this.stay()
      }
    }
    if (this.tb) {
      this.move(this.tb)
    } else {
      if (this.t) {
        this.move('t')
      } else if (this.b)  {
        this.move('b')
      }
    }
  }

  drawPoint(){
    let ctx = this.game.context
      
    ctx.beginPath()
    ctx.fillStyle = '#fff'
    ctx.arc(this.x, this.y,this.pointRadius,0,Math.PI * 2)
    ctx.fill()

    ctx.beginPath()
    ctx.strokeStyle = 'blue'
    ctx.arc(this.x, this.y,this.pointRadius+1,0,Math.PI * 2)
    ctx.stroke()
  }
}