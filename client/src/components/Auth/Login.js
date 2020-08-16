import React from 'react';
import { Drawer, Form, Button, Input } from 'antd';

import './Login.css';

class Login extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <button className="login" onClick={this.showDrawer}>
          Login
        </button>
        <Drawer
          title="Login"
          width={500}
          onClose={this.onClose}
          visible={this.state.visible}
          bodyStyle={{ paddingBottom: 50 }}
        >
          <Form className="login-form" layout="vertical" hideRequiredMark>
            <h1>Student</h1>
            <hr/>
                <Form.Item
                  name="name"
                  rules={[{ required: true, message: 'Please enter Email' }]}
                >
                  <Input placeholder="Email" />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[{ required: true, message: 'Please enter your password' }]}
                >
                  <Input placeholder="Password" />
                </Form.Item>
                <a href="/">Forget your Password</a>
                <button>Submit</button>
                <a href="/">Register here</a>
          </Form>
        </Drawer>
      </>
    );
  }
}

export default Login
