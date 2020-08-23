import React from 'react';
import { connect } from 'react-redux';
import { Container, Card, TextInput, Button } from '../../components';
import { login } from '../../actions';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
  }

  handleInputs = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
  }

  render() {
    if (this.props.redirectTo) {
      return <Redirect to={this.props.redirectTo} />
    }
    return (
      <Container className="flex items-center h-screen max-w-full p-2">
        <Card className="flex flex-col w-full max-w-sm p-4 mx-auto mb-16">
          <h2 className="mb-4 font-semibold">Login</h2>
          <form className="flex flex-col" onSubmit={this.onSubmit}>
            <label>Username</label>
            <TextInput
              className="w-full"
              name="username"
              value={this.state.username}
              onChange={this.handleInputs}
            />
            <label>Password</label>
            <TextInput
              type="password"
              className="w-full"
              name="password"
              value={this.state.password}
              onChange={this.handleInputs}
            />
            <Button className="w-full my-2" type="sumbit" color="primary">
              Login
            </Button>
          </form>
          <div className="text-gray-500">
            Don't have an account? <a className="text-secondary-500" href="/#/register">Create an account</a>
          </div>
        </Card>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    redirectTo: state.auth.redirectTo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => dispatch(login(username, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
