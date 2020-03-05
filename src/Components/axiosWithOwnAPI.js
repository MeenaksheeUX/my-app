import React from "react";
import axios from "axios";

class AxiosWithOwnAPI extends React.Component {
  state = {
    posts: [],
    isLoading: true,
    errors: null
  };

  getPosts() {
    axios
      .get("https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/posts.json")
      .then(response => {
        this.setState({
          posts: response.data.posts,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.getPosts();
  }

  render() {
    const { isLoading, posts } = this.state;
    return (
      <React.Fragment>
        <h1>Using axios with your own API</h1>
        <div>
          {!isLoading ? (
            posts.map(post => {
              const { _id, title, content } = post;
              return (
                <div key={_id}>
                  <h2>{title}</h2>
                  <p>{content}</p>
                  <hr />
                </div>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default AxiosWithOwnAPI;
