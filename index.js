/*
Reviewing Canvas
*/
var canvas;
var context;

function canvasDraw() {
	var rectSize = 100;
	var centerX = canvas.width / 2;
	var centerY = canvas.height / 2;
	var rectCenterX = centerX - (rectSize / 2);
	var rectCenterY = centerY - (rectSize / 2);
	var degree = 30 * (Math.PI / 180); // 30 degrees
	var rotation = 0;

	setInterval(function () {
		rotation += 8;

		context.save();

		context.clearRect(0, 0, canvas.width, canvas.height);

		context.fillStyle = "rgb(255, 255, 255)";

		context.translate(centerX, centerY);

		context.rotate(rotation * (Math.PI / 180));

//		context.fillRect(rectCenterX, rectCenterY, rectSize, rectSize);
		context.fillRect(-rectSize/2, -rectSize/2, rectSize, rectSize);

		context.restore();
	}, 30);
}

function setCanvas() {
	canvas = $("#canvas1")[0];
	canvas.width = 380;
	canvas.height = 480;

	context = canvas.getContext("2d");
};

$(function () {
	setCanvas()
	canvasDraw();
});
