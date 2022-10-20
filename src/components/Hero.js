
import React from "react";

export default class Hero extends React.Component {

    render() {
        return (
            <section className="hero">
                <img className="hero--image" src="../images/photo-grid.png" alt="" />
                <h1 className="hero--header">Online Experiences</h1>
                <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </section>
        );
    }
}