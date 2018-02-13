import React from "react";

// By extending the React.Component class, Counter inherits functionality from it
class Navbar extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    count: 0
  };

  // handleIncrement increases this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state

    this.setState({ count: this.state.count + 1 });
  };

  // handleDecrement decreases this.state.count by 1
  handleReset = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: 0 });
  };

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <nav className="navbar">
        
        
          Score: {this.state.score}
          <button className="btn btn-primary" onClick={this.handleIncrement}>
            Increment
          </button>{" "}
          <button className="btn btn-danger" onClick={this.handleReset}>
            Reset
          </button>
        
      </nav>
    );
  }
}

export default Navbar;