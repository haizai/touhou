
export default class LnImage {
	constructor(game,name){
		this.game = game
    this.name = name
    this.texture = game.textures[name]
    this.w = this.texture.width
    this.h = this.texture.height
    this.x = 0
    this.y = 0


    //图像是否翻转
    this.isReverse = false
	}


	draw() {
    let texture = this.game.textures[this.name]
    this.game.context.drawImage(texture, this.x-this.w/2, this.y-this.h/2)



	}

	// 翻转渲染
	drawReverse() {
		let texture = this.game.textures[this.name]
    let ctx = this.game.context
    ctx.save()
		ctx.transform(-1, 0, 0, 1, 0, 0)
		ctx.drawImage(texture, -this.w/2-this.x, this.y-this.h/2, this.w, this.h)
		ctx.restore()
	}
}