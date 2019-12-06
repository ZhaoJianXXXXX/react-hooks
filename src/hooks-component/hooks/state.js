import { useCounter } from "../context";

export function useState(initialState){
	const { counter, component } = useCounter();
	const componentState = component.state;
	const componentSetters = component.__hooks__.setters;
	if (!componentState.hasOwnProperty(counter)) {
		//初始化过程
		//数组第一个参数
		componentState[counter] = typeof initialState === 'function' ? initialState() : initialState;
		//数组第二个参数
		componentSetters[counter] = (newState, callback) => {
			const componentState = component.state;
			if(typeof newState === 'function'){
				const oldState = componentState[counter];
				component.setState({ [counter]: newState(oldState) }, callback);
			}else{
				component.setState({ [counter]: newState }, callback)
			}
		}
	}

	return [componentState[counter], componentSetters[counter]];
}
