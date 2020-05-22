import React from 'react';
// This show the way to pass props into component using object like JSON
function ContactCardObj(props){
    
    return(
        <div className="contact-card">
            <div className="contact-card">
            <img src={props.contact.imgUrl} alt=""/>
            <h3>{props.contact.name}</h3>
            <p>Phone: {props.contact.phone}</p>
            <p>Email: {props.contact.email}</p>
        </div>
        </div>
    )

}
export default ContactCardObj;