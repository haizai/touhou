import Pl00 from '../player/Pl00'
import Pl01 from '../player/Pl01'

import LinearBP from '../bullet/LinearBP'
import Cute from '../enemy/Cute'
import flow from './flow'




export default class Scene {

	constructor(game) {
		this.game = game

    this.game.scene = this

    this.eles = []

    this.appendRate = 0


    this.player = new Pl00(this.game)
    this.addEle(this.player)
    this.registerPlayerAction()

	}

  registerPlayerAction(){
    this.game.registerAction('37',()=>this.player.onDirection('l'),null,()=>this.player.offDirection('l')) //'←'
    this.game.registerAction('39',()=>this.player.onDirection('r'),null,()=>this.player.offDirection('r')) //'→'
    this.game.registerAction('38',()=>this.player.onDirection('t'),null,()=>this.player.offDirection('t')) //'↑'
    this.game.registerAction('40',()=>this.player.onDirection('b'),null,()=>this.player.offDirection('b')) //'↓'
  }


  addEle(img) {
    this.eles.push(img)
  }
  removeEle(img) {
    this.eles.splice(this.eles.indexOf(img),1)
    img = null
  }
  drawEles(){
    this.eles.forEach(ele=>{
      ele.isReverse ? ele.drawReverse() : ele.draw(this.game)
    }, )
  }
  drawPlayerPoint(){
    this.player.drawPoint()
  }

  modPlayer(name) {
    if (name == 'pl00') {
      if (this.player.player == 'pl00') return
      this.removeEle(this.player)
      this.player = new Pl00(this.game)
      this.addEle(this.player)
      this.registerPlayerAction()
    } else {
      if (this.player.player == 'pl01') return
      this.removeEle(this.player)
      this.player = new Pl01(this.game)
      this.addEle(this.player)
      this.registerPlayerAction()
    }
  }
  modSpeed(speed){
    this.player.speed = speed
  }
  modInfinieFrame(infinieFrame){
    this.player.anime.infinieFrame = infinieFrame
  }
  modQuickFrame(quickFrame){
    this.player.anime.quickFrame = quickFrame
  }


  clear(){
    this.eles.forEach(ele=>{
      if (!ele.stay) {
        ele.destroy = true
      }
    })
  }

	draw(){
    // draw 背景
    this.game.context.fillStyle = "#554"
    this.game.context.fillRect(0, 0, CONFIG.width, CONFIG.height)


    // draw eles
    
    this.drawEles() 

    this.drawPlayerPoint()



    // game.drawImage(paddle)
    // this.game.drawImage(this.ball)
    // draw blocks
    // for (var i = 0; i < blocks.length; i++) {
    //     var block = blocks[i]
    //     if (block.alive) {
    //         game.drawImage(block)
    //     }
    // }
    // draw labels
    // game.context.fillText('分数: ' + score, 10, 290)
	}

  doFlow(flow,t){
    let n = t.toString()
    if (flow[n]) {
      flow[n](this.game)
    }
  }

  update() {
      if (MOD.paused) {
        return
      }

      this.doFlow(flow,this.game.t)


      this.eles.forEach(ele=>{
        if (ele.anime) {
          ele.anime.update()
        }
        if (ele.update) {
          ele.update(this.game)
        }
        
        if (ele.collide) {
          console.log('collide',ele.x,ele.y)
          this.game.dead()
          ele.destroy = true 
        }

        if (ele.destroy) {
          this.removeEle(ele)
        }


      }, )




      // ball.move()
      // // 判断游戏结束
      // if (ball.y > paddle.y) {
      //     // 跳转到 游戏结束 的场景
      //     var end = SceneEnd.new(game)
      //     game.replaceScene(end)
      // }
      // // 判断相撞
      // if (paddle.collide(ball)) {
      //     // 这里应该调用一个 ball.反弹() 来实现
      //     ball.反弹()
      // }
      // // 判断 ball 和 blocks 相撞
      // for (var i = 0; i < blocks.length; i++) {
      //     var block = blocks[i]
      //     if (block.collide(ball)) {
      //         // log('block 相撞')
      //         block.kill()
      //         ball.反弹()
      //         // 更新分数
      //         score += 100
      //     }
      // }
  }

  randomShot(){
    this.appendRate += MOD.appendRate

    while (this.appendRate > 60) {
      this.addBP()
      this.appendRate-=60
    }
  }
  addBP(){
    let bp = new LinearPoint(
      Utils.randomInt(0,CONFIG.width),
      0,
      MOD.bulletRadius,
      MOD.bulletSpeed,
      Utils.randomInt(30,150))
    this.addEle(bp)
  }
}