import React from "react";
const RemoveAllFriends = props => (
  <button className="btn btn-danger" onClick={() => props.removeAllFriends()}>Remove All</button>
);
export default RemoveAllFriends;