import Player from './Player'
import Pl00Bullet from './Pl00Bullet'

export default class Pl00 extends Player {
	constructor(game){
		super(game, 'pl00')


		this.shotFrameCount = 4

		this.shotCount = 1
	}


	tryShot(){
		this.shotCount--
		if (this.shotCount <= 0) {
			this.shot()
			this.shotCount = this.shotFrameCount
		}
	}

	shot(){
		let b1 = new Pl00Bullet(this.game,this.x-8,this.y-16)
		let b2 = new Pl00Bullet(this.game,this.x+8,this.y-16)
		this.game.scene.addEle(b1)
		this.game.scene.addEle(b2)
	}
}