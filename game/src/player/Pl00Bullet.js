import LnImage from '../LnGame/LnImage'

export default class Pl00Bullet extends LnImage{
	constructor(game, x=50, y=400) {
    super(game, 'pl00b')
    this.x = x
    this.y = y

	  this.destroy = false

	}
	update(game){
		this.y-=16
		this.computeLeave()
		this.computeCollide(game.scene.eles)
	}

	computeLeave() {
		if (this.y < 0) {
			this.destroy = true
		}
	}

	computeCollide(eles) {
		eles.forEach(ele=>{
			if (ele.type === 'enemy') {
				let bool = this.collideRect(ele.x-ele.side,this.x,ele.side*2,this.w,this.y,ele.y-ele.side,this.h,ele.side*2)
				if (bool) {
					this.destroy = true
					ele.beShot(10)
				}
			}
		})
	}
	collideRect(x1,x2,w1,w2,y1,y2,h1,h2) {
		if (x1 >= x2 && x1 >= x2 + w2) {  
        return false;  
    } else if (x1 <= x2 && x1 + w1 <= x2) {  
        return false;  
    } else if (y1 >= y2 && y1 >= y2 + h2) {  
        return false;  
    } else if (y1 <= y2 && y1 + h1 <= y2) {  
        return false;  
    } 
		return true
	}
}
