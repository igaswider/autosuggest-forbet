import React, { Component } from "react";
import Loader from './Loader'

const categories = ["sportName", "categoryName", "eventName"];

class AutoSuggest extends Component {
  state = {
    inputValue: "",
    cats: []
  };

  handleInputChange(event) {
    this.setState(
      {
        inputValue: event.target.value
      },
      () => {
        const { events } = this.props

        events.forEach(keys => {
          categories.forEach(element => {
            if (
              keys[element]
                .toLowerCase()
                .indexOf(this.state.inputValue.toLowerCase()) !== -1
            ) {
              this.state.cats.push(keys[element]);
            }
          });
        });
      }
    );
  }

  renderSuggestions = () => {

    return this.state.cats.map((el, index) => {
      return (
          <li key={index}>{el}</li>
      )
    })
  }

  renderContent = () => {
    if(this.state.cats.length > 0) {
      return this.renderSuggestions()
    }
   return <Loader/>
  }

  render() {

    return (
      <div className="search">
        <input
          type="text"
          value={this.state.inputValue}
          onChange={event => this.handleInputChange(event)}
        />
        <button>
          search
        </button>
        <ul>{this.renderContent()}</ul>
      </div>
    );
  }
}

export default AutoSuggest;
