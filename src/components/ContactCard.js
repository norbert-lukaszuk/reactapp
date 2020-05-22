import React from 'react';
// This way we passing props as separate values
function ContactCard(props){
    return(
        <div className="contact-card">
            <img src={props.imgUrl} alt=""/>
            <h3>{props.name}</h3>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
        </div>
    )
}

export default ContactCard;