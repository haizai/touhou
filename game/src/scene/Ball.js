import LnImage from '../LnGame/LnImage'

export default class Ball extends LnImage{

  constructor(game) {
    super(game, 'ball')
    this.x = 100
    this.y = 200
    this.speed = 5
  }
  moveLeft(){
    this.x > this.speed ? this.x -= this.speed : this.x = 0
  }
  moveRight(){
    this.x < CONFIG.width - this.speed - this.w ? this.x += this.speed : this.x = CONFIG.width - this.w
  }
  moveTop(){
    this.y > this.speed ? this.y -= this.speed : this.y = 0
  }
  moveBottom(){
    this.y < CONFIG.height - this.speed - this.h ? this.y += this.speed : this.y = CONFIG.height - this.h
  }
}