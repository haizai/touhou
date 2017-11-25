export default class DeadPop {
	constructor(game){
		this.game = game

		this.activeItem = 0

	}
	show(){

		let ctx = this.game.context

		ctx.fillStyle='#FFF'
    ctx.font = "22px Microsoft YaHei";
    ctx.fillText('攻略失败',20,300)

    ctx.fillStyle='#9F79EE'
    ctx.font = "14px Microsoft YaHei";
    ctx.fillText('Mission Incomplete',5,275)




    ctx.fillStyle=this.activeItem === 0? 'red':'#FFF'
    ctx.font = "22px Microsoft YaHei";
    ctx.fillText('再续一命',70,360)

    ctx.fillStyle=this.activeItem === 1? 'red':'#FFF'
    ctx.font = "22px Microsoft YaHei";
    ctx.fillText('游戏结束',70,420)

    let text = ctx.measureText("再续一命")

    console.log(text)
	}

	up(){

	}
}