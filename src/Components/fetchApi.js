import React from "react";
import axios from "axios";

const { useState } = React;

const Card = props => {
  return (
    <div style={{ margin: "1em" }}>
      <img alt="avatar" style={{ width: "70px" }} src={props.avatar_url} />
      <div>
        <div style={{ fontWeight: "bold" }}>{props.name}</div>
        <div>{props.blog}</div>
      </div>
    </div>
  );
};

const CardList = props => (
  <div>
    {props.cards.map(card => (
      <Card {...card} />
    ))}
  </div>
);

const Form = props => {
  const [username, setUsername] = useState("");
  const handleSubmit = event => {
    event.preventDefault();

    axios.get(`https://api.github.com/users/${username}`).then(resp => {
      props.onSubmit(resp.data);
      setUsername("");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={event => setUsername(event.target.value)}
        placeholder="GitHub username"
        required
      />
      <button type="submit">Add card</button>
    </form>
  );
};

const FetchApi = () => {
  const [cards, setCards] = useState([]);

  const addNewCard = cardInfo => {
    setCards(cards.concat(cardInfo));
  };

  return (
    <div>
      {/* https://flaviocopes.com/react-example-githubusers/ */}
      <h1>Fetch GitHub Users Information Via API</h1>
      <Form onSubmit={addNewCard} />
      <CardList cards={cards} />
    </div>
  );
};

export default FetchApi;
