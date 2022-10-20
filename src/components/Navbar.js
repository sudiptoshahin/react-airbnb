import React from 'react';
import brand from './../airbnb_logo.svg';
import './../styles.css';

export default class Navbar extends React.Component {

    render() {
        return (
            <nav>
                <img className="nav--logo" src={brand} alt="" />
            </nav>
        );
    }
}