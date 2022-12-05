"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawSpaceInvader();

function drawSpaceInvader() {
	//zwart vierkant tekenen als achtergrond
	context.fillStyle = "black";

	context.beginPath();

	context.fillRect(50, 50, 300, 300);

	context.stroke();

	//hexcode van internet gehaald
	//eerst de bovenste balk tekenen en daarna het kleine vierkantje
	context.fillStyle = "#AAFF00";

	context.beginPath();

	context.fillRect(75, 100, 250, 50);
	context.fillRect(175, 150, 50, 50);

	context.stroke();
}
