const hooksContextStack = []

export function useCounter() {
    const context = hooksContextStack[hooksContextStack.length - 1];
    const counter = context.counter++;
    return { component: context.component, counter };
}

export function withContext(component, func){
    return function (...args) {
        hooksContextStack.push({ component, counter: 0 });
        //func中会执行相应的useState,useEffect等方法
		const result = func(...args);
        hooksContextStack.pop();
        return result;
    }
}
