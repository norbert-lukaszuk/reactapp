import React from "react";

function TodoItem(props){
    return(
        <div>
            <input onChange={()=> props.handleChange(props.id)} type="checkbox" checked={props.completed} />
             <span>{props.text}</span>
             <hr />
        </div>

    )
}
export default TodoItem;