import React from 'react';
import { withHooks, useState, useMemo } from '../hooks-diy';

const UseMemo = withHooks(() => {

	const [count, setCount] = useState(3);
	const [number, setNumber] = useState(3);

	const expensive = useMemo(() => {
		let sum = 0;
		for(let i = 0; i <= count; i++){
			sum += i;
		}
		return sum;
	}, [count])

	return(
		<React.Fragment>
			<p>{ count }</p>
			<button onClick = {() => setCount(count+1)}>setCount（每次加1）</button>
			<Child expensive = { expensive }/>
			<p>{ number }</p>
			<button onClick = {() => setNumber(number+1)}>setNumber（每次加1）</button>
		</React.Fragment>
	)
});

const Child = withHooks(({ expensive }) => (<p>expensive: { expensive }</p>))

export { UseMemo }
