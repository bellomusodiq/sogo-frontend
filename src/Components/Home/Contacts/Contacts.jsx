import React from "react";
import "./Contacts.css";

const Contacts = () => {
  return (
    <div className="Contacts">
      <div className="ContactsLeft">
        <h1>Contact Us</h1>
        <p>
          We would love to know where you are from, your opinion about our
          ventures or whatever else you might want us to know. Send us a message
          today!
        </p>
      </div>
      <form className="ContactsRight">
        <p>Email</p>
        <input type="email" required className="Input" />
        <br />
        <br />
        <p>Message</p>
        <textarea name="" required id="" cols="30" rows="8"></textarea>
        <button>Send</button>
      </form>
    </div>
  );
};

export default Contacts;
