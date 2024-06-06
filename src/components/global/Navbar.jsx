import { Button, Image } from "antd";
import IMAGE_URL from "../../assets/images/bgNav.jpg";
import LOGO from "../../assets/images/logo.png";
import { ReactComponent as Logo } from "../../assets/svg/Logo.svg";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
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
      label: "XÁC NHẬN THAM DỰ",
      key: "confirm",
    },
    {
      label: "ẤN PHẨM TRUYỀN THÔNG",
      key: "media",
    },
  ];

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
          <div className="w-10 hidden lg:flex   rounded-full">
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
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full bg-white p-2">
              <img alt="Tailwind CSS Navbar component" src={LOGO} />
            </div>
          </div>

          <ul
            tabIndex={0}
            className="mt-3 z-[999] p-2 shadow menu menu-sm dropdown-content bg-[#1977bc] flex flex-col gap-1 rounded-box w-52 "
          >
            {items.map((item) => {
              return (
                <Button
                  danger={item.key === "confirm"}
                  className="bg-transparent"
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
      </div>
    </div>
  );
};

export default Navbar;
