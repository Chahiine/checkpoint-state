import React, { Component } from "react";
import "./App.css";
class App extends Component {
  //  State with person object and show boolean
  state = {
    person: {
      fullName: "Chahine Sassi",
      bio: "A software developer",
      imgSrc: "/chahine.jpg",
      profession: "Student",
    },
    show: false,
    intervalId: null,
    timeSinceMounted: 0,
  };

  //  Implement componentDidMount
  componentDidMount() {
    // Start a timer to update timeSinceMounted every second
    this.setState({
      intervalId: setInterval(this.updateTimeSinceMounted, 1000),
    });
  }
  //  componentWillUnmount
  componentWillUnmount() {
    // Stop the timer when component unmounts
    clearInterval(this.intervalId);
  }

  //  Update timeSinceMounted every second
  updateTimeSinceMounted = () => {
    this.setState({ timeSinceMounted: this.state.timeSinceMounted + 1 });
  };

  //  Toggle show state
  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, timeSinceMounted } = this.state;

    return (
      <div className="app">
        <h1>My Profile</h1>
        {/*  Conditionally render person's profile based on show state */}
        <div className="profile">
          {show && (
            <div className="card">
              <img src={imgSrc} alt={fullName} />
              <h2>{fullName}</h2>
              <p>Bio: {bio}</p>
              <p>Profession: {profession}</p>
            </div>
          )}
          {/* Add button to toggle show state */}
          <button onClick={this.toggleShow}>
            {show ? "Hide" : "Show"} Profile
          </button>
        </div>

        {/*  Display timeSinceMounted */}
        <p>Time since last mounted: {timeSinceMounted} seconds</p>
      </div>
    );
  }
}

export default App;
