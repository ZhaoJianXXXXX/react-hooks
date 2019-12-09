import React from 'react';
import { withHooks, useState } from '../hooks-diy';

const UseState = withHooks(() => {
	const [count, setCount] = useState(3);
	const [number, setNumber] = useState(6);
	return(
		<React.Fragment>
			<p>{ count }</p>
			<button onClick = {() => setCount(count+1)}>setCount（每次加1）</button>
			<p>{ number }</p>
			<button onClick = {() => setNumber(number+3)}>setNumber（每次加3）</button>
		</React.Fragment>
	)
})

export { UseState }
