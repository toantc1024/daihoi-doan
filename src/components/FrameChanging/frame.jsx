import React, { useState, useRef } from "react";

// Libraries
import useImage from "use-image";

// Components
import Inputs from "./frameControllers/DetailsInput";
import Download from "./toolbox/Download";
import CanvasStage from "./canvas/Stage";
import FRAME from "../../assets/images/frame.png";
import { ConfigProvider, Slider } from "antd";
import { Button, Flex } from "antd";
import { FaDownload, FaImage } from "react-icons/fa6";
// Assets

const Frame = () => {
  const [uploadedImage, setUploadedImage] = useState();
  const [height, setHeight] = useState();
  const [width, setWidth] = useState();

  const stageRef = useRef(null);
  const [frameImg] = useImage(FRAME, "Anonymous");
  const [image] = useImage(uploadedImage, "Anonymous");

  const downloadURI = (uri, name) => {
    const link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const inputFile = useRef(null);
  const handleDownload = () => {
    const dataURL = stageRef.current.toDataURL({ pixelRatio: 4 });
    downloadURI(dataURL, "DH_XXII.png");
  };
  const [scale, setScale] = useState(1);
  return (
    <>
      {typeof window !== "undefined" && (
        <div className="bg-white md:p-4 rounded-xl ">
          <CanvasStage
            scale={scale}
            stageRef={stageRef}
            frameImg={frameImg}
            image={image}
            height={height}
            width={width}
          />
        </div>
      )}
      <div className="w-[250px]  sm:w-[300px] md:w-[400px] lg:w-[500px] flex items-center gap-2 justify-center ">
        <span className="w-auto text-nowrap text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-white">
          Phóng to
        </span>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "rgba(255,255,255,.4)",
              railBg: "rgba(255,255,255,.2)",
              trackBg: "rgba(255,255,255,.9)",
            },
          }}
        >
          <Slider
            onChange={(value) => {
              // Increase height and width of the image by ratio of value as percentage
              setScale(value / 100);
            }}
            className="w-full"
            defaultValue={100}
            max={200}
            min={0}
          />
        </ConfigProvider>
      </div>
      <div className="flex gap-2 ">
        <button
          onClick={() => {
            inputFile.current.click();
          }}
          className="btn btn-white text-2xl text-sky-900 flex gap-2 rounded-xl"
        >
          <FaImage /> Chọn hình
        </button>
        <button onClick={handleDownload} className="btn text-2xl text-sky-900">
          <FaDownload /> Tải xuống
        </button>
      </div>
      <input
        ref={inputFile}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={(e) => {
          if (e.target.files.length > 0) {
            setUploadedImage(URL.createObjectURL(e.target.files[0]));
            const i = new Image();
            i.onload = function () {
              const imageDimensions = [
                {
                  height: i.height,
                  width: i.width,
                },
              ];
              setHeight(imageDimensions[0].height);
              setWidth(imageDimensions[0].width);
            };

            i.src = URL.createObjectURL(e.target.files[0]);
          }
        }}
      />
    </>
  );
};

export default Frame;
