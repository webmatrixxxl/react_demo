import * as React from 'react';

import { Logo } from '../logo';
import { Search } from '../search/search';


var headerStyle = {
  backgroundImage: 'url(./bg--netflix.jpg)'
};

export class Header extends React.PureComponent {
  render() {
    return (
      <header style={headerStyle}>
        <div>
          <Logo />
          <button>Search</button>
        </div>
        <Search />
      </header>
    );
  }
}
