import React from "react";
import ContactCard from './components/ContactCard';
import ContactCardObj from './components/ContactCardObj';

function App() {
  return (
    <div className="Contacts">
      <h1>Contact Cards</h1>
{/* This way props are passed as seperate properties */}
      <ContactCard 
      name="Mr. Whiskerson" 
      imgUrl="http://placekitten.com/300/200" 
      phone="989554546" 
      email="78979@wp.pl" />
{/* This way props are passed as an object like JSON or such */}
      <ContactCardObj 
      contact={{name: "Destroyer", imgUrl: "http://placekitten.com/400/300", phone: "(212) 555-3456", email: "ofworlds@yahoo.com"}}
      />
    </div>
  );
}

export default App;
