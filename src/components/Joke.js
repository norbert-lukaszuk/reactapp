import React, { useState } from "react";

const Joke = () => {
  const [joke, setJoke] = useState("");

  function getJoke() {
    const joke = fetch("https://geek-jokes.sameerkumar.website/api")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setJoke((prevJoke) => (prevJoke = data));
      });
  }
  return (
    <div className="joke__paragraph">
      <p>{joke}</p>
      <button onClick={getJoke}>Get another geek joke !</button>
    </div>
  );
};

export default Joke;
