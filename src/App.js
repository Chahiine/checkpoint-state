import React, { Component } from "react";
import Camp from "./Camp";
import "./App.css";
class App extends Component {
  //  State with person object and show boolean
  constructor() {
    super();
    this.state = {
      fullName: "Chahine Sassi",
      bio: "A software developer",
      imgSrc: "/chahine.jpg",
      profession: "Student",
      count: 0,
      interval: null,
      show: false,
    };
  }

  // //  Update timeSinceMounted every second
  // updateTimeSinceMounted = () => {
  //   this.setState({ timeSinceMounted: this.state.timeSinceMounted + 1 });
  // };

  //  Toggle show state
  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    const { fullName, bio, imgSrc, profession, count, interval, show } =
      this.state;

    return (
      <div className="app">
        <h1>My Profile</h1>
        {/*  Conditionally render person's profile based on show state */}
        <div className="profile">
          {/* Add button to toggle show state */}
          <button onClick={this.toggleShow}>
            {show ? "Hide" : "Show"} Profile
          </button>
          {show && <Camp />}
        </div>

        {/*  Display timeSinceMounted */}
      </div>
    );
  }
}

export default App;
