import * as React from 'react';

import { MovieFilters } from './search-results';
import { MovieItem } from './movie-item';

export class SearchResults extends React.PureComponent {
  render() {
    return (
      <section>
        <MovieFilters />
        <div>
          <MovieItem />
        </div>
        <div>
          No films found
        </div>
      </section>
    );
  }
}
