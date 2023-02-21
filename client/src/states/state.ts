import { STATES } from "./states";
import { States } from "./types";

export class State {
	state: States;

	constructor() {
		this.state = STATES.MENU;
	}

	get() {
		return this.state;
	}

	set(newState: States) {
		this.state = newState;
	}
}
