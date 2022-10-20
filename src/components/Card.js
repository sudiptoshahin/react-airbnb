import React from "react";

export default class Card extends React.Component {

    constructor(props) {
        super(props);
        this.item = this.props.item;
        this.badgeText = "";
    }

    render() {

        if(this.item.openSpots === 0) {
            this.badgeText = "SOLD OUT";
        } else if(this.item.location === "Online") {
            this.badgeText = "ONLINE";
        }

        return (
            <div className="card">
                { this.badgeText && <div className="card-badge">{ this.badgeText }</div> }
                <img className="card--image" src={ `../images/${this.item.coverImg}` } alt={ this.item.img } />
                <div className="card-stats">
                    <img src="../images/star.png" alt="" />
                    <span>{ this.item.status.rating }</span>
                    <span className="grey">({ this.item.status.reviewCount }) . </span>
                    <span className="grey">{ this.item.location }</span>
                </div>
                <p>{ this.item.title }</p>
                <p><span className="bold">From ${ this.item.price }</span> / person</p>
            </div>
        );
    }
}