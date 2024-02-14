import React from "react";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";

const Register = () => {
  const handleSubmit = (value) => {
    console.log(value);
  };
  return (
    <div  className="register d-flex ">
      <h3>New User</h3>
      <Form  layout="vertical" onFinish={handleSubmit}>
        <Form.Item name="Name" label="Username">
          <Input />
        </Form.Item>
        <Form.Item name="userID" label="User ID">
          <Input  />
        </Form.Item>
        <Form.Item name="password" label="Password">
          <Input type="password" />
        </Form.Item>
        <div className="d-flex justify-content-between">
          <p>
            Already Registered  
            <Link to="/login"> Login Here!</Link>
          </p>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Register;
