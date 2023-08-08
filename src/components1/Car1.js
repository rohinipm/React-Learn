import React from "react";

class Car1 extends React.Component {
  constructor() {
    super();
    this.state = { color: "Red", model: "Ford" };
  }
  render() {
    return (
      <>
        <h1>
          My car color is {this.state.color} and the model is {this.state.model}
        </h1>
        <button
          onClick={() => {
            this.setState((previousState) => {
              return { ...previousState, color: "Blue" };
            });
          }}
        >
          Change Color
        </button>
      </>
    );
  }
}
export default Car1;
