import React from "react";

class SearchBar extends React.Component {
  state = { term: "" }; // term is the long url entered
  onInputChange = (e) => {
    // while typing the url it is set to state
    this.setState({ term: e.target.value });
  };
  onSearchSubmit = (e) => {
    e.preventDefault();

    if (this.state.term != "") {
      this.props.onSubmit(this.state.term);
    }
  };
  render() {
    return (
      <div>
        <div className="search-bar ui segment">
          <form onSubmit={this.onSearchSubmit} className="ui form">
            <div className="ui search">
              <div className="ui icon input" style={{ width: "100%" }}>
                <input
                  class="prompt"
                  type="text"
                  placeholder="Enter Url..."
                  value={this.state.term}
                  onChange={this.onInputChange}
                  title="Enter Url to Shorten"
                />
                <i className="search icon"></i>
              </div>
              <div className="results"></div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
