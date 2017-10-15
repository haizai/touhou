import BulletPoint from './BulletPoint'


export default class ConstantPoint extends BulletPoint {
	constructor(x,y,radius = 3, speed = 1){

		super(x,y,radius)

		this.speed = speed
	}

	update(){
		this.y += this.speed
	}

	destroy(game) {
		return this.y > game.config.height + this.radius
	}
	collide(player){
		let dx = player.x - this.x
		let dy = player.y - this.y

		let dr = Math.sqrt(dx*dx + dy*dy)

		let r = player.pointRadius + this.radius

		return dr < r
	}
}