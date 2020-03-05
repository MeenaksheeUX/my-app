import React from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/posts.json"
});

class AxiosAsyncAwaitWithOwnAPI extends React.Component {
  state = {
    posts: [],
    isLoading: true,
    errors: null
  };

  async getPosts() {
    const response = await api.get();
    try {
      this.setState({
        posts: response.data.posts,
        isLoading: false
      });
    } catch (error) {
      this.setState({ error, isLoading: false });
    }
  }

  componentDidMount() {
    this.getPosts();
  }

  render() {
    const { isLoading, posts } = this.state;
    return (
      <React.Fragment>
        <h1>Using axios with async and await in your own API</h1>
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

export default AxiosAsyncAwaitWithOwnAPI;
