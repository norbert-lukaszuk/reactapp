import React from "react";

function TodoItem(props){
    return(
        <div className="todoItem">
            <input onChange={()=> props.handleChange(props.id)} type="checkbox" checked={props.completed} />
             <span className="spanItem" style={props.completed?{color: "gray", textDecoration: "line-through"}:{color:"blue"}}>{props.text}</span>
             <hr />
        </div>

    )
}
export default TodoItem;