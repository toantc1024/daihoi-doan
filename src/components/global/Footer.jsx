import React from "react";
import logo from "../../assets/images/logo.png"; // Import the logo image 

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <aside className="flex flex-col items-center">
        <img src={logo} alt="FIT Logo" className="w-40 h-auto mb-1" /> {/* Reduce the bottom margin to 2 */}
        <p className="text-center">
          Đoàn hội Khoa Công nghệ Thông tin.
          <br />
          Just you think, we can do better. ©{new Date().getFullYear()} <br />
          by{" "}
          <span className="font-bold">tctoan1024 & AndyAnh174</span>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;