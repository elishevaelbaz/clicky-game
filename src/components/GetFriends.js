import React from "react";
const GetFriends = props => (
  <button className="btn btn-success" onClick={() => props.getFriends()}>Give Me My Friends Back</button>
);
export default GetFriends;