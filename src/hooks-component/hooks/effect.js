import { useCounter } from "../context";
import { inputsChange } from "../inputs";

//effects[counter] = [effectFunc, cleanup, inputs]

export function cleanupEffects(effects) {
    Object.getOwnPropertyNames(effects).forEach((_counter) => {
        const counter = parseInt(_counter)
        const [ , cleanup, ] = effects[counter]
        if (typeof cleanup === 'function') {
            cleanup()
        }
        delete effects[counter]
    })
}

export function runEffects(effects){
	Object.getOwnPropertyNames(effects).forEach((_counter) => {
		const counter = parseInt(_counter);
		const [effectFunc, cleanup, ] = effects[counter];
		if(typeof effectFunc === 'function'){
			if(typeof cleanup === 'function'){
				cleanup();
			}
			const nextCleanup = effectFunc();
			effects[counter][0] = undefined;
			effects[counter][1] = typeof nextCleanup === 'function' ? nextCleanup : undefined;
		}
	})
}

function useEffectHandler(effects, counter, effectFunc, inputs){
	if(!effects.hasOwnProperty(counter)){
	 	effects[counter] = [effectFunc, undefined, inputs];
	}else{
		const [ , , oldInputs] = effects[counter];
		//对比状态是否改变(方法返回为true则表示状状态发生了改变)
		if(inputsChange(inputs, oldInputs)){
			effects[counter][0] = effectFunc;
			effects[counter][2] = inputs;
		}
	}
}

export function useEffect(effectFunc, inputs){
	const { component, counter } = useCounter();
	useEffectHandler(component.__hooks__.effects, counter, effectFunc, inputs)
}

export function useLayoutEffect(effectFunc, inputs) {
    const { component, counter } = useCounter();
    useEffectHandler(component.__hooks__.layoutEffects, counter, effectFunc, inputs)
}
