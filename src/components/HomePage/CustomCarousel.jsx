import React from "react";
import { Button, Carousel } from "antd";

const contentStyle = {
  margin: 0,
  color: "#fff",
  height:"500px",
  lineHeight: "160px",
  textAlign: "center",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const template = (id) => {
  return `https://picsum.photos/id/${id}/1920/1080`;
};

const CustomCarousel = () => {
  return (
    <div className="relative">
      <Carousel arrows infinite={true} autoplay>
        {[...new Array(25)].map((item, index) => (
          <div key={index}>
            <div
              className="h-64 sm:h-96 md:h-[500px]"
              style={{
                ...contentStyle,
                backgroundImage: `url(${template(index + 1)})`,
              }}
            ></div>
          </div>
        ))}
      </Carousel>

      {/* Buttons */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-4 py-8 z-10 bg-black bg-opacity-50">
        <Button type="primary" className="w-auto px-6">
          Gửi lời chúc
        </Button>
        <Button type="primary" className="w-auto px-6">
          Xác nhận tham dự
        </Button>
      </div>
    </div>
  );
};

export default CustomCarousel;
