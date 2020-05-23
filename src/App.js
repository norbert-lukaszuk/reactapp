import React from "react";
import Joke from "./components/Joke";
import jokesData from "./components/jokesData";
console.log(jokesData);

function App() {
  const jokesArray = jokesData.map((joke) => (
    <Joke question={joke.question} punchLine={joke.punchLine} key={joke.id} />
  ));
  console.log("App -> jokesArray", jokesArray);
  return (
    <div>
      <h1 className="mainHeader">Joke App</h1>
      {jokesArray}
      <Joke
        joke={{
          question:
            "What's the difference between a married man and a bachelor?",
          punchLine:
            "A bachelor will go to the fridge, sees nothing he wants, and go to bed A married man will go the bed...",
        }}
      />
      <Joke
        joke={{
          question:
            "What's the difference between an epileptic oyster shucker and a hooker with diarrhea?",
          punchLine: "One shucks between fits",
        }}
      />
      <Joke
        joke={{
          question: "Do you like fish sticks?",
          punchLine: "Well then, you're a gay fish.",
        }}
      />
      <Joke
        joke={{
          question: "What is a pirate's worst nightmare?",
          punchLine: "A sunken chest with no booty.",
        }}
      />
      <Joke
        joke={{
          question: "What is statistically three times worse than a war?",
          punchLine: "Three wars",
        }}
      />
    </div>
  );
}

export default App;
