import React from 'react';
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
		return renderFunc;
	}else{
		return contextsArray.reduceRight((lastRenderFunc, [counter, context]) => () => (
            <context.Consumer>
                {value => {
                    contexts[counter] = [value, context]
                    return lastRenderFunc()
                }}
            </context.Consumer>
        ), renderFunc)
	}
}

const useContext = (context) => {
	const { component, counter } = useCounter()
    const componentContexts = component.__hooks__.contexts;
	if (!componentContexts.hasOwnProperty(counter)) {
        componentContexts[counter] = [context._currentValue, context]
    }
    return componentContexts[counter][0]
}

export { useContext, bindContexts }
