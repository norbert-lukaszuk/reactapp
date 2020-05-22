import React from "react";

function Joke(props){
    const style = {
        fontSize: "1.5rem",
        padding: "15px",
        margin: 0
    }
    return(
        <div className="jokeComponent">
            <p style={style}>q: {props.joke.question}</p>
            <p style={style}>a: {props.joke.punchLine}</p>
        </div>
    )
}

export default  Joke;