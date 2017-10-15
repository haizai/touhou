export default class LnGame {
	constructor(fps, config ,images, runCallback){
    window.fps = fps
    this.config = config
    this.images = images

    this.textures = {}
    this.runCallback = runCallback

    this.scene = null
    this.actions = {}
    this.endActions = {}
    this.startActions = {}
    this.keydowns = {}
    this.canvas = document.querySelector('#id-canvas')
    this.context = this.canvas.getContext('2d')

    window.addEventListener('keydown', event => {
      this.keydowns[event.keyCode] = true
      if (this.startActions[event.keyCode] && this.startActions[event.keyCode].allow) {
        this.startActions[event.keyCode].cb()
        this.startActions[event.keyCode].allow = false
      }
    })
    window.addEventListener('keyup', event => {
      this.keydowns[event.keyCode] = false
      if (this.endActions[event.keyCode]) {
        this.endActions[event.keyCode]()
        if (this.startActions[event.keyCode]){
          this.startActions[event.keyCode].allow = true
        }
      }
    })

    this.init()
	}

  static instance(...args) {
    this.i = this.i || new this(...args)
    return this.i
  }

  registerAction(keyCode, cb, startCb ,endCb) {
    if (cb) this.actions[keyCode] = cb

    if (startCb) this.startActions[keyCode] = {
      cb: startCb,
      allow: true,
    }

    if (endCb) this.endActions[keyCode] = endCb

  }

  __start(){
  	this.runCallback(this)
  }

	runWithScene(scene){
		this.scene = scene
    // 开始运行程序
    setTimeout(() => {
      this.runloop()
    }, 1000/window.fps)
	}

	runloop(){
    // events
    var actions = Object.keys(this.actions)
    for (var i = 0; i < actions.length; i++) {
        var keyCode = actions[i]
        if(this.keydowns[keyCode]) {
            // 如果按键被按下, 调用注册的 action
            this.actions[keyCode]()
        }
    }
    // update
    this.update()
    // clear
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.heithisht)
    // draw
    this.draw()
    // next run loop
    setTimeout(()=>{
      this.runloop()
    }, 1000/window.fps)
	}
	update(){
		this.scene.update()
	}
	draw(){
		this.scene.draw()
	}


  init(){
    var g = this
    var loads = 0
    // 预先载入所有图片
    var names = Object.keys(g.images)
    for (var i = 0; i < names.length; i++) {
      let name = names[i]
      var path = g.images[name]
      let img = new Image()
      img.src = path
      img.onload = function() {
        // 存入 g.images 中
        g.textures[name] = img
        // 所有图片都成功载入之后, 调用 run
        loads++
        console.log('load images', loads, names.length)
        if (loads == names.length) {
          console.log('load images', g.images)
          g.__start()
        }
      }
    }
  }
}