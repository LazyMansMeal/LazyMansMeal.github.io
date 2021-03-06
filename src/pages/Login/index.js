import React from 'react';
import { Container, Card, TextInput, Button } from '../../components';

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
    console.log(this.state.username, this.state.password);
  }

  render() {
    return (
      <Container className="max-w-full h-screen flex items-center p-2">
        <Card className="w-full max-w-sm mx-auto flex flex-col p-4 mb-16">
          <h2 className="font-semibold mb-4">Login</h2>
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

export default Login;
