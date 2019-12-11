import React from 'react';
import { withContext } from './context';
import { runEffects, cleanupEffects } from './hooks/effect';
import { bindContexts } from './hooks/context';

const withHooks = (func) => (
	class extends React.Component{
		constructor(props){
			super(props);
			this.state = {};
			this.__hooks__ = {
				setters: {},
				effects: {},
				layoutEffects: {},
				memos: {},
				contexts: {},
			}
//			this.render = withContext(this, () => func(this.props));
			this.render = bindContexts(
				this.__hooks__.contexts,
				withContext(this, () => func(this.props))
			);
		}
		componentWillMount(){
			runEffects(this.__hooks__.layoutEffects);
		}
		componentDidMount(){
			runEffects(this.__hooks__.effects);
		}
		componentWillUpdate(){
			runEffects(this.__hooks__.layoutEffects);
		}
		componentDidUpdate(){
			runEffects(this.__hooks__.effects);
		}
		componentWillUnmount(){
			cleanupEffects(this.__hooks__.effects);
			cleanupEffects(this.__hooks__.layoutEffects);
		}
	}
)

export { withHooks }
