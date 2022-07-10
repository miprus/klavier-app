class BlackKey{
	
	constructor(core){
		//this.img = core._img;

		this.keyID = "";

		this.width = (core.GAME_WIDTH / 104); //divided by 104 to get a width equal to half of the white key's width
		this.height = core.KEYBOARD_HEIGHT * 0.7; //multiplied by 0.7 in order to get shorter black key than white key

		this.position = {
			x: 0,
			y: 0,
		}
	}

	draw(ctxP){
		ctxP.fillStyle = '#000';
		ctxP.fillRect(this.position.x, this.position.y, this.width, this.height);
	}

	update(){
		//function to initiate animations, changing colours, etc.
	}
}

export {BlackKey};