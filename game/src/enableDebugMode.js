export default (game, enable) => {
	if(!enable) return
  
  // $('pl00').addEventListener('click', (e)=>{
  //   e.target.blur()
  //   game.scene.modPlayer('pl00')
  // })
  // $('pl01').addEventListener('click', (e)=>{
  //   e.target.blur()
  //   game.scene.modPlayer('pl01')
  // })

  // $('speedRange').addEventListener('input', e => {
  //   e.target.blur()
  //   $('speedSpan').innerHTML = e.target.value
  //   game.scene.modSpeed(+e.target.value)
  // })

  // $('infinieFrameRange').addEventListener('input', e => {
  //   e.target.blur()
  //   $('infinieFrameSpan').innerHTML = e.target.value
  //   game.scene.modInfinieFrame(+e.target.value)
  // })

  // $('quickFrameRange').addEventListener('input', e => {
  //   e.target.blur()
  //   $('quickFrameSpan').innerHTML = e.target.value
  //   game.scene.modQuickFrame(+e.target.value)
  // })

  // $('appendRateRange').addEventListener('input', e => {
  //   e.target.blur()
  //   $('appendRateSpan').innerHTML = e.target.value
  //   MOD.appendRate = +e.target.value
  // })
  // $('bulletRadiusRange').addEventListener('input', e => {
  //   e.target.blur()
  //   $('bulletRadiusSpan').innerHTML = e.target.value
  //   MOD.bulletRadius = +e.target.value
  // })
  // $('bulletSpeedRange').addEventListener('input', e => {
  //   e.target.blur()
  //   $('bulletSpeedSpan').innerHTML = e.target.value
  //   MOD.bulletSpeed = +e.target.value
  // })


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