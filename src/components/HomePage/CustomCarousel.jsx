import React from "react";
import { Button, Carousel, ConfigProvider } from "antd";
import slides from "../../assets/images/slides";
import { useNavigate } from "react-router-dom";
const contentStyle = {
  margin: 0,
  color: "#fff",
  height: "500px",
  lineHeight: "160px",
  textAlign: "center",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const CustomCarousel = () => {
  const navigate = useNavigate();
  return (
    <div className="relative">
      <ConfigProvider
        theme={{
          token: {
            arrowSize: 32,
            arrowOffset: 32,
          },
        }}
      >
        <Carousel arrows infinite={true} autoplay>
          {slides &&
            slides.map((item) => {
              return (
                <div>
                  <div class="bg-sky-300 ...">
                    <img
                      src={item.image}
                      class="object-fill h-full w-full ..."
                    />
                  </div>
                </div>
              );
            })}
        </Carousel>
      </ConfigProvider>
      {/* Buttons */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-4 py-8 z-10bg-opacity-50">
        <Button
          type="primary"
          className="w-auto px-6"
          onClick={() => {
            navigate("/letter");
          }}
        >
          Gửi lời chúc
        </Button>
        <Button
          type=""
          className="w-auto px-6 bg-[#e12351] text-white"
          onClick={() => {
            navigate("/confirm");
          }}
        >
          Xác nhận tham dự
        </Button>
      </div>
    </div>
  );
};

export default CustomCarousel;
