//import React, { useContext } from 'react';
import React from 'react';
import { withHooks, useContext } from '../hooks-diy';

/*原始写法*/
//// 创建 Context
//const TestContext = React.createContext();
//
//// 它返回一个具有两个值的对象
//// { Provider, Consumer }
//
//const UseContext = () => {
//	// 使用 Provider 为所有子孙代提供 value 值
//	return (
//		<TestContext.Provider value = {{ test: 180 }}>
//			<div>
//				<Display/>
//			</div>
//		</TestContext.Provider>
//	);
//}
//
//const Display = () => {
//	// 使用 Consumer 从上下文中获取 value
//	return (
//		<NumberContext.Consumer>
//			{({ test }) => {
//				return <div>{ test }</div>
//			}}
//		</NumberContext.Consumer>
//	);
//}

// 创建 Context
//const TestContext = React.createContext();
//
//const UseContext = () => {
//	// 使用 Provider 为所有子孙代提供 value 值
//	return (
//		<TestContext.Provider value = {{ test: 180 }}>
//			<div>
//				<Display/>
//			</div>
//		</TestContext.Provider>
//	);
//}
//
//const Display = () => {
//	// 使用 Consumer 从上下文中获取 value
//	const value = useContext(TestContext);
//	return (
//		<div>The answer is {value.test}</div>
//	)
//}

// 创建 Context
const TestContext = React.createContext();

const UseContext = withHooks(() => {
	// 使用 Provider 为所有子孙代提供 value 值
	return (
		<TestContext.Provider value = {{ test: 140 }}>
			<div>
				<Display/>
			</div>
		</TestContext.Provider>
	);
})

const Display = withHooks(() => {
	// 使用 Consumer 从上下文中获取 value
	const value = useContext(TestContext);
	return (
		<div>The answer is {value.test}</div>
	)
})

export { UseContext };
