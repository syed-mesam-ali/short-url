import React from "react";

class ResultDisplay extends React.Component {
  render() {
    if (this.props.loading) {
      // on default load screen
      return (
        <div
          className="resultDiv"
          style={{ textAlign: "center", paddingTop: "20px" }}
        >
          <h3>Enter an Url and hit Enter to Shorten</h3>
        </div>
      );
    }
    if (this.props.err) {
      // while error encounters
      return (
        <div
          style={{ textAlign: "center", paddingTop: "20px", color: "#ee3780" }}
        >
          <h3> Incorrect Url Entered! Please Check and try again.</h3>
        </div>
      );
    }
    // show the result
    return (
      <div style={{ textAlign: "center", paddingTop: "20px" }}>
        <h1>
          <span className="resultDiv">Result: </span>
          <a
            className="linkTagResult"
            title="Click on the link to Redirect"
            href={this.props.shortUrl}
            target="_blank"
          >
            {this.props.shortUrl}
          </a>
        </h1>
      </div>
    );
  }
}

export default ResultDisplay;
