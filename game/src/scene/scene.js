import Play from '../play/Play'

export default class Scene {

	constructor(game) {
		this.game = game
    this.eles = []

    let ball = new Play(this.game)
    this.addEle(ball)


    this.game.registerAction('37',()=>ball.onDirection('l'),null,()=>ball.offDirection('l')) //'←'
    this.game.registerAction('39',()=>ball.onDirection('r'),null,()=>ball.offDirection('r')) //'→'
    this.game.registerAction('38',()=>ball.onDirection('t'),null,()=>ball.offDirection('t')) //'↑'
    this.game.registerAction('40',()=>ball.onDirection('b'),null,()=>ball.offDirection('b')) //'↓'

	}
  addEle(img) {
    this.eles.push(img)
  }
  drawEles(){
    this.eles.forEach(ele=>{
      this.game.drawImage(ele)
    }, )
  }
	draw(){
    // draw 背景
    this.game.context.fillStyle = "#554"
    this.game.context.fillRect(0, 0, this.game.config.width, this.game.config.height)

    // draw
    
    this.drawEles() 
    
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
  update() {
      if (window.paused) {
        return
      }
      this.eles.forEach(ele=>{
        if (ele.anime) {
          ele.anime.update()
        }
        if (ele.update) {
          ele.update()
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
}