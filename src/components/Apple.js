import React from "react";

class Apple extends React.Component {
  render() {
    const { appleInfo } = this.props;
    const { color, type } = appleInfo;
    return (
      <h2>
        Im an {color} {type} apple!
      </h2>
    );
  }
}

export default Apple;
