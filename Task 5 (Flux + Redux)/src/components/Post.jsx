import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/postActions';

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentWillMount() {
    this.props.fetchPost();
  }

  render() {
    const postItems = this.state.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
      </div>
    ));
    return (
      <div>
        <h1>POST</h1>
        {postItems}
      </div>
    );
  }
}


export default connect(null, { fetchPost })(Posts);
