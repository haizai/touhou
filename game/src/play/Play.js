import LnImage from '../LnGame/LnImage'
import LnAnime from '../LnGame/LnAnime'

import PlayAnime from './PlayAnime'

export default class Play extends LnImage{

  constructor(game) {
    super(game, 'pl00_01')
    this.x = 200
    this.y = 500
    this.speed = 6

    this.l = false
    this.r = false
    this.t = false
    this.b = false
    this.lf = null
    this.tb = null



    this.moveStage = 'stay' // stayToLeft left leftToStay stayToRight right rightTostage

    this.anime = new PlayAnime(
      this,
      ['pl00_01','pl00_02','pl00_03','pl00_04','pl00_05','pl00_06','pl00_07','pl00_08'],
      ['pl00_09','pl00_10','pl00_11','pl00_12'],
      ['pl00_13','pl00_14','pl00_15','pl00_16'],
      ['pl00_17','pl00_18','pl00_19','pl00_20'],
      ['pl00_21','pl00_22','pl00_23','pl00_24'],
    )

    // this.anime = new LnAnime(game, this, ['pl00_01','pl00_02','pl00_03','pl00_04','pl00_05','pl00_06','pl00_07','pl00_08'])

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
    this.x < this.game.config.width - this.w/2 - this.speed ? this.x += this.speed : this.x = this.game.config.width - this.w/2
  }
  moveTop(){
    this.y > this.speed + this.h/2 ? this.y -= this.speed : this.y = this.h/2 
  }
  moveBottom(){
    this.y < this.game.config.height - this.h/2 - this.speed ? this.y += this.speed : this.y = this.game.config.height - this.h/2
  }
  stay(){
    // this.changeImageByName('pl00_01')
    this.anime.stay()
  }

  stayLeft() {
    this.anime.stay()
  }
  stayRight() {
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
        this.anime.stay()
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


  startMoveLeft(){
    // this.anime.startLeft()
    // if (this.moveStage !== 'moveLeft' && this.moveStage !== 'left') {      
    //   this.moveStage = 'moveLeft'
    //   this.anime = new LnAnime(this.game, this, ['pl00_09','pl00_10','pl00_11','pl00_12'],5,1, ()=> {
    //     this.moveStage = 'left'
    //     this.anime = new LnAnime(this.game, this, ['pl00_13','pl00_14','pl00_15','pl00_16'])
    //   })
    // }
    console.log('start left')
    // this.anime = new LnAnime(this.game, this, ['pl00_09','pl00_10','pl00_11','pl00_12'],2,1)
  }
  startMoveRight(){
    // this.anime.startRight()
    console.log('start right')
  }
  startMoveTop(){

  }
  startMoveBottom(){

  }
}