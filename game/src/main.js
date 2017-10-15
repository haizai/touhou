let enableDebugMode = (game, enable) => {
	if(!enable) return
  
  $('pl00').addEventListener('click', (e)=>{
    e.target.blur()
    game.scene.modPlayer('pl00')
  })
  $('pl01').addEventListener('click', (e)=>{
    e.target.blur()
    game.scene.modPlayer('pl01')
  })

  $('speedRange').addEventListener('input', e => {
    e.target.blur()
    $('speedSpan').innerHTML = e.target.value
    game.scene.modSpeed(+e.target.value)
  })

  $('infinieFrameRange').addEventListener('input', e => {
    e.target.blur()
    $('infinieFrameSpan').innerHTML = e.target.value
    game.scene.modInfinieFrame(+e.target.value)
  })

  $('quickFrameRange').addEventListener('input', e => {
    e.target.blur()
    $('quickFrameSpan').innerHTML = e.target.value
    game.scene.modQuickFrame(+e.target.value)
  })

  $('appendRateRange').addEventListener('input', e => {
    e.target.blur()
    $('appendRateSpan').innerHTML = e.target.value
    MOD.appendRate = +e.target.value
  })
  $('bulletRadiusRange').addEventListener('input', e => {
    e.target.blur()
    $('bulletRadiusSpan').innerHTML = e.target.value
    MOD.bulletRadius = +e.target.value
  })
  $('bulletSpeedRange').addEventListener('input', e => {
    e.target.blur()
    $('bulletSpeedSpan').innerHTML = e.target.value
    MOD.bulletSpeed = +e.target.value
  })


  window.addEventListener('keydown', e => {
    if (e.keyCode === 27) {
      MOD.paused = true
    } else if (e.keyCode === 13) {
      MOD.paused = false
    } else if (e.keyCode === 88) {
      game.scene.clear()
    }

  })

  $('esc').addEventListener('click', e => {
    e.preventDefault()
    MOD.paused = true
  })
  $('enter').addEventListener('click', e => {
    e.preventDefault()
    MOD.paused = false
  })
  $('clear').addEventListener('click', e => {
    e.preventDefault()
    game.scene.clear()
  })
}


import LnGame from './LnGame/LnGame'
import Scene from './scene/scene'


var images = {
  pl00_01: 'img/pl00/pl00_01.png',
  pl00_02: 'img/pl00/pl00_02.png',
  pl00_03: 'img/pl00/pl00_03.png',
  pl00_04: 'img/pl00/pl00_04.png',
  pl00_05: 'img/pl00/pl00_05.png',
  pl00_06: 'img/pl00/pl00_06.png',
  pl00_07: 'img/pl00/pl00_07.png',
  pl00_08: 'img/pl00/pl00_08.png',
  pl00_09: 'img/pl00/pl00_09.png',
  pl00_10: 'img/pl00/pl00_10.png',
  pl00_11: 'img/pl00/pl00_11.png',
  pl00_12: 'img/pl00/pl00_12.png',
  pl00_13: 'img/pl00/pl00_13.png',
  pl00_14: 'img/pl00/pl00_14.png',
  pl00_15: 'img/pl00/pl00_15.png',
  pl00_16: 'img/pl00/pl00_16.png',
  pl00_17: 'img/pl00/pl00_17.png',
  pl00_18: 'img/pl00/pl00_18.png',
  pl00_19: 'img/pl00/pl00_19.png',
  pl00_20: 'img/pl00/pl00_20.png',
  pl00_21: 'img/pl00/pl00_21.png',
  pl00_22: 'img/pl00/pl00_22.png',
  pl00_23: 'img/pl00/pl00_23.png',
  pl00_24: 'img/pl00/pl00_24.png',

  pl01_01: 'img/pl01/pl01_01.png',
  pl01_02: 'img/pl01/pl01_02.png',
  pl01_03: 'img/pl01/pl01_03.png',
  pl01_04: 'img/pl01/pl01_04.png',
  pl01_05: 'img/pl01/pl01_05.png',
  pl01_06: 'img/pl01/pl01_06.png',
  pl01_07: 'img/pl01/pl01_07.png',
  pl01_08: 'img/pl01/pl01_08.png',
  pl01_09: 'img/pl01/pl01_09.png',
  pl01_10: 'img/pl01/pl01_10.png',
  pl01_11: 'img/pl01/pl01_11.png',
  pl01_12: 'img/pl01/pl01_12.png',
  pl01_13: 'img/pl01/pl01_13.png',
  pl01_14: 'img/pl01/pl01_14.png',
  pl01_15: 'img/pl01/pl01_15.png',
  pl01_16: 'img/pl01/pl01_16.png',
  pl01_17: 'img/pl01/pl01_17.png',
  pl01_18: 'img/pl01/pl01_18.png',
  pl01_19: 'img/pl01/pl01_19.png',
  pl01_20: 'img/pl01/pl01_20.png',
  pl01_21: 'img/pl01/pl01_21.png',
  pl01_22: 'img/pl01/pl01_22.png',
  pl01_23: 'img/pl01/pl01_23.png',
  pl01_24: 'img/pl01/pl01_24.png', 
}
var game = LnGame.instance(30, images, function(g){
	let s = new Scene(g)
  g.runWithScene(s)
})
enableDebugMode(game, true)

console.log(game)