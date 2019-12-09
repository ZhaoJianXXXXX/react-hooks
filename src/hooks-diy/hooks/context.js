import { useCounter } from '../context';

const bindContexts = (contexts, renderFunc) => {
	renderFunc();
	const contextsArray = Object
		.getOwnPropertyNames(contexts)
		.map(_counter => {
			const counter = parseInt(_counter);
			return [counter, contexts[counter][1]];
		});
	if(contextsArray.length <= 0){
		return renderFunc
	}
	return renderFunc
}

export { bindContexts }
