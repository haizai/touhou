import BulletPoint from './BulletPoint'


export default class ConstantPoint extends BulletPoint {
	constructor(x,y,radius = 3, speed = 1){

		super(x,y,radius)

		this.speed = speed
	}

	move(){
		this.y += this.speed
	}
	computeLeave() {
		this.destroy = this.y > CONFIG.height + this.radius
	}
}