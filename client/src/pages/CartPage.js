import React, { useState, useEffect } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useSelector, useDispatch } from "react-redux";
import {
  DeleteOutlined,
  PlusSquareOutlined,
  MinusSquareOutlined,
} from "@ant-design/icons";
import { Button, Table, Modal, message } from "antd";

const CartPage = () => {
  const { cartItems } = useSelector((state) => state.rootReducer);
  const [subTotal, setSubTotal] = useState(0);
  const [billPopUp, setBillPopUp] = useState(false);
  const dispatch = useDispatch();
  const handleIncrement = (record) => {
    dispatch({
      type: "UPDATE_CART",
      payload: { ...record, quantity: record.quantity + 1 },
    });
  };
  const handleDecrement = (record) => {
    if (record.quantity !== 1) {
      dispatch({
        type: "UPDATE_CART",
        payload: { ...record, quantity: record.quantity - 1 },
      });
    }
  };
  const coloums = [
    { title: "Name", dataIndex: "name" },
    {
      title: "Image",
      dataIndex: "image",
      render: (image, record) => (
        <img src={image} alt={record.name} height="60" width="60" />
      ),
    },
    { title: "Price", dataIndex: "price" },
    {
      title: "Quantity",
      dataIndex: "_id",
      render: (id, record) => (
        <div>
          <MinusSquareOutlined
            className="mx-2"
            style={{ cursor: "pointer" }}
            onClick={() => handleDecrement(record)}
          />
          <b>{record.quantity}</b>
          <PlusSquareOutlined
            className="mx-2"
            style={{ cursor: "pointer" }}
            onClick={() => handleIncrement(record)}
          />
        </div>
      ),
    },
    {
      title: "Actions",
      dataIndex: "_id",
      render: (id, record) => (
        <DeleteOutlined
          style={{ cursor: "pointer" }}
          onClick={() =>
            dispatch({
              type: "DELETE_FROM_CART",
              payload: record,
            })
          }
        />
      ),
    },
  ];

  useEffect(() => {
    let temp = 0;
    cartItems.forEach((item) => (temp += item.price * item.quantity));
    setSubTotal(temp);
  }, [cartItems]);

  return (
    <DefaultLayout>
      <h1>Cart Page</h1>
      <Table dataSource={cartItems} columns={coloums} bordered />
      <div className="d-flex flex-column align-items-end">
        <hr />
        <h3>
          Sub Total: <span>&#8377;</span>
          <b>{subTotal}</b>{" "}
        </h3>
        <Button type="primary" onClick={() => setBillPopUp(true)}>
          Create Invoice
        </Button>
      </div>
      <Modal
        open={billPopUp}
        onCancel={() => {
          setBillPopUp(false);
        }}
        footer={false}
      >
        <p>Invoice Modal</p>
      </Modal>
    </DefaultLayout>
  );
};

export default CartPage;
