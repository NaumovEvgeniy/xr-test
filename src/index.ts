import {createScene} from "./scene";
import {Engine} from "@babylonjs/core";
import {XRTest} from "./XRTest";

const canvas = document.querySelector<HTMLCanvasElement>('#scene');
if(!canvas){
	throw new Error('Нет канваса');
}

let engine = new Engine(canvas);
const scene = createScene(canvas, engine)

engine.runRenderLoop(function() {
	scene.render();
});

window.addEventListener('resize', function() {
	engine.resize();
});

const xrTest = new XRTest(scene);
xrTest.start();
