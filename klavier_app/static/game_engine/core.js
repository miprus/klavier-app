import {NoteBlock} from './note_block.js';
import {Controls} from './controls.js';
import {drawKeyboard} from './piano_keyboard.js';
import {level} from './level_builder.js';

class Core{

	constructor(GAME_WIDTH, GAME_HEIGHT, KEYBOARD_WIDTH, KEYBOARD_HEIGHT, GAME_SCALE, GAME_STATE, pieceName, ctxP){
		this.GAME_WIDTH = GAME_WIDTH;
		this.GAME_HEIGHT = GAME_HEIGHT;	
		this.KEYBOARD_WIDTH = KEYBOARD_WIDTH;
		this.KEYBOARD_HEIGHT = KEYBOARD_HEIGHT;
		this.GAME_SCALE = GAME_SCALE;
		this.GAME_STATE = GAME_STATE;
		this.pieceName = pieceName;
		this.ctxP = ctxP; // piano keyboard canva
	}

	start(ctxP){
		//create objects arrays for updata and draw functions
		//initiate object to handle keybourd inputs
		//draw piano keyboard on the bottom of the screen
		//load 'level' - a music piece that will be displayed in form of falling block notes
		this.gameObjects = [];
		this.whiteKeys = [];
		this.blackKeys = [];

		new Controls(this);

		drawKeyboard(this, ctxP);
		level(this, NoteBlock);
	}
	
	keyPress_white(keyName){
		//white key objects update - to change colours, state, animation etc.
		let key = this.whiteKeys.filter(object => object.keyID == keyName);
		key[0].update(this.ctxP);
	}

	keyPress_black(keyName){
		//black key objects update - to change colours, state, animation etc.
		let key = this.blackKeys.filter(object => object.keyID == keyName);
		key[0].update(this.ctxP);
	}

	update(){
		//update position of the falling block notes on the canva. If an object's position is below the canva (object.dead) then push out ths object from the game objects array
		this.gameObjects = this.gameObjects.filter(object => !object.dead);
		[...this.gameObjects].forEach(object => object.update());
	}

	draw(ctx){
		//re-draw game objects with updated position
		[...this.gameObjects].forEach(object => object.draw(ctx));
	}
}

export {Core};