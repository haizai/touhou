
import LnImage from './LnImage'


export default class LnSprite extends LnImage {

	constructor(game, imageName,width,height,configs){

		super(game,imageName)


    this.w = width

    this.h = height

    this.data = {}

    configs.forEach(item=>{
    	this.data[item.name] = {
    		x: item.x,
    		y: item.y
    	}
    })

    //图像是否翻转
    this.isReverse = false

    this.sprite = {
    	x: configs[0].x,
    	y: configs[0].y,
    }
	}

	draw() {
    let texture = this.game.textures[this.name]
    this.game.context.drawImage(texture, this.sprite.x, this.sprite.y, this.w, this.h, this.x - this.w/2, this.y - this.h/2, this.w, this.h)
	}

	toggleSprite(name) {
		if (!this.data[name]) {
			error('name not found', name, this.data)
		} else {
			this.sprite = this.data[name]
		}
	}

	// 翻转渲染
	drawReverse() {
		let texture = this.game.textures[this.name]
    let ctx = this.game.context
    ctx.save()
		ctx.transform(-1, 0, 0, 1, 0, 0)
		ctx.drawImage(texture, this.sprite.x, this.sprite.y, this.w, this.h, -this.w/2-this.x, this.y-this.h/2, this.w, this.h)

		ctx.restore()
	}
}