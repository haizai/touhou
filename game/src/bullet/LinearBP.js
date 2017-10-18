import BulletPoint from './BulletPoint'


export default class LinearBP extends BulletPoint {
	constructor(x,y,radius = 3, speed = 2, angle = 90){

		super(x,y,radius)

		this.speed = speed
		this.angle = angle
		this.rad = Math.PI / 180 * angle
	}

	move(){
		this.y += this.speed * Math.sin(this.rad)
		this.x += this.speed * Math.cos(this.rad)
	}
}