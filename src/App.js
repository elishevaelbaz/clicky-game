import React from "react";
import FriendCard from "./components/FriendCard";
import Navbar from "./components/Navbar/Navbar.js";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component{
  state = {
    friends,
    score: 0,
    highScore: 0,
    message: "Click an image to begin"
  };

  // when the component updates
  // (done this way because setState is asynch)
  componentDidUpdate() {
    // if there is a new highscore, update the score
    if (this.state.score > this.state.highScore)
      {
        this.setState({
        highScore: this.state.score
        });
      }
    }


// when user clicks on a card
  cardClick = (id) => {
    
    console.log(id)

    // find the index of the clicked item based on its id
    const index = friends.findIndex(item => item.id == id)

    // if its already been clicked
    if (friends[index].clicked == true){
      //you guessed incorrectly
      
      this.setState({
        score: 0,
        message: "You chose incorrectly"
      });
      
      //set them all back to false
      friends.map(friend => friend.clicked = false)

    }

    else{
    // set its clicked property to true
      friends[index].clicked = true;

      console.log(friends[index])

      this.setState({
        score: this.state.score + 1,
        message: "You chose correctly"
      });

      console.log("score: " + this.state.score)
      console.log("highscore: " + this.state.highScore)
    
    }
    

    // no matter what (if already been clicked or not)- 
    // shuffle the friends
    const shuffled = friends.sort(() => Math.random() - 0.5)

    // set the state of friends to the new friends array (with the clicked as true) and shuffled
    this.setState({
      friends: shuffled 
    });

    // this.displayMessage
    
  }




  render (){
    return (
    
      <div className="row">
      <h2>Click on an image to earn points, but remember what you've already clicked. Click on image twice and you lose!</h2>
    
      
    <Wrapper>
      <Navbar score={this.state.score} highScore={this.state.highScore} message={this.state.message}></Navbar>
    

    {(this.state.friends).map(friend =>{
    return <FriendCard 
      key={friend.id} 
      id={friend.id} 
      name={friend.name} 
      image={friend.image} 
      occupation={friend.occupation} 
      location={friend.location} 
      cardClick ={this.cardClick}
      // will be true if they lost, but not when the page first loads up
      shake = {this.state.score === 0 && this.state.highScore !== 0}
      


      />
      })
    }

    </Wrapper>
    </div>
  );
  }
} 


export default App;
