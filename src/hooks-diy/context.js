const hooksContextStack = [];

const useCounter = () => {
	const hookContext = hooksContextStack[hooksContextStack.length - 1];
	const counter = hookContext.counter++;
	return { component: hookContext.component, counter };
}

const withContext = (component, func) => () => {
	hooksContextStack.push({ component, counter: 0 });
	const result = func();
	hooksContextStack.pop();
	return result;
}

export { useCounter, withContext };
