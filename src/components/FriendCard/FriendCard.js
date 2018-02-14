import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className={props.shake == true ? "shake card" : "card"}>
    <div className="img-container" onClick={() => props.cardClick(props.id)}>
      <img alt={props.name} src={props.image} />
    </div>
    
  </div>
);

export default FriendCard;
