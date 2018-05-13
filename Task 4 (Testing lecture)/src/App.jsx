import * as React from 'react'

import { Logo } from './components/logo';
import { Header } from './components/header/header';

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
        <React.Fragment>
          <div>{ this.state.hasError }</div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Header>
            <Logo />
          </Header>
          <main></main>
          <footer>
            <Logo />
          </footer>
        </React.Fragment>
      );
    }
  }
}
