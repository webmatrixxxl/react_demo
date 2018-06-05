import * as React from 'react';

export class Search extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      query: {
        search: '',
        searchBy: ''
      }
    }

    this.onChange = this.onChange.bind(this);
  };

  onChange(e) {
    const newQuery = {[e.target.name]: e.target.value};

    this.setState({...this.state, query: newQuery});

    var url = new URL('http://react-cdp-api.herokuapp.com/movies');
    Object.keys(this.state.query).forEach(key => this.state.query[key] ? url.searchParams.append(key, this.state.query[key]) : null);

    fetch(url)
    .then(res => res.json())
    .then(data => {
      this.state.posts = data.data;
      this.setState({...this.state});
    });
  }

  render() {
    return (
      <div className="search">
        <h3>find your movie</h3>
        <div>
          <input type="search" name="search" onChange={this.onChange} value={this.state.query.search} /> <button>i</button>
          {this.state.query.search}
          {this.state.query.searchBy}
        </div>
        <div>
          <div>
            search by
            <label htmlFor="search-by-title">
              <input id="search-by-title" type="radio" name="searchBy" value="title" onClick={this.onChange} defaultChecked />
              title
            </label>
            <label htmlFor="search-by-ganre">
              <input id="search-by-ganre" type="radio" name="searchBy" value="genre" onClick={this.onChange} />
              genre
            </label>
          </div>
          <button>search</button>
        </div>
      </div>
    );
  }
}
