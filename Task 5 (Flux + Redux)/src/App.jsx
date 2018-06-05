import * as React from 'react';
import { Provider } from 'react-redux';

import { Logo } from './components/logo';
import { Header } from './components/header/header';

import Post from './components/Post';

import store from 'store';


export class App extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      hasError: null
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: error});
  }

  render() {
    if (this.state.hasError) {
      return (
        <Provider store={store}>
          <React.Fragment>
            <div>{ this.state.hasError }</div>
          </React.Fragment>
        </Provider>
      );
    } else {
      return (
        <Provider store={store}>
          <React.Fragment>
            <Post />
            <Header>
              <Logo />
            </Header>
            <main></main>
            <footer>
              <Logo />
            </footer>
           </React.Fragment>
        </Provider>
      );
    }
  }
}
