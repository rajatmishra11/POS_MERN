import React from "react";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = (value) => {
    console.log(value);
  };
  return (
    <div className="register d-flex ">
      <h3>Login Here</h3>
      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item name="userID" label="User ID">
          <Input />
        </Form.Item>
        <Form.Item name="password" label="Password">
          <Input type="password" />
        </Form.Item>
        <div className="d-flex justify-content-between">
          <p>
            Already Registered
            <Link to="/register"> Register Here!</Link>
          </p>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
