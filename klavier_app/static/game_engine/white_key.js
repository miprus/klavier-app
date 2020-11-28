class WhiteKey{
	
	constructor(core){
		//this.img = core._img;

		this.keyID = "";//note name, e.g: A1, D#4, etc.
		
		this.width = (core.KEYBOARD_WIDTH / 52); //divided by 52 as there are 52 white keys on piano keyboard
		this.height = core.KEYBOARD_HEIGHT;

		this.position = {
			x: 0,
			y: 0,
		}
	}

	draw(ctxP){
		ctxP.strokeRect(this.position.x, this.position.y, this.width, this.height);
	}

	update(ctxP){
		//function to initiate animations, changing colours, etc.
		//change colour
		//ctxP.fillStyle = '#802BB1';
		//ctxP.fillRect(this.position.x, this.position.y, this.width, this.height);
	}
}

export {WhiteKey};