import React from "react";
import { images as DEPARTMENTS } from "../../assets/images/departments/index";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

import { Button, Form, Input, Select } from "antd";
import { db } from "../../utils/firebase";
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};
const App = ({ imageUrl, isAdding, setIsAdding }) => (
  <Form
    onFinish={async (values) => {
      try {
        setIsAdding(true);
        const docRef = await addDoc(collection(db, "letters"), {
          ...values,
          avatar: imageUrl,
        });
        setIsAdding(false);
      } catch (error) {
        setIsAdding(false);
      }
    }}
    {...formItemLayout}
    variant="filled"
    style={{
      maxWidth: 600,
    }}
  >
    <Form.Item
      label="Tên đại biểu"
      name="ten"
      rules={[
        {
          required: true,
          message: "Tên của bạn sẽ hiện trên trang",
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="MSSV"
      name="mssv"
      rules={[
        {
          required: true,
          message: "Điền MSSV để được cộng ĐRL",
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="TextArea"
      name="letter"
      rules={[
        {
          required: true,
          message: "Nhớ ghi lời chúc nha!",
        },
      ]}
    >
      <Input.TextArea />
    </Form.Item>

    <Form.Item
      label="Khoa"
      name="khoa"
      rules={[
        {
          required: true,
          message: "Bạn đế từ khoa nào",
        },
      ]}
    >
      <Select
        options={DEPARTMENTS.map((department) => ({
          label: department.label,
          value: department.label,
        }))}
      />
    </Form.Item>
    <Form.Item
      wrapperCol={{
        offset: 6,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Gửi lời chúc
      </Button>
    </Form.Item>
  </Form>
);
export default App;
