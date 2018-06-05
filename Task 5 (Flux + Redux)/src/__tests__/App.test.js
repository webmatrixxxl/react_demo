import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme'
import { shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { App } from './../App';

// jest.mock('./../components', () => 'Component');

describe('App', () => {
  it('renders without crashing', () => {
    const component = renderer.create(<App />).toJSON();
    expect(component).toMatchSnapshot();
  })


  it('show error', () => {
    const component = shallow(<App />);
    component.setState({ hasError: 'test error' });
    expect(component.state('hasError')).toEqual('test error');
  })
})
