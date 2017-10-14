
export default class LnImage {
	constructor(game,name){
		this.game = game
    this.name = name
    this.texture = game.textures[name]
    this.w = this.texture.width
    this.h = this.texture.height
    this.x = 0
    this.y = 0
	}

	// changeImageByName(name) {
	// 	this.image = this.game.images[name]
	// }
}