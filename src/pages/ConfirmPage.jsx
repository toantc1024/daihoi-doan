import React, { useState } from "react";
import DOCUMENT_BANNER from "../assets/images/header-02.png";
import CONFIRM_BANNER from "../assets/images/header-01.png";
import TRANSFER_BANNER from "../assets/images/header-03.png";
import QR_CODE from "../assets/images/qr.png";
import { Image, Spin } from "antd";
import { addDoc, collection } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../utils/firebase";
function Media1() {
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    unit: "",
    confirmation: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.entries(formData).some(([key, value]) => value === "")) {
      return toast.error("Vui lòng điền đầy đủ thông tin!", {
        position: "bottom-right",
      });
    }

    let uploadPromise = new Promise(async (resolve, reject) => {
      try {
        setIsAdding(true);
        const docRef = await addDoc(collection(db, "confirm"), {
          formData,
        });
        resolve(true);
        setIsAdding(false);
      } catch (error) {
        reject(error);
        setIsAdding(false);
      }
    });
    toast.promise(
      uploadPromise,
      {
        pending: "Đang tải lên 🕐",
        success: {
          render() {
            // navigate("/home");
            return `Đã xác nhận thành công ✅`;
          },
          icon: "👋",
        },

        error: {
          render({ data }) {
            return `Lỗi! Vui lòng tải lại trang.`;
          },
          icon: "😥",
        },
      },
      {
        position: "bottom-right",
      }
    );
  };

  return (
    <div className="container mx-auto min-h-screen">
      <div className="flex justify-between gap-4 flex-col-reverse  md:flex-row">
        {" "}
        {/* Use md:grid-cols-2 for media query */}
        <div className="bg-white shadow-md rounded p-4">
          <h2 className="text-xl font-bold">
            <img src={DOCUMENT_BANNER} alt="" />
          </h2>
          <iframe
            src="https://drive.google.com/file/d/1PTWSv6cJ0zRbJt4zx8bg1ZaZUzrmWiDW/preview"
            width="100%"
            className="h-[80vh]"
            allow="autoplay"
          />
        </div>
        <div className="bg-white shadow-lg rounded p-4">
          <h2 className="text-2xl font-bold mb-4 text-center">
            <img src={CONFIRM_BANNER} alt="" />
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="fullName"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Họ và tên
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
              />
            </div>
            <div>
              <label
                htmlFor="unit"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Đơn vị
              </label>
              <input
                type="text"
                id="unit"
                name="unit"
                value={formData.unit}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
              />
            </div>
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Số điện thoại liên hệ
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
              />
            </div>
            <div>
              <label
                htmlFor="confirmation"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Xác nhận tham dự
              </label>
              <select
                id="confirmation"
                name="confirmation"
                value={formData.confirmation}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
              >
                <option value="">Chọn</option>
                <option value="xác nhận">Xác nhận tham dự</option>
                <option value="không xác nhận">Không tham dự</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Gửi
            </button>
          </form>

          {/* QR Code Section */}
          <div className="mt-4">
            <h3 className="text-lg font-bold mb-2">
              {" "}
              <img src={TRANSFER_BANNER} alt="" />
            </h3>
            <div className=" rounded p-4 flex flex-col items-center justify-center gap-4">
              <p>
                Ban Chấp hành Đoàn trường rất hân hạnh đón tiếp Quý Đại biểu đến
                tham dự Đại hội XXII.
                <br /> Đồng thời, nếu Quý Đại biểu có gửi hoa, quà chúc mừng đến
                Đại hội, Ban Chấp hành Đoàn trường trân trọng cám ơn và rất mong
                Quý Đại biểu có thể chuyển thành hiện kim nhằm góp phần ủng hộ
                “Quỹ Đồng hành Tuổi trẻ HCMUTE” hỗ trợ các chương trình, hoạt
                động cùng Đoàn trường ĐH Sư phạm Kỹ thuật TP. Hồ Chí Minh trong
                nhiệm kỳ 2024 – 2027.
                <br />
                <span className="font-extrabold text-blue-900">
                  Thông tin chi tiết
                </span>
                <br />- Số tài khoản: 3142453245 <br />- Tên tài khoản: BCH ĐOÀN
                TRƯỜNG ĐH SƯ PHẠM KỸ THUẬT TPHCM <br /> Tại Ngân hàng TMCP Đầu
                tư và Phát triển Việt Nam – BIDV Chi nhánh Đông Sài Gòn.
              </p>

              <Image
                width={200}
                src={QR_CODE}
                placeholder={<Spin tip="Loading" size="small"></Spin>}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Media1;
