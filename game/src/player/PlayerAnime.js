import LnAnime from '../LnGame/LnAnime'

export default class PlayerAnime extends LnAnime {
	constructor(
		lnImage,
		stayImgs,
		stayToLeftImgs,
		leftImgs,
		stayToRightImgs,
		rightImgs
	) {

		super(lnImage,stayImgs)

		this.stayToLeftImgs = stayToLeftImgs
		this.leftImgs = leftImgs
		this.stayToRightImgs = stayToRightImgs
		this.rightImgs = rightImgs

		this.stage = 'stay' // stayToLeft left leftToStay stayToRight right rightTostage

	}

	changeImg(frameIndex){
		let name = this.frames[frameIndex]
		this.lnImage.toggleSprite(name)
	}

	moveLeft() {
		if (this.stage !== 'stayToLeft' && this.stage !== 'left') {
			this.stage = 'stayToLeft'
			this.nextFun = () => {
				this.configAnime(this.stayToLeftImgs,1,this.quickFrame)
			}
		}
	}
	moveRight() {
		if (this.stage !== 'stayToRight' && this.stage !== 'right') {
			this.stage = 'stayToRight'
			this.nextFun = () => {
				this.configAnime(this.stayToRightImgs,1,this.quickFrame)
			}
		}
	}


	end() { 
		switch (this.stage) {
			case 'stayToLeft': 
				this.stage = 'left'
				this.nextFun = () => {
					this.configAnime(this.leftImgs)
				}
				break;
			case 'stayToRight': 
				this.stage = 'right'
				this.nextFun = () => {
					this.configAnime(this.rightImgs)
				}
				break;
			case 'leftToStay':
			case 'rightToStay':
				this.stage = 'stay'
				this.nextFun = () => {
					this.configAnime(this.stayImgs)
				}
				break;
		}
	}


	stay() {
		switch (this.stage) {
			case 'left': 
				this.stage = 'leftToStay'
				this.nextFun = () => {
					this.configAnime(this.stayToLeftImgs.slice().reverse(),1,this.quickFrame)
				}
				break
			case 'stayToLeft':
				this.stage = 'leftToStay'
				this.nextFun = () => {
					this.configAnime(this.stayToLeftImgs.slice(this.frameIndex).reverse(),1,this.quickFrame)
				}
				break
			case 'right': 
				this.stage = 'rightToStay'
				this.nextFun = () => {
					this.configAnime(this.stayToRightImgs.slice().reverse(),1,this.quickFrame)
				}
				break
			case 'stayToRight':
				this.stage = 'rightToStay'
				this.nextFun = () => {
					this.configAnime(this.stayToRightImgs.slice(this.frameIndex).reverse(),1,this.quickFrame)
				}
				break
		}
	}

}