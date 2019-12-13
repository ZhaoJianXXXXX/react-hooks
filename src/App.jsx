import React from 'react';
//import { useState, useEffect, useMemo, useCallback } from 'react';
import { UseState, UseEffect, UseMemo, UseCallback, UseContext } from './hooks-demo';
import { withHooks } from './hooks-diy';
import logo from './logo.svg';
import './App.css';

const App = (Demo) => (
	withHooks(() => (
		<div className="App">
			<header className="App-header">
				<Demo/>
			</header>
		</div>
	))
)

export default App(UseEffect);
