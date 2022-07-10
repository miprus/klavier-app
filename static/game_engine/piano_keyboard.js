import {WhiteKey} from './white_key.js';
import {BlackKey} from './black_key.js';

function drawKeyboard(core, ctxP){
	//create the arrays of notes names (separate set for white and black keys). Those note names will be assigned to individual objects - piano keys - as thier uniqe IDs
	let white_keys = [
		"A0", "B0", 
		"C1", "D1", "E1", "F1", "G1", "A1", "B1",
		"C2", "D2", "E2", "F2", "G2", "A2", "B2",
		"C3", "D3", "E3", "F3", "G3", "A3", "B3",
		"C4", "D4", "E4", "F4", "G4", "A4", "B4",
		"C5", "D5", "E5", "F5", "G5", "A5", "B5",
		"C6", "D6", "E6", "F6", "G6", "A6", "B6",
		"C7", "D7", "E7", "F7", "G7", "A7", "B7",
		"C8"
		];

	let black_keys = [
		"A#0", 
		"C#1", "D#1", "F#1", "G#1", "A#1",
		"C#2", "D#2", "F#2", "G#2", "A#2",
		"C#3", "D#3", "F#3", "G#3", "A#3",
		"C#4", "D#4", "F#4", "G#4", "A#4",
		"C#5", "D#5", "F#5", "G#5", "A#5",
		"C#6", "D#6", "F#6", "G#6", "A#6",
		"C#7", "D#7", "F#7", "G#7", "A#7"
		];

///////////////////White Keys Draw/////////////////////////
		for (let i = 0; i < 52; i++) {
			let whiteKey = new WhiteKey(core);

			whiteKey.keyID = white_keys[i];
			whiteKey.position.x = whiteKey.width * i;
			whiteKey.draw(ctxP);
	
			core.whiteKeys.push(whiteKey);
		}

///////////////////Black Keys Draw/////////////////////////
	let blackKey = new BlackKey(core);
	let c_posX = blackKey.width * 4.5;

	//create the first black key - A#0
	blackKey.position.x = blackKey.width * 1.5;
	blackKey.keyID = black_keys[0];
	blackKey.draw(ctxP);

	core.blackKeys.push(blackKey);
	
	let c = 0;

		for (let j = 0; j < 35; j++){
			//make a brake evry 2 or 3 black keys to displaye the piano keyboard correctly
			if(c == 2 || c == 6){
				j--;
				c_posX += blackKey.width * 2;
				
			} else {
				let blackKey = new BlackKey(core);
				
				c_posX += blackKey.width;

				blackKey.keyID = black_keys[j + 1];
				blackKey.position.x = c_posX;
				blackKey.draw(ctxP);

				core.blackKeys.push(blackKey);

				c_posX += blackKey.width;
			}

			c++;

			//reset the counter
			if(c > 6){
				c = 0;
			}
		}	
}

export {drawKeyboard};



