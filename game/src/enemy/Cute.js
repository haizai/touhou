import LnImage from '../LnGame/LnImage'
import EnemyAnime from './EnemyAnime'


export default class Cute extends LnImage{
  constructor(game) {
    super(game, 'cute_1_01')
    this.x = 100
    this.y = 300


    this.anime = new EnemyAnime(
    	this,
    	['cute_1_01','cute_1_02','cute_1_03','cute_1_04','cute_1_05'],
    	['cute_1_06','cute_1_07','cute_1_08'],
    	['cute_1_09','cute_1_10','cute_1_11','cute_1_12'],
    )
  }

  toRight() {
  	this.isReverse = false;
  }
  toLeft() {
  	this.isReverse = true;
  }


}