import React, { Component } from "react";
import "./App.css";
import AutoSuggest from "./components/AutoSuggest";
import axios from "axios";

class App extends Component {
  state = {
    events: []
  };

  componentDidMount() {
    axios
      .get(
        "https://www.iforbet.pl/BettingServices/LiveBettingServlet?action=getUpcomingLiveEvents&lang=PL&boundaryTime=5&_=1525774297492"
      )
      .then(response => {
        console.log(response);
        this.setState({
          events: response.data.events
        });
      })
      .catch(error => {
        console.log("error");
      });
  }

  render() {
    return (
      <AutoSuggest
        events={this.state.events}
      />
    );
  }
}

export default App;
