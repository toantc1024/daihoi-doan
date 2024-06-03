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
          by <span className="font-bold">tctoan1024</span>
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Liên hệ</h6>
        <a className="link link-hover">Tiktok</a>
        <a className="link link-hover">Facebook</a>
      </nav>
      <nav>
        <h6 className="footer-title">Tổ chức khác</h6>
        <a className="link link-hover">VP Đoàn trường</a>
        <a className="link link-hover">VP Hội sinh viên</a>
      </nav>
      <nav>
        <h6 className="footer-title">Hỗ trợ</h6>
        <a className="link link-hover">Liên hệ fanpage</a>
        <a className="link link-hover">Liên hệ email</a>
      </nav>
    </footer>
  );
};

export default Footer;
