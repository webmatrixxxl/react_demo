import * as React from 'react';

import { MovieFilters } from './movie-filters';
import { MovieItem } from './movie-item';

export class MovieList extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <MovieFilters />
        <div>
          <MovieItem />
        </div>
      </React.Fragment>
    );
  }
}
