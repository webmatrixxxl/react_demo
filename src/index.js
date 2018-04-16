import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ComponentExample from './ComponentExample';
import PureComponentExample from './PureComponentExample';
import registerServiceWorker from './registerServiceWorker';

const createElementExample = React.createElement('h3', {}, 'Hello World from "createElement"');

function FunctionalComponentExample(props) {
  return <h4>Hello World from "Functional Component"</h4>;
}

const renderEl = (
	<React.Fragment>
		{ createElementExample }
		<ComponentExample/>
		<PureComponentExample/>
		<FunctionalComponentExample/>
	</React.Fragment>
);

ReactDOM.render(renderEl, document.getElementById('root'));
registerServiceWorker();
