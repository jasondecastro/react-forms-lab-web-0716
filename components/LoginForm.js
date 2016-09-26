const React = require('react');

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  formSubmit(e){
    e.preventDefault()
    let username = this.state.username
    let password = this.state.password
    if (username && password) {
      this.props.onSubmit()
    }

  }


  updatePassword(e) {
    this.setState({password: e.target.value})
  }

  updateUsername(e) {
    this.setState({username: e.target.value})
  }

  render() {
    return (
      <form onSubmit={this.formSubmit.bind(this)}>
        <div>
          <label>
            Username
            <input value={this.state.username} onChange={this.updateUsername.bind(this)} id="test-username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input value={this.state.password} onChange={this.updatePassword.bind(this)} id="test-password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

module.exports = LoginForm;
