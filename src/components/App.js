import React from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import axios from "axios";
import ResultDisplay from "./ResultDisplay";
import $ from "jquery";

class App extends React.Component {
  state = { shortUrl: "", err: false, loading: true };
  onSearchSubmit = async (longUrl) => {
    try {
      const token = "a872593c06d18cf69f4c93c019a4493f7395ff0a"; // token created from bit.ly
      let headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      const api_url = "https://api-ssl.bitly.com/v4/shorten";

      const response = await axios.post(
        api_url,
        { long_url: longUrl },
        {
          headers: headers,
        }
      );
      //set result values
      this.setState({
        shortUrl: response.data.link,
        err: false,
        loading: false,
      });
    } catch (err) {
      // if error or incorrect url provided
      this.setState({ err: true, loading: false });
    }
  };
  componentDidMount() {
    // initialised after render
    // setup the light theme on click
    $("#lightThemeButton")
      .off("click")
      .on("click", () => {
        $("body").addClass("light-background ").removeClass("dark-background");
        $("#webPageHeader").removeClass("color-white").addClass("color-dark");
        $(".resultDiv").removeClass("color-white").addClass("color-dark");
      });
    //setup Dark theme on click
    $("#darkThemeButton")
      .off("click")
      .on("click", () => {
        $("body").addClass("dark-background").removeClass("light-background ");
        $("#webPageHeader").addClass("color-white").removeClass("color-dark");
        $(".resultDiv").addClass("color-white").removeClass("color-dark");
      });
    // default load light theme
    $("#lightThemeButton").click();
    //$("#darkThemeButton").click(); // use this to default load dark theme
  }
  render() {
    return (
      <div style={{ paddingTop: "20px" }}>
        <div class="ui buttons" style={{ position: "absolute", right: "15px" }}>
          <button id="lightThemeButton" class="ui button">
            Light
          </button>
          <div class="or"></div>
          <button
            id="darkThemeButton"
            class="ui positive button"
            style={{ background: "#000" }}
          >
            Dark
          </button>
        </div>
        <h2 className="ui center aligned icon header" id="webPageHeader">
          <i className="fa fa-link" style={{ marginRight: "20px" }}></i>
          Url Shortener
        </h2>

        <div className="ui container">
          <SearchBar
            onSubmit={this.onSearchSubmit}
            style={{ marginTop: "20px" }}
          />
          <ResultDisplay
            shortUrl={this.state.shortUrl}
            err={this.state.err}
            loading={this.state.loading}
          />
        </div>
      </div>
    );
  }
}

export default App;
