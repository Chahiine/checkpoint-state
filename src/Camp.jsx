import React, { Component } from "react";
class Camp extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "Chahine Sassi",
      bio: "A software developer",
      imgSrc: "/chahine.jpg",
      profession: "Student",
      count: 0,
      interval: null,
    };
  }
  render() {
    return (
      <div className="card">
        <img src={this.state.imgSrc} alt={this.state.imgSrc} />
        <h2>{this.state.fullName}</h2>
        <p>Bio: {this.state.bio}</p>
        <p>Profession: {this.state.profession}</p>
        <p>Time since last mounted: {this.state.count} seconds</p>
      </div>
    );
  }

  //  Implement componentDidMount
  componentDidMount() {
    // Start a timer to update timeSinceMounted every second
    setInterval(() => {
      this.setState({
        count: this.state.count + 1,
      });
    }, 1000);
  }

  componentDidUpdate() {
    setInterval(console.log("ok"), 1000);
  }
  //  componentWillUnmount
  componentWillUnmount() {
    // Stop the timer when component unmounts
    clearInterval(this.interval);
  }
}

export default Camp;
