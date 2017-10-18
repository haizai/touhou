import LnImage from '../LnGame/LnImage'
import LnAnime from '../LnGame/LnAnime'

import PlayerAnime from './PlayerAnime'


export default class Player extends LnImage{

  constructor(game, player) {
    super(game, player + '_01')
    this.x = 200
    this.y = 500
    this.speed = 4
    this.player = player

    this.pointRadius = 2


    this.l = false
    this.r = false
    this.t = false
    this.b = false
    this.lf = null
    this.tb = null

    this.anime = new PlayerAnime(
      this,
      [player + '_01',player + '_02',player + '_03',player + '_04',player + '_05',player + '_06',player + '_07',player + '_08'],
      [player + '_09',player + '_10',player + '_11',player + '_12'],
      [player + '_13',player + '_14',player + '_15',player + '_16'],
      [player + '_17',player + '_18',player + '_19',player + '_20'],
      [player + '_21',player + '_22',player + '_23',player + '_24'],
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