import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  changeHandler = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <div>Characters Left: {280 - this.state.message.length}</div>
        <input onChange={this.changeHandler} type="text" name="message" id="message" value={this.state.message} />
      </div>
    );
  }
}

export default TwitterMessage;
