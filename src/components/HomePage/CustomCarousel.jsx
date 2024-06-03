import React from "react";
import { Button, Carousel } from "antd";
const contentStyle = {
  margin: 0,
  height: "500px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
};

const tempate = (id) => {
  return `https://picsum.photos/id/${id}/1920/1080`;
};
const CustomCarousel = () => {
  return (
    <div div className="relative">
      <>
        <div className="absolute  bottom-0 w-full z-[999]  flex items-end justify-center gap-4 py-8">
          <Button type="primary">Gửi lời chúc</Button>{" "}
          <Button type="primary">Xác nhận tham dự</Button>
        </div>
        <Carousel arrows infinite={true} autoplay>
          {[...new Array(25)].map((item, index) => {
            return (
              <div>
                <div
                  style={{
                    ...contentStyle,
                    backgroundImage: `url(${tempate(index + 1)})`,
                  }}
                ></div>
              </div>
            );
          })}

          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </>
    </div>
  );
};

export default CustomCarousel;
