import React from 'react';
import { withHooks, useState, useEffect } from '../hooks-diy';

const UseEffect = withHooks(() => {
	const [count, setCount] = useState(3);
	const [number, setNumber] = useState(6);

	useEffect(() => {
		console.info('监听count改变')
	}, [count])

	useEffect(() => {
		console.info('挂载执行');
	}, [])

	useEffect(() => {
		console.info('只要更新都会执行')
	})

	return(
		<React.Fragment>
			<p>{ count }</p>
			<button onClick = {() => setCount(count+1)}>setCount（每次加1）</button>
			<p>{ number }</p>
			<button onClick = {() => setNumber(number+3)}>setNumber（每次加3）</button>
		</React.Fragment>
	)
})

export { UseEffect }
