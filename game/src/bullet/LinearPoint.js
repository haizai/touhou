import BulletPoint from './BulletPoint'


export default class LinearPoint extends BulletPoint {
	constructor(x,y,radius = 3, speed = 1, angle = 90){

		super(x,y,radius)

		this.speed = speed
		this.angle = angle
		this.rad = Math.PI / 180 * angle
	}

	move(){
		this.y += this.speed * Math.sin(this.rad)
		this.x += this.speed * Math.cos(this.rad)
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
}