import React from "react";
import logo from "../../assets/images/logo.png"; // Import the logo image
import facebookLogo from "../../assets/images/facebook-logo.png"; // Import Facebook logo
import tiktokLogo from "../../assets/images/tiktok-logo.png"; // Import TikTok logo
import youtubeLogo from "../../assets/images/youtube-logo.png"; // Import YouTube logo

const Footer = () => {
  return (
    <footer className="footer flex justify-center items-center p-10 bg-base-200 text-base-content ">
      <div className="footer-content flex flex-col items-center justity-center">
        <div className="flex items-center flex-col">
          <img src={logo} alt="FIT Logo" className="w-40 h-auto " />
          {/* Adjust logo size and margin */}
          <div className="ml-2">
            <div className="flex flex-col mt-4">
              <p className="text-center">
                ĐOÀN TNCS HỒ CHÍ MINH
                <br />
                TRƯỜNG ĐẠI HỌC SƯ PHẠM KỸ THUẬT TP. HCM
              </p>
              <p className="text-center">
                Số 1 Võ Văn Ngân, Linh Chiểu, Tp.Thủ Đức
              </p>
            </div>
          </div>
        </div>
        <p className="text-center">
          Đoàn hội Khoa Công nghệ Thông tin.
          <br />
          Just you think, we can do better. ©{new Date().getFullYear()} <br />
          by <span className="font-bold">tctoan1024 & AndyAnh174</span>
        </p>
        <div className="flex items-center gap-4 mt-4">
          <a href="mailto:doantxung@hcmute.edu.vn" className="link link-hover">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
          <a href="#" className="link link-hover">
            <img src={facebookLogo} alt="Facebook Logo" className="h-5 w-5" />
          </a>
          <a href="#" className="link link-hover">
            <img src={tiktokLogo} alt="TikTok Logo" className="h-5 w-5" />
          </a>
          <a href="#" className="link link-hover">
            <img src={youtubeLogo} alt="YouTube Logo" className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
