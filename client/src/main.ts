import { State } from "./states/state";
import { STATES, STATE_METHODS } from "./states/states";
import { States } from "./states/types";
import { clear, print, printNewLine, prompt } from "./ui/console";

async function begin() {
	clear(true);
	print("👋 Welcome to our cool blog browser!");
	await prompt("⌨️ Press [ENTER] to continue! 🕶️");
	main();
}

export const executeMenu = async (stateMethod: () => any): Promise<States> => {
	const outputState = await stateMethod();
	const hasStateType = Object.keys(STATES).includes(outputState);
	if (!hasStateType) {
		return STATES.MENU;
	}
	return outputState;
};

async function main() {
	let state = new State();
	while (true) {
		const currentState = state.get();
		const newState = await executeMenu(STATE_METHODS[currentState]);
		state.set(newState);
	}
}

begin();
