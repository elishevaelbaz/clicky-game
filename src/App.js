import React from "react";
import FriendCard from "./components/FriendCard";
import RemoveAllFriends from "./components/RemoveAllFriends";
import GetFriends from "./components/GetFriends";
import Navbar from "./components/Navbar/Navbar.js";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component{
  state = {
    friends,
    score: 0,
    highScore: 0
  };


  cardClick = (id) => {
    
    console.log(id)

    const index = friends.findIndex(item => item.id == id)

    friends[index].clicked = true;

    console.log(friends[index])

    this.setState({
      friends
    });


    const shuffled = friends.sort(() => Math.random() - 0.5)

    this.setState({
      friends: shuffled,
      score: this.state.score + 1 
    });

    if (this.state.score < this.state.highScore)
    {
      this.setState({
      highScore: this.state.score
      });
    }
    
  }



render (){
  return (
    
    <div className="row">
    <h1 className="title">Friends List</h1>
    <Navbar/>
  <Wrapper>
    Score: {this.state.score}
    


    {(this.state.friends).map(friend =>{
  return <FriendCard 
          key={friend.id} 
          id={friend.id} 
          name={friend.name} 
          image={friend.image} 
          occupation={friend.occupation} 
          location={friend.location} 
         
          cardClick ={this.cardClick}

          />
  })
}

  </Wrapper>
  </div>
);
}

} 


export default App;
