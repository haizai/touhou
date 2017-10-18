import BulletPoint from './BulletPoint'

// 自机狙
export default class PlayerLinearBP extends BulletPoint {
	constructor(x,y,px,py,radius = 3, speed = 2){

		super(x,y,radius)

		let r = Math.sqrt((py-y)*(py-y)+(px-x)*(px-x))

		this.ty = (py-y)/r*speed
		this.tx = (px-x)/r*speed


		console.log(this)
	}
	move(){
		this.y += this.ty
		this.x += this.tx
	}
}