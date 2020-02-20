// DO NOT EDIT! This test has been generated by /offscreen-canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.gradient.radial.cone.shape2
// Description:
// Note:

importScripts("/resources/testharness.js");
importScripts("/2dcontext/resources/canvas-tests.js");

var t = async_test("");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

var tol = 1; // tolerance to avoid antialiasing artifacts
ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);
var g = ctx.createRadialGradient(30+10*5/2, 40, 10*3/2, 30+10*15/4, 40, 10*9/4);
g.addColorStop(0, '#f00');
g.addColorStop(1, '#f00');
ctx.fillStyle = g;
ctx.fillRect(0, 0, 100, 50);
ctx.fillStyle = '#0f0';
ctx.beginPath();
ctx.moveTo(30-tol, 40);
ctx.lineTo(110, -20-tol);
ctx.lineTo(110, 100+tol);
ctx.fill();
_assertPixel(offscreenCanvas, 1,1, 0,255,0,255, "1,1", "0,255,0,255");
_assertPixel(offscreenCanvas, 50,1, 0,255,0,255, "50,1", "0,255,0,255");
_assertPixel(offscreenCanvas, 98,1, 0,255,0,255, "98,1", "0,255,0,255");
_assertPixel(offscreenCanvas, 1,25, 0,255,0,255, "1,25", "0,255,0,255");
_assertPixel(offscreenCanvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");
_assertPixel(offscreenCanvas, 98,25, 0,255,0,255, "98,25", "0,255,0,255");
_assertPixel(offscreenCanvas, 1,48, 0,255,0,255, "1,48", "0,255,0,255");
_assertPixel(offscreenCanvas, 50,48, 0,255,0,255, "50,48", "0,255,0,255");
_assertPixel(offscreenCanvas, 98,48, 0,255,0,255, "98,48", "0,255,0,255");
t.done();

});
done();
