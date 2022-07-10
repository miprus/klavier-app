class Controls {

	//pass 'core' object to 'Controls' to access individual key objects and change thier colour
	constructor(core){
		document.addEventListener('keydown', event => {
			if(event.shiftKey) {
				switch(event.keyCode){
	//////////////////////////0 Octave////////////////////////////
					case 49: //!
						let Bb0 = new Audio('../static/sounds/Piano.ff.Bb0.mp3');
						Bb0.play();
						//key animation effect on
					break;
	///////////////////////////1st Octave///////////////////////////
					case 51: //£
						let Db1 = new Audio('../static/sounds/Piano.ff.Db1.mp3');
						Db1.play();
						//key animation effect on
						break;
	
					case 52: //$
						let Eb1 = new Audio('../static/sounds/Piano.ff.Eb1.mp3');
						Eb1.play();
						//key animation effect on
						break;
	
					case 54: //^
						let Gb1 = new Audio('../static/sounds/Piano.ff.Gb1.mp3');
						Gb1.play();
						//key animation effect on
						break;
	
					case 55: //&
						let Ab1 = new Audio('../static/sounds/Piano.ff.Ab1.mp3');
						Ab1.play();
						//key animation effect on
						break;
	
					case 56: //*
						let Bb1 = new Audio('../static/sounds/Piano.ff.Bb1.mp3');
						Bb1.play();
						//key animation effect on
						break;
	///////////////////////////2nd Octave///////////////////////////
					case 48: //)
						let Db2 = new Audio('../static/sounds/Piano.ff.Db2.mp3');
						Db2.play();
						//key animation effect on
						break;
	
					case 189: //_
						let Eb2 = new Audio('../static/sounds/Piano.ff.Eb2.mp3');
						Eb2.play();
						//key animation effect on
						break;

					case 81: //Q
						let Gb2 = new Audio('../static/sounds/Piano.ff.Gb2.mp3');
						Gb2.play();
						//key animation effect on
						break;
	
					case 87: //W
						let Ab2 = new Audio('../static/sounds/Piano.ff.Ab2.mp3');
						Ab2.play();
						//key animation effect on
						break;
	
					case 69: //E
						let Bb2 = new Audio('../static/sounds/Piano.ff.Bb2.mp3');
						Bb2.play();
						//key animation effect on
						break;
	/////////////////////////3rd Octave/////////////////////////////
					case 84: //T
						let Db3 = new Audio('../static/sounds/Piano.ff.Db3.mp3');
						Db3.play();
						//key animation effect on
						break;
	
					case 89: //Y
						let Eb3 = new Audio('../static/sounds/Piano.ff.Eb3.mp3');
						Eb3.play();
						//key animation effect on
						break;
						
					case 73: //I
						let Gb3 = new Audio('../static/sounds/Piano.ff.Gb3.mp3');
						Gb3.play();
						//key animation effect on
						break;
	
					case 79: //O
						let Ab3 = new Audio('../static/sounds/Piano.ff.Ab3.mp3');
						Ab3.play();
						//key animation effect on
						break;
	
					case 80: //P
						let Bb3 = new Audio('../static/sounds/Piano.ff.Bb3.mp3');
						Bb3.play();
						//key animation effect on
						break;
	/////////////////////////4th Octave/////////////////////////////
					case 221: //}
						let Db4 = new Audio('../static/sounds/Piano.ff.Db4.mp3');
						Db4.play();
						//key animation effect on
						break;
	
					case 65: //A
						let Eb4 = new Audio('../static/sounds/Piano.ff.Eb4.mp3');
						Eb4.play();
						//key animation effect off
						break;
	
					case 68: //D
						let Gb4 = new Audio('../static/sounds/Piano.ff.Gb4.mp3');
						Gb4.play();
						//key animation effect on
						break;
	
					case 70: //F
						let Ab4 = new Audio('../static/sounds/Piano.ff.Ab4.mp3');
						Ab4.play();
						//key animation effect on
						break;
	
					case 71: //G
						let Bb4 = new Audio('../static/sounds/Piano.ff.Bb4.mp3');
						Bb4.play();
						//key animation effect on
						break;
	/////////////////////////5th Octave/////////////////////////////
					case 74: //J
						let Db5 = new Audio('../static/sounds/Piano.ff.Db5.mp3');
						Db5.play();
						//key animation effect off
						break;
	
					case 75: //K
						let Eb5 = new Audio('../static/sounds/Piano.ff.Eb5.mp3');
						Eb5.play();
						//key animation effect off
						break;
					case 186: //:
						let Gb5 = new Audio('../static/sounds/Piano.ff.G5.mp3');
						Gb5.play();
						//key animation effect off
						break;
	
					case 192: //@
						let Ab5 = new Audio('../static/sounds/Piano.ff.Ab5.mp3');
						Ab5.play();
						//key animation effect off
						break;
	
					case 222: //~
						let Bb5 = new Audio('../static/sounds/Piano.ff.Bb5.mp3');
						Bb5.play();
						//key animation effect off
						break;
	///////////////////////////6th Octave///////////////////////////
					case 90: //Z
						let Db6 = new Audio('../static/sounds/Piano.ff.Db6.mp3');
						Db6.play();
						//key animation effect off
						break;
					
					case 88: //X
						let Eb6 = new Audio('../static/sounds/Piano.ff.Eb6.mp3');
						Eb6.play();
						//key animation effect off
						break;

					case 86: //V
						let Gb6 = new Audio('../static/sounds/Piano.ff.Gb6.mp3');
						Gb6.play();
						//key animation effect off
						break;
	
					case 66: //B
						let Ab6 = new Audio('../static/sounds/Piano.ff.Ab6.mp3');
						Ab6.play();
						//key animation effect off
						break;
	
					case 78: //N
						let Bb6 = new Audio('../static/sounds/Piano.ff.Bb6.mp3');
						Bb6.play();
						//key animation effect off
						break;
	/////////////////////////7th Octave/////////////////////////////
					case 188: //<
						let Db7 = new Audio('../static/sounds/Piano.ff.Db7.mp3');
						Db7.play();
						//key animation effect off
						break;
	
					case 190: //>
						let Eb7 = new Audio('../static/sounds/Piano.ff.Eb7.mp3');
						Eb7.play();
						//key animation effect off
						break;

					case 191: //?
						let Gb7 = new Audio('../static/sounds/Piano.ff.Gb7.mp3');
						Gb7.play();
						//key animation effect off
						break;

					case 111: // shift + num/
						let Ab7 = new Audio('../static/sounds/Piano.ff.Ab7.mp3');
						Ab7.play();
						//key animation effect off
						break;
	
					case 106: // shift + num*
						let Bb7 = new Audio('../static/sounds/Piano.ff.Bb7.mp3');
						Bb7.play();
						//key animation effect off
						break;
				}

			} else {
				switch(event.keyCode){
	//////////////////////////0 Octave////////////////////////////
					case 223: //`
						let A0 = new Audio('../static/sounds/Piano.ff.A0.mp3');
						A0.play();
						//core.keyPress_white("A0");
					break;
	
					case 49: //1	
						let B0 = new Audio('../static/sounds/Piano.ff.B0.mp3');
						B0.play();
						//key animation effect on
						break;
	////////////////////////1st Octave//////////////////////////////
					case 50: //2
						let C1 = new Audio('../static/sounds/Piano.ff.C1.mp3');
						C1.play();
						//key animation effect on
						break;
	
					case 51: //3
						let D1 = new Audio('../static/sounds/Piano.ff.D1.mp3');
						D1.play();
						//key animation effect on
						break;
	
					case 52: //4
						let E1 = new Audio('../static/sounds/Piano.ff.E1.mp3');
						E1.play();
						//key animation effect on
						break;
	
					case 53: //5
						let F1 = new Audio('../static/sounds/Piano.ff.F1.mp3');
						F1.play();
						//key animation effect on
						break;
	
					case 54: //6
						let G1 = new Audio('../static/sounds/Piano.ff.G1.mp3');
						G1.play();
						//key animation effect on
						break;
	
					case 55: //7
						let A1 = new Audio('../static/sounds/Piano.ff.A1.mp3');
						A1.play();
						//key animation effect on
						break;
	
					case 56: //8
						let B1 = new Audio('../static/sounds/Piano.ff.B1.mp3');
						B1.play();
						//key animation effect on
						break;
	////////////////////////2nd Octave//////////////////////////////
					case 57: //9
						let C2 = new Audio('../static/sounds/Piano.ff.C2.mp3');
						C2.play();
						//key animation effect on
						break;
						
					case 48: //0
						let D2 = new Audio('../static/sounds/Piano.ff.D2.mp3');
						D2.play();
						//key animation effect on
						break;
	
					case 189: //-
						let E2 = new Audio('../static/sounds/Piano.ff.E2.mp3');
						E2.play();
						//key animation effect on
						break;
	
					case 187: //=
						let F2 = new Audio('../static/sounds/Piano.ff.F2.mp3');
						F2.play();
						//key animation effect on
						break;
	
					case 81: //q
						let G2 = new Audio('../static/sounds/Piano.ff.G2.mp3');
						G2.play();
						//key animation effect on
						break;
	
					case 87: //w
						let A2 = new Audio('../static/sounds/Piano.ff.A2.mp3');
						A2.play();
						//key animation effect on
						break;
	
					case 69: //e
						let B2 = new Audio('../static/sounds/Piano.ff.B2.mp3');
						B2.play();
						//key animation effect on
						break;
	//////////////////////////3rd Octave////////////////////////////
					case 82: //r
						let C3 = new Audio('../static/sounds/Piano.ff.C3.mp3');
						C3.play();
						//key animation effect on
						break;
	
					case 84: //t
						let D3 = new Audio('../static/sounds/Piano.ff.D3.mp3');
						D3.play();
						//key animation effect on
						break;
	
					case 89: //y
						let E3 = new Audio('../static/sounds/Piano.ff.E3.mp3');
						E3.play();
						//key animation effect on
						break;
	
					case 85: //u
						let F3 = new Audio('../static/sounds/Piano.ff.F3.mp3');
						F3.play();
						//key animation effect on
						break;
						
					case 73: //i
						let G3 = new Audio('../static/sounds/Piano.ff.G3.mp3');
						G3.play();
						//key animation effect on
						break;
	
					case 79: //o
						let A3 = new Audio('../static/sounds/Piano.ff.A3.mp3');
						A3.play();
						//key animation effect on
						break;
	
					case 80: //p
						let B3 = new Audio('../static/sounds/Piano.ff.B3.mp3');
						B3.play();
						//key animation effect on
						break;
	/////////////////////////4th Octave/////////////////////////////
					case 219: //[
						let C4 = new Audio('../static/sounds/Piano.ff.C4.mp3');
						C4.play();
						//key animation effect on
						break;
	
					case 221: //]
						let D4 = new Audio('../static/sounds/Piano.ff.D4.mp3');
						D4.play();
						//key animation effect on
						break;
	
					case 65: //a
						let E4 = new Audio('../static/sounds/Piano.ff.E4.mp3');
						E4.play();
						//key animation effect off
						break;
	
					case 83: //s
						let F4 = new Audio('../static/sounds/Piano.ff.F4.mp3');
						F4.play();
						//key animation effect on
						break;
	
					case 68: //d
						let G4 = new Audio('../static/sounds/Piano.ff.G4.mp3');
						G4.play();
						//key animation effect on
						break;
	
					case 70: //f
						let A4 = new Audio('../static/sounds/Piano.ff.A4.mp3');
						A4.play();
						//key animation effect on
						break;
	
					case 71: //g
						let B4 = new Audio('../static/sounds/Piano.ff.B4.mp3');
						B4.play();
						//key animation effect on
						break;
	//////////////////////////5th Octave////////////////////////////
					case 72: //h
						let C5 = new Audio('../static/sounds/Piano.ff.C5.mp3');
						C5.play();
						//key animation effect off
						break;
	
					case 74: //j
						let D5 = new Audio('../static/sounds/Piano.ff.D5.mp3');
						D5.play();
						//key animation effect off
						break;
	
					case 75: //k
						let E5 = new Audio('../static/sounds/Piano.ff.E5.mp3');
						E5.play();
						//key animation effect off
						break;
	
					case 76: //l
						let F5 = new Audio('../static/sounds/Piano.ff.F5.mp3');
						F5.play();
						//key animation effect off
						break;
	
					case 186: //;
						let G5 = new Audio('../static/sounds/Piano.ff.G5.mp3');
						G5.play();
						//key animation effect off
						break;
	
					case 192: //'
						let A5 = new Audio('../static/sounds/Piano.ff.A5.mp3');
						A5.play();
						//key animation effect off
						break;
	
					case 222: //#
						let B5 = new Audio('../static/sounds/Piano.ff.B5.mp3');
						B5.play();
						//key animation effect off
						break;
	/////////////////////////6th Octave/////////////////////////////
					case 220: //\
						let C6 = new Audio('../static/sounds/Piano.ff.C6.mp3');
						C6.play();
						//key animation effect off
						break;
	
					case 90: //z
						let D6 = new Audio('../static/sounds/Piano.ff.D6.mp3');
						D6.play();
						//key animation effect off
						break;
					
					case 88: //x
						let E6 = new Audio('../static/sounds/Piano.ff.E6.mp3');
						E6.play();
						//key animation effect off
						break;
	
					case 67: //c
						let F6 = new Audio('../static/sounds/Piano.ff.F6.mp3');
						F6.play();
						//key animation effect off
						break;
	
					case 86: //v
						let G6 = new Audio('../static/sounds/Piano.ff.G6.mp3');
						G6.play();
						//key animation effect off
						break;
	
					case 66: //b
						let A6 = new Audio('../static/sounds/Piano.ff.A6.mp3');
						A6.play();
						//key animation effect off
						break;
	
					case 78: //n
						let B6 = new Audio('../static/sounds/Piano.ff.B6.mp3');
						B6.play();
						//key animation effect off
						break;
	/////////////////////////7th Octave/////////////////////////////
					case 77: //m
						let C7 = new Audio('../static/sounds/Piano.ff.C7.mp3');
						C7.play();
						//key animation effect off
						break;
	
					case 188: //,
						let D7 = new Audio('../static/sounds/Piano.ff.D7.mp3');
						D7.play();
						//key animation effect off
						break;
	
					case 190: //.
						let E7 = new Audio('../static/sounds/Piano.ff.E7.mp3');
						E7.play();
						//key animation effect off
						break;
	
					case 191: ///
						let F7 = new Audio('../static/sounds/Piano.ff.F7.mp3');
						F7.play();
						//key animation effect off
						break;
	
					case 111: //num/
						let G7 = new Audio('../static/sounds/Piano.ff.G7.mp3');
						G7.play();
						//key animation effect off
						break;

					case 106: //num*
						let A7 = new Audio('../static/sounds/Piano.ff.A7.mp3');
						A7.play();
						//key animation effect off
						break;
	
					case 109: //num- 
						let B7 = new Audio('../static/sounds/Piano.ff.B7.mp3');
						B7.play();
						//key animation effect off
						break;
	/////////////////////////8th Octave/////////////////////////////
					case 103: //num7
						let C8 = new Audio('../static/sounds/Piano.ff.C8.mp3');
						C8.play();
						//key animation effect off
						break;
				}
			}
		});
/*
		document.addEventListener('keyup', event => {
			switch(event.keyCode){
				case 37: 
					//sound off
					//key animation effect off
					break;

			}
		});
*/
	}
}

export {Controls};
