export default class BulletPoint {
	constructor(x,y,radius = 3){

		this.x = x
		this.y = y
		this.radius = radius
		this.fillStyle = '#fff'
		this.strokeStyle = 'red'

		this.type = 'bullet'

		this.destroy = false
		this.collide = false

		this.t = 0

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
		this.t++
		this.move()
		this.computeLeave()
		this.computeCollide(game.scene.player)
	}

	computeLeave() {
		if (
		this.y < - this.radius || 
		this.x < - this.radius ||
		this.y > CONFIG.height + this.radius ||
		this.x > CONFIG.width + this.radius 
		) {
			this.destroy = true
		}
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