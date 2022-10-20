import React from "react";
import './styles.css';
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import Card from './components/Card';
import Contact from "./components/Contact";
import data from './data';
import contacts from './contacts-data';

export default class App extends React.Component {

  render() {

    const cards = data.map((item) => {
      return (
        <Card
          key={item.id}
          item={item} />
      );
    });

    const contactCards = contacts.map(contact => {
      return (
        <Contact
          key={contact.id}
          img={contact.image}
          name={contact.name}
          phone={contact.phone}
          email={contact.email} />
      );
    });

    return (
      <div className="container">
        <Navbar />

        <Hero />

        {/* ALL CARDS  */}
        <div className="card-contents">
          {cards}
        </div>

        <div className="content">
          { contactCards }
        </div>

      </div>
    );
  }
}