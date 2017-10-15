export default class BulletPoint {
	constructor(x,y,radius = 3){

		this.x = x
		this.y = y
		this.radius = radius
		this.fillStyle = '#fff'
		this.strokeStyle = 'red'

		this.type = 'BulletPoint'


	}

	draw(game) {
		let ctx = game.context

    ctx.beginPath()
    ctx.fillStyle = this.fillStyle
    ctx.arc(this.x, this.y,this.radius,0,Math.PI * 2)
    ctx.fill()

    ctx.beginPath()
    ctx.strokeStyle = this.strokeStyle
    ctx.arc(this.x, this.y,this.radius+1,0,Math.PI * 2)
    ctx.stroke()

	}

	update(){

	}
}