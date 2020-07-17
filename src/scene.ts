import * as BABYLON from "@babylonjs/core";
import "@babylonjs/inspector";


// @ts-ignore
window.BABYLON = BABYLON;

export function createScene(canvas: HTMLCanvasElement, engine: BABYLON.Engine) {
	// Create a basic BJS Scene object.
	let scene = new BABYLON.Scene(engine);
	// @ts-ignore
	window.scene = scene;

	scene.debugLayer.show({
		overlay: true
	});

	// Create a FreeCamera, and set its position to (x:0, y:5, z:-10).
	var camera = new BABYLON.UniversalCamera('camera', new BABYLON.Vector3(0, 5,-10), scene);

	// Target the camera to scene origin.
	camera.setTarget(BABYLON.Vector3.Zero());

	// Attach the camera to the canvas.
	camera.attachControl(canvas, false);

	// Return the created scene.
	return scene;
}
