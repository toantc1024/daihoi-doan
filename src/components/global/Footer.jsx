import React from "react";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <aside>
        FIT LOGO
        <p>
          Đoàn hội Khoa Công nghệ Thông tin.
          <br />
          Just you think, we can do better. ©{new Date().getFullYear()} <br />
          by <span className="font-bold">tctoan1024 & AndyAnh174</span>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
