import BulletPoint from './BulletPoint'


export default class LinearBP extends BulletPoint {
	constructor(x,y,radius = 3, speed = 2, angle = 90, speedT = 0){

		super(x,y,radius)

		this.speed = speed
		this.angle = angle
		this.rad = Math.PI / 180 * angle

		this.speedT = speedT
	}

	move(){
		if (this.t > this.speedT) {
			this.y += this.speed * Math.sin(this.rad)
			this.x += this.speed * Math.cos(this.rad)
		} else {
			this.y += this.speed * Math.sin(this.rad) * 3
			this.x += this.speed * Math.cos(this.rad) * 3
		}
	}
}