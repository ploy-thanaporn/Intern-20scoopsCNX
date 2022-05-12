import React from "react";

class Image extends React.Component {
  constructor() {
    super();

    this.state = {};

    this.fallback = () => {
      if (this.props.fallbackSrc) {
        this.setState({ failed: true });
      }
    };
  }
  render() {
    if (this.state.failed) {
      return <img src={this.props.fallbackSrc} alt="" />;
    } else {
      return <img src={this.props.src} onError={this.fallback} alt="" />;
    }
  }
}
export default Image;
