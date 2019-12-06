import React from 'react';
//import { useState, useEffect, useMemo, useCallback } from 'react';
import { useState, withHooks, useEffect } from './hooks-component';
import logo from './logo.svg';
import './App.css';


const Test1 = withHooks(function(){

	const [count, setCount] = useState(5);
	const [number, setNumber] = useState(6);

	useEffect(() => {
		console.info('监听count改变')
	}, [count])

	useEffect(() => {
		console.info('挂载执行')
	}, [])

	useEffect(() => {
		console.info('只要更新都会执行')
	})

	return(
		<div className="App">
			<header className="App-header">
				<p>{ count }</p>
				<button onClick = {() => setCount(count+2)}>setCount（每次加2）</button>
				<p>{ number }</p>
				<button onClick = {() => setNumber(number+3)}>setNumber（每次加3）</button>
				<Test2/>
			</header>
		</div>
	)
})

const Test2 = withHooks(function(){

	const [number, setNumber] = useState(8)

	return(
		<div>
			<p>{ number }</p>
			<button onClick = {() => setNumber(number+4)}>setNumber（每次加4）</button>
		</div>
	)
})

export default Test1;
