 export default class LnAnime {
 	constructor(game, lnImage, names,frameCount = 5, iteration = 'infinite',cb = null) {
 		this.lnImage = lnImage
 		this.game = game
 		this.changeNames(names)
 		this.frameIndex = 0

 		this.frameCount = frameCount
 		this.nowCount = frameCount

 		this.iteration = iteration

 		this.cb = cb

 	}

 	update() {
 		this.nowCount--
 		if (this.nowCount == 0 && this.iteration !== 0) {

	 			this.nowCount = this.frameCount
	 			this.frameIndex = ( this.frameIndex + 1 ) % this.frames.length

	 			this.lnImage.image = this.frames[this.frameIndex]

	 			if (this.frameIndex == this.frames.length - 1) {
	 				switch (this.iteration) {
	 					case 'infinite':
	 						break;
	 					case 1:
	 						this.iteration = 0
	 						if (this.cb) {
	 							this.cb()
	 						}
	 						break;
	 					default:
	 						this.iteration--
	 						break;
	 				}
	 			}

 		}
 	}
 	changeNames(names) {
 		this.frameCount = 5
 		this.frames = names.map(name=>{
 			return this.game.images[name]
 		})
 	}
 }