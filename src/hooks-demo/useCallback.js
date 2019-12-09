import React from 'react';
import { withHooks, useState, useEffect, useCallback } from '../hooks-diy';

const UseCallback = withHooks(() => {

	const [count, setCount] = useState(3);

	const callback = useCallback(() => count + 1);

	return(
		<React.Fragment>
			<p>{ count }</p>
			<button onClick = {() => setCount(count+1)}>setCount（每次加1）</button>
			<Child callback = { callback }/>
		</React.Fragment>
	)
});

const Child = withHooks(({ callback }) => {

	const [count, setCount] = useState(() => callback());

	useEffect(() => {
		setCount(callback());
	}, [callback])

	return(
		<p>count: { count }</p>
	)
})

export { UseCallback }
