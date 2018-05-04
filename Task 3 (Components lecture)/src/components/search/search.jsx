import * as React from 'react';

export class Search extends React.PureComponent {
  render() {
    return (
      <div className="search">
        <h3>find your movie</h3>
        <div>
          <input type="search" name="searchMovie" /> <button>i</button>
        </div>
        <div>
          <div>
            search by <button>title</button> <button>genre</button>
          </div>
          <button>search</button>
        </div>
      </div>
    );
  }
}
