import React, { useEffect, useState } from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { images as DEPARTMENTS } from "../../assets/images/departments";
import { Avatar, Card } from "antd";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../utils/firebase";
const { Meta } = Card;
const App = ({ data }) => {
  const getDepartmentName = (id) => {
    const department = DEPARTMENTS.find((item) => item.id === id);
    return department ? department.label : "Đại biểu";
  };
  const [imageURL, setImageURL] = useState(null);
  useEffect(() => {
    const imageRef = ref(storage, data?.avatar);
    getDownloadURL(imageRef).then((url) => {
      setImageURL(url);
    });
  }, []);
  return (
    <Card
      className=""
      style={{
        width: 300,
      }}
      cover={<img alt="example" src={imageURL} />}
    >
      <Meta
        // avatar={
        //   <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
        // }
        title={
          <p>
            <span>{data.ten || "Ten"}</span>
            <br />
            <span>Đơn vị: {getDepartmentName(data.khoa)}</span>
          </p>
        }
        description={data.letter}
      />
    </Card>
  );
};
export default App;
