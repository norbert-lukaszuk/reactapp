import React, { useState } from "react";

const Joke = () => {
  function getJoke() {
    const joke = fetch(
      "https://geek-jokes.sameerkumar.website/api"
    ).then((resp) => resp.json());

    console.log(joke);
  }
  return (
    <>
      <p>Joke hahah</p>
      <button onClick={getJoke}>Get another geek joke !</button>
    </>
  );
};

export default Joke;
