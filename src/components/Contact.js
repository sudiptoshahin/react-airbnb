
import React from "react";
import './../styles.css';

export default class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.name = this.props.name;
        this.img = this.props.img;
        this.phone = this.props.phone;
        this.email = this.props.email;
    }

    render() {
        return (
            <div className="contact-card">
                <img className="contact-card--img" src={ `../images/${this.img}` } alt={this.img} srcset="" />
                <h3>{ this.name }</h3>
                <div className="info-group">
                    <i class="fa-solid fa-phone"></i>
                    <p>{ this.phone }</p>
                </div>
                <div className="info-group">
                    <i class="fa-solid fa-envelope"></i>
                    <p>{ this.email }</p>
                </div>
            </div>
        );
    }
}