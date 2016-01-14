export const Actions = {
	CHANGE: 'CHANGE'
}

export function Action(dispatcher) {
	this.dispatcher = dispatcher;
}

Actions.prototype = {
	change() {
		this.dispatcher.dispatch({
			type: ACTIONS.CHANGE
		});
	}
}