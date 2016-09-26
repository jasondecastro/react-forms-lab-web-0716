const React = require('react');

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  updateMessage(e) {
    this.setState({message: e.target.value})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input value={this.state.message} onChange={this.updateMessage.bind(this)} type="text" />
        <h3>{this.props.maxChars - this.state.message.length}</h3>
        <h4>{this.props.maxChars}</h4>
      </div>
    );
  }
}

module.exports = TwitterMessage;
