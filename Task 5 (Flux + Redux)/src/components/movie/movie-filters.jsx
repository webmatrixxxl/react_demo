import * as React from 'react';

export class MovieFilters extends React.PureComponent {
  render() {
    return (
      <header>
        <div>
          7 movies found
        </div>
        <div>
          Sort by
          <div>
            <button>release date</button>
            <button>rating</button>
          </div>
        </div>
      </header>
    );
  }
}
