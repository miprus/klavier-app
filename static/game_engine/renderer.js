import {Core} from './core.js';

//get music piece's file name that can be passed to level builder
let pieceName = document.getElementById('pieceName').value;

/////////////////Canvas Setup//////////////////
//---Game Screen---//
let canvas = document.getElementById('gameScreen');
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight * 0.63;

const GAME_WIDTH = canvas.width;
const GAME_HEIGHT = canvas.height;

let scale = (GAME_WIDTH / 1920) + Number.EPSILON;
const GAME_SCALE = Math.round(scale * 100) / 100;

//---Piano Keyboard---//
let piano_keyboard = document.getElementById('piano_keyboard');
let ctxP = piano_keyboard.getContext('2d');

piano_keyboard.width = window.innerWidth;
piano_keyboard.height = window.innerHeight * 0.2;

const KEYBOARD_WIDTH = piano_keyboard.width;
const KEYBOARD_HEIGHT = piano_keyboard.height;

/////////////Images pre-render function/////////
function preRender(imgSrc, imgWidth, imgHeight){
	//create offscreen canva
	let imgR = document.createElement("canvas");
	let ctxR = imgR.getContext("2d");

	//prerender new image
	let img = new Image();
	img.src = imgSrc;

	//scale the image and save it (the image is the whole canva's context)
	imgR.width = imgWidth;
	imgR.height = imgHeight;
	ctxR.save();

	//when the image is loaded - draw it on the canva so it can be saved as a variable
	img.onload = function(){
		ctxR.drawImage(img, 0, 0, imgWidth, imgHeight);
	}

	//restore canva's state to enable next image to be pre-rendered
	ctxR.restore();

	//return an image so that it can be assigned to a variablew
	return imgR;
}

//////////////Preload assets////////////
//let whiteKey_src = '';
//let whiteKey_img = preRender();

//let blackKey_src = '';
//let blackKey_img = preRender();

//////////Game States/////////
const GAME_STATE = {
	RUNNING: 0,
	PAUSED: 1,
	COMPLETED: 2
}

///////////Game Initiation///////////
let core = new Core(GAME_WIDTH, GAME_HEIGHT, KEYBOARD_WIDTH, KEYBOARD_HEIGHT, GAME_SCALE, GAME_STATE.RUNNING, pieceName, ctxP);
core.start(ctxP);

///////////Game options listeners///////////
//restart option
let restartOption = document.getElementById('restart');
restartOption.addEventListener("click", function(){
	location.reload();
});

//exit option
let exitOption = document.getElementById('exit');
exitOption.addEventListener("click", function(){
	let exitURL = document.getElementById('exit_url').value;
	window.location.replace(exitURL);
})

//////////Game loop/////////////
let lt = 0;

	function renderer(ts){

		let dt = ts - lt;
		lt = ts;
		//console.log(dt); //framerate control

		ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

		//background
		ctx.fillStyle = '#474B4F';
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		core.update();
		core.draw(ctx);

		requestAnimationFrame(renderer);
	}

	requestAnimationFrame(renderer);






