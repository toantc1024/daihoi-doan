import React, { useEffect } from "react";
import { Avatar, Card, Carousel } from "antd";
import { getDownloadURL, getMetadata, getStorage, ref } from "firebase/storage";
import { storage } from "../../utils/firebase";
const contentStyle = {
  margin: 0,
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const App = ({ data }) => {
  const [imageURL, setImageURL] = React.useState(null);
  useEffect(() => {
    const imageRef = ref(storage, data.avatar);
    getDownloadURL(imageRef).then((url) => {
      setImageURL(url);
    });
  }, []);
  return (
    <>
      <div className="flex p-4 bg-white  items-center justify-center">
        <div className="p-2 bg-[#1977bc] shadow-md  flex  items-center flex-col md:flex-row md:justify-center  gap-4 py-8 rounded-xl w-full">
          <div className="bg-white p-2 rounded-full">
            <Avatar
              src={<img src={imageURL} alt="avatar" />}
              // size={{
              // }}
              size={{
                xs: 128,
                sm: 128,
                md: 128,
                lg: 256,
                xl: 256,
                xxl: 256,
              }}
            />
          </div>
          <div className="p-4 h-[200px] flex flex-col md:h-[250px] rounded-xl bg-white relative w-full md:w-[400px] ">
            <div className="flex flex-col text-sm md:text-lg justify-center  px-4 font-bold">
              <span>{`Đại biểu: ${data.ten || "Đại biểu"}`}</span>
              <span>{`Khoa: ${data.khoa || "Đại biểu"}`}</span>
            </div>

            <div className="p-2  text-sm md:text-lg overflow-auto ">
              <div className="overflow-auto">{data.letter || "Đại biểu"}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
