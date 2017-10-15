export default class BulletPoint {
	constructor(x,y,radius = 3){

		this.x = x
		this.y = y
		this.radius = radius
		this.fillStyle = '#fff'
		this.strokeStyle = 'red'

		this.type = 'BulletPoint'

		this.destroy = false
		this.collide = false


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

	update(game){
		this.move()
		this.computeLeave()
		this.computeCollide(game.scene.player)
	}

	computeLeave() {
		// this.destroy = this.y > CONFIG.height + this.radius
	}
	computeCollide(player){
		let dx = player.x - this.x
		let dy = player.y - this.y

		let dr = Math.sqrt(dx*dx + dy*dy)

		let r = player.pointRadius + this.radius

		this.collide = dr < r
	}
	move(){
		
	}
}