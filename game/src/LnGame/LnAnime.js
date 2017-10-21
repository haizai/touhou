export default class LnAnime {
 	constructor(lnImage, stayImgs) {
 		this.lnImage = lnImage
 		this.stayImgs = stayImgs


		this.infinieFrame = 6
		this.quickFrame = 1
		this.frameCount = this.infinieFrame
		this.nowCount = this.quickFrame
		this.frameIndex = 0


		this.frames = this.stayImgs
		this.iteration = 'infinite'
		this.nextFun = null


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
				this.changeImg(this.frameIndex)
			} else {
				switch (this.iteration) {
					default:
						this.iteration--
					case 'infinite':
						this.frameIndex = 0
						this.changeImg(this.frameIndex)
						break;
					case 1:
						this.end()
						break
				}
			}
		}
	}

	// changeImg(frameIndex){
	// 	this.lnImage.name = this.frames[frameIndex]
	// }

	changeImg(frameIndex){
		let name = this.frames[frameIndex]
		this.lnImage.toggleSprite(name)
	}

	end(){

	}

	configAnime(frames,iteration = 'infinite', frameCount = this.infinieFrame) {
		this.frames = frames
		this.iteration = iteration
		this.frameCount = frameCount
		this.frameIndex = -1
	}
}