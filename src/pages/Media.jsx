import React from 'react';

function Media() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col gap-4">
        <div className="w-full md:w-full">
          <video controls className="w-full h-80 md:h-3/4">
            <source src="https://www.youtube.com/watch?v=dQw4w9WgXcQ" type="video/mp4" /> {/* lấy video từ youtube*/}
          </video>
        </div>
        <div className="w-full md:w-full">
          <img src="https://picsum.photos/id/237/400/250" alt="Poster" className="w-full h-48 md:h-1/3 object-cover" /> {/*chưa biết kích thước chuẩn poster*/}
        </div>
      </div>
    </div>
  );
}

export default Media;