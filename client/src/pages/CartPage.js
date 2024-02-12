import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useSelector, useDispatch } from "react-redux";
import {
  DeleteOutlined,
  PlusSquareOutlined,
  MinusSquareOutlined,
} from "@ant-design/icons";
import { Table } from "antd";

const CartPage = () => {
  const { cartItems } = useSelector((state) => state.rootReducer);

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

  return (
    <DefaultLayout>
      <h1>Cart Page</h1>
      <Table dataSource={cartItems} columns={coloums} bordered />
    </DefaultLayout>
  );
};

export default CartPage;
