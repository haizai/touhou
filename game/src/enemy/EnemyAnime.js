import LnAnime from '../LnGame/LnAnime'


export default class EnemyAnime extends LnAnime{
	constructor(
		lnImage,
		stayImgs,
		stayToMoveImgs,
		moveImgs,
	) {
		super(lnImage,stayImgs)

		this.stayToMoveImgs = stayToMoveImgs
		this.moveImgs = moveImgs

		this.stage = 'stay' // stayToMove move moveToStay 
	}

	move(){
		if (this.stage !== 'stayToMove' && this.stage !== 'move') {
			this.stage = 'stayToMove'
			this.nextFun = () => {
				this.configAnime(this.stayToMoveImgs,1,this.quickFrame)
			}
		}
	}


	end() { 
		switch (this.stage) {
			case 'stayToMove': 
				this.stage = 'move'
				this.nextFun = () => {
					this.configAnime(this.moveImgs)
				}
				break;
			case 'moveToStay':
				this.stage = 'stay'
				this.nextFun = () => {
					this.configAnime(this.stayImgs)
				}
				break;
		}
	}

	stay() {
		switch (this.stage) {
			case 'move': 
				this.stage = 'moveToStay'
				this.nextFun = () => {
					this.configAnime(this.stayToMoveImgs.slice().reverse(),1,this.quickFrame)
				}
				break
			case 'stayToMove':
				this.stage = 'moveToStay'
				this.nextFun = () => {
					this.configAnime(this.stayToMoveImgs.slice(this.frameIndex).reverse(),1,this.quickFrame)
				}
				break
		}
	}

}