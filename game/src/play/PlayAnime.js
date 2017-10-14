import LnAnime from '../LnGame/LnAnime'

export default class PlayAnime {
	constructor(
		lnImage,
		stayImgs,
		stayToLeftImgs,
		leftImgs,
		stayToRightImgs,
		rightImgs
	) {
		this.lnImage = lnImage
		this.stayImgs = stayImgs
		this.stayToLeftImgs = stayToLeftImgs
		this.leftImgs = leftImgs
		this.stayToRightImgs = stayToRightImgs
		this.rightImgs = rightImgs


		this.infinieFrame = 3
		this.quickFrame = 1

		this.frameCount = this.infinieFrame
		this.nowCount = this.quickFrame
		this.frameIndex = 0

		this.frames = this.stayImgs

		this.stage = 'stay' // stayToLeft left leftToStay stayToRight right rightTostage


		this.iteration = 'infinite'
		this.nextFun = null

		console.log(this)
	}


	update(){

		if (this.nextFun) {
			this.nextFun()
			this.nextFun = null
		}

		this.nowCount--
		if (this.nowCount === 0) {
			this.nowCount = this.frameCount
			this.doAnime()
		}
	}

	doAnime() {
		this.frameIndex++
		if (this.iteration !== 0) {
			if (this.frameIndex < this.frames.length) {
				this.lnImage.name = this.frames[this.frameIndex]
			} else {
				switch (this.iteration) {
					default:
						this.iteration--
					case 'infinite':
						this.frameIndex = 0
						this.lnImage.name = this.frames[this.frameIndex]
						break;
					case 1:
						this.end()
						break
				}
			}
		}
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

	configAnime(frames,iteration = 'infinite', frameCount = this.infinieFrame) {
		this.frames = frames
		this.iteration = iteration
		this.frameCount = frameCount
		this.frameIndex = -1
	}
}