//Import React and ReactDOM libraries.
import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  //1
  componentWillMount() {
    console.log("component will mount");
  }
  //2
  componentDidMount() {
    console.log("component did mount");
    window.navigator.geolocation.getCurrentPosition(position => this.setState({ lat: position.coords.latitude }), err => this.setState({ errorMessage: err.message }));
  }
  //3
  componentDidUpdate() {
    console.log("component did update");
  }
  //4 - did not print
  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    } else if (this.state.lat && !this.state.errorMessage) {
      return (
        <div>
          <SeasonDisplay lat={this.state.lat} />
        </div>
      );
    } else {
      return (
        <div>
          <Spinner message="Please accept the location request" />
        </div>
      );
    }
  }
}

// Take react component and show it on screen.
ReactDOM.render(<App />, document.querySelector("#root"));
