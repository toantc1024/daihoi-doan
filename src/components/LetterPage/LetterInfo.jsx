import React from "react";
import { images as DEPARTMENTS } from "../../assets/images/departments/index";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

import { Button, Form, Input, Select } from "antd";
import { db } from "../../utils/firebase";
import { toast } from "react-toastify";
import Letter from "../global/Letter";
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
  <div className="flex flex-col">
    <div className="w-full  ">
      <Form
        onFinish={async (values) => {
          let uploadPromise = new Promise(async (resolve, reject) => {
            try {
              setIsAdding(true);
              const docRef = await addDoc(collection(db, "letters"), {
                ...values,
                avatar: imageUrl,
              });
              resolve(true);
              setIsAdding(false);
            } catch (error) {
              reject(error);
              setIsAdding(false);
            }
          });
          toast.promise(
            uploadPromise,
            {
              pending: "Đang tải lên 🕐",
              success: {
                render() {
                  // navigate("/home");
                  return `Yeah! Xong rồi nè 🎉🎉🎉`;
                },
                icon: "👋",
              },

              error: {
                render({ data }) {
                  return `Lỗi ời, bạn quay lại sau nha!`;
                },
                icon: "😥",
              },
            },
            {
              position: "bottom-right",
            }
          );
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
          label="Lời chúc"
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
    </div>
  </div>
);
export default App;
