import { states } from "./states";
import { States } from "./types";

export class State {
	state: States;

	constructor() {
		this.state = states.MENU;
	}

	get() {
		return this.state;
	}

	set(newState: States) {
		this.state = newState;
	}
}
