import {MeshBuilder, Scene} from "@babylonjs/core";

export class XRTest {
	constructor(private scene: Scene) {

	}

	async start(){
		const xr = await this.scene.createDefaultXRExperienceAsync({})
	}
}
