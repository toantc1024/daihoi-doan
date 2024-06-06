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
                Số 1, Võ Văn Ngân, Linh Chiểu, TP. Thủ Đức, TP. HCM
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
          <a
            href="https://www.facebook.com/tuoitreHCMUTE"
            target="_blank"
            className="link link-hover"
          >
            <img src={facebookLogo} alt="Facebook Logo" className="h-5 w-5" />
          </a>
          <a
            href="https://www.tiktok.com/@tuoitre.hcmute?_t=8myDbaV6v8p&_r=1"
            target="_blank"
            className="link link-hover"
          >
            <img src={tiktokLogo} alt="Facebook Logo" className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
