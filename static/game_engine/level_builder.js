function level(core, NoteBlock){
	//check if a music piece url is provided. If not - don't load any music piece from library
	if(core.pieceName == "none"){
		console.log("Free mode enabled")
	} else {
		//level builder
		function buildLevel(musicPiece, channel, channel_colour, channel_strCol){
			var noteSpeed = musicPiece.header.timeSignatures[0].timeSignature[1]; //time signature's denominator
		
			for (let i = 0; i < musicPiece.tracks[channel].notes.length; i++) {
				let noteName = musicPiece.tracks[channel].notes[i].name; //note name, e.g A6
				let noteDuration = musicPiece.tracks[channel].notes[i].duration * 1000; //note duration in ms
				let noteTimeStamp = musicPiece.tracks[channel].notes[i].time * 1000; //note timestamp in ms
				let colour = channel_colour;
				let strokeColour = channel_strCol;
		
				//build individual block note and specify its height and position - for piano key indication
				[...core.whiteKeys, ...core.blackKeys].forEach(element => {
					if(element.keyID == noteName){
						var height = noteDuration * (noteSpeed / 16.6);
						var posX = element.position.x;
						var posY = -height;
					}
			
					//wait for displaying the note block according to music piece data from json file
					setTimeout(() => {
						core.gameObjects.push(new NoteBlock(core, posX, posY, element.width, height, noteSpeed, colour, strokeColour));
					}, noteTimeStamp);
	
					//add poping window at the end of the song
					//get window/html object's id
					//setTimeout - piece duration
					//toggle visability = visable
			
				});
			}
		}
	
		let xmlhttp = new XMLHttpRequest();
	
		xmlhttp.onreadystatechange = function() {
		  if (this.readyState == 4 && this.status == 200) {
			//get json file from the url passed to xmlhttp.open() function below
			var musicPiece = JSON.parse(this.responseText);
	
			//set various fill colours and border colours for notes that should be play with right hand, and other - played with left hand
			buildLevel(musicPiece, 0, '#2d862d', '#194d19');
			buildLevel(musicPiece, 1, '#0066cc', '#003366');
		  }
		};
	
		//build file path to specific music piece
		let pieceURL = '../static/music_library/' + core.pieceName;

		xmlhttp.open("GET", pieceURL , true);
		xmlhttp.send();
	}

}

export {level};