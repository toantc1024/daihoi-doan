import IMAGE_URL from "../../assets/images/bgNav.jpg";
import LOGO from "../../assets/images/logo.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Drawer } from "antd";
import { AiOutlineMenu } from "react-icons/ai";

const items = [
  {
    label: "TRANG CHỦ",
    key: "",
  },
  {
    label: "GỬI LỜI CHÚC",
    key: "letter",
  },
  {
    label: "VĂN KIỆN",
    key: "document",
  },
  {
    label: "XÁC NHẬN THAM DỰ",
    key: "confirm",
  },
  {
    label: "ẤN PHẨM TRUYỀN THÔNG",
    key: "media",
  },
];
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate();
  // Viet Anh
  return (
    <div
      className="navbar bg-base-100 bg-right"
      style={{ backgroundImage: `url(${IMAGE_URL})` }}
    >
      <div className="flex-1">
        <div
          tabIndex={0}
          className="cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          <div className="w-10   rounded-full">
            <img alt="Tailwind CSS Navbar component" src={LOGO} />
          </div>
        </div>
      </div>
      <div className="flex-none gap-2">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            {items.map((item) => {
              return (
                <Button
                  danger={item.key === "confirm"}
                  className={`bg-transparent`}
                  type="primary"
                  onClick={() => {
                    navigate(item.key);
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </ul>
        </div>
        <div className="dropdown dropdown-end   lg:hidden">
          <div className="flex gap-2  items-center justify-between">
            {" "}
            <Button
              danger
              type="primary"
              onClick={() => {
                navigate("confirm");
              }}
            >
              Xác nhận tham dự
            </Button>
            <div
              className="bg-blue-400 hover:bg-blue-500 active:bg-blue-600 h-10  flex items-center justify-center w-10 rounded-xl p-2"
              onClick={showDrawer}
            >
              <AiOutlineMenu className="text-white" />
            </div>
          </div>
          <Drawer title="Menu" onClose={onClose} open={open}>
            <div className="flex flex-col gap-2">
              {items.map((item) => {
                if (item.key !== "confirm")
                  return (
                    <Button
                      type="primary"
                      onClick={() => {
                        navigate(item.key);
                      }}
                    >
                      {item.label}
                    </Button>
                  );
              })}
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
