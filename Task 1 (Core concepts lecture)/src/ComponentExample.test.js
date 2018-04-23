import React from 'react';
import ReactDOM from 'react-dom';
import ComponentExample from './ComponentExample';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ComponentExample />, div);
  ReactDOM.unmountComponentAtNode(div);
});
