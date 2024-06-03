import { Button } from "antd";
import IMAGE from "../../assets/images/bgNav.jpg";
import { ReactComponent as Logo } from "../../assets/svg/Logo.svg";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const items = [
    {
      label: "ẤN PHẨM TRUYỀN THÔNG",
      key: "mail",
    },
    {
      label: "ĐOÀN ĐẠI BIỂU",
    },
    {
      label: "KHÔNG GIAN TRIỂN LÃM",
    },
  ];
  // Viet Anh
  return (
    <div
      className="navbar bg-base-100 bg-right"
      style={{ backgroundImage: `url(${IMAGE})` }}
    >
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl text-white">XXII</Link>
      </div>
      <div className="flex-none gap-2">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            {items.map((item) => {
              return (
                <Button className="bg-transparent shadow-none " type="primary">
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
