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
      label: "ẤN PHẨM TRUYỀN THÔNG",
      key: "media",
    },
    {
      label: "ĐOÀN ĐẠI BIỂU",
      key: "member",
    },
    {
      label: "KHÔNG GIAN TRIỂN LÃM",
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
        <div tabIndex={0} className=" ">
          <div className="w-10 rounded-full">
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
                  className="bg-transparent shadow-none "
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
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>

          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 "
          >
            <li className="bg-white">
              <a>Item 1</a>
            </li>

            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
