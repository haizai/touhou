var $ = id => document.getElementById(id)

var CONFIG = {
	width: 400,
	height: 600,
}
var MOD = {
	paused: false,
	bulletRadius: 3,
	bulletSpeed: 2,
	appendRate: 40,
}
var Utils = {
	randomInt(min,max) {
    let length = max - min + 1
    return Math.floor(Math.random() * length + min)
	},
	probability(val) {
		return Math.random() < val
	}
}

function error(text) {
	console.error(text)
}
function log(text) {
	console.log(text)
}

var game