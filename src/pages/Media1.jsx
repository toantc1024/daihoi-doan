import React, { useState } from "react";

function Media1() {
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
    console.log(formData);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Use md:grid-cols-2 for media query */}
        <div className="bg-white shadow-md rounded p-4">
          <h2 className="text-xl font-bold mb-4">Chương trình chi tiết</h2>
          <iframe
            src="https://drive.google.com/file/d/1et48OzgHIdGHM2WE7JkH7cnh7eQOEcJC/preview"
            width="100%"
            height="480"
            allow="autoplay"
            className="border rounded"
          />
        </div>
        <div className="bg-white shadow-lg rounded p-4">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Thông tin tham dự
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">
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
              <label htmlFor="unit" className="block text-gray-700 text-sm font-bold mb-2">
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
              <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">
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
              <label htmlFor="confirmation" className="block text-gray-700 text-sm font-bold mb-2">
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
              Gửi
            </button>
          </form>

          {/* QR Code Section */}
          <div className="mt-4">
            <h3 className="text-lg font-bold mb-2">QR Code</h3>
            <div className="bg-gray-200 rounded p-4">
              {/* Replace 'YOUR_QR_CODE_URL' with the actual URL of your QR code */}
              <img src="YOUR_QR_CODE_URL" alt="QR Code" className="w-full" />
            </div>
          </div>

          {/* Transfer Money Button */}
          <div className="mt-4">
            <a
              href="YOUR_TRANSFER_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Chuyển tiền
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Media1;