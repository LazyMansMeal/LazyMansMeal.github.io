import React from 'react';
import { Container, Card, TextInput, Button } from '../../components';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
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
    console.log(this.state);
  }

  render() {
    return (
      <Container className="max-w-full h-screen flex items-center p-2">
        <Card className="w-full max-w-sm mx-auto flex flex-col p-4 mb-16">
          <h2 className="mb-4">Register</h2>
          <form className="flex flex-col" onSubmit={this.onSubmit}>
            <label>Full Name</label>
            <TextInput
              className="w-full"
              name="fullName"
              value={this.state.fullName}
              onChange={this.handleInputs}
            />
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
            <Button className="w-full my-2" type="sumbit" color="primary">Register</Button>
          </form>
          <div className="text-gray-500">
            Already have an account? <a className="text-secondary-500" href="/#/login">Sign in</a>
          </div>
        </Card>
      </Container>
    );
  }
}

export default Register;
