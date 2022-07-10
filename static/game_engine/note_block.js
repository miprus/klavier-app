class NoteBlock{
	
	constructor(core, posX, posY, width, height, noteSpeed, col, strCol){
		//this.img = core._img;

		this.core = core;

		this.width = width;
		this.height = height;
		this.colour = col;
		this.strokeColour = strCol;

		this.speed = noteSpeed;

		this.position = {
			x: posX,
			y: posY,
		}

		//if object is dead, then remove it from the game objects array
		this.dead = false;
	}

	draw(ctx){
		//fill block with main colour
		ctx.fillStyle = this.colour;
		ctx.fillRect(this.position.x, this.position.y, this.width, this.height);

		//add a border to the block for better visability
		ctx.beginPath();
		ctx.lineWidth = "1";
		ctx.strokeStyle = this.strokeColour;
		ctx.rect(this.position.x, this.position.y, this.width, this.height);
		ctx.stroke();
	}

	update(){
		//make to block move downwards. If the block's position is below the canva than 'kill him'
		if(this.position.y != this.core.GAME_HEIGHT){
			this.position.y += this.speed;
		} else {
			this.dead = true;
		}
	}
}



export {NoteBlock};