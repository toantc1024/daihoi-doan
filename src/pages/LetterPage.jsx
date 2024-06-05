import React, { useState } from "react";
import LetterInfo from "../components/LetterPage/LetterInfo";
import AvatarUpload from "../components/LetterPage/AvatarUpload";
const LetterPage = () => {
  const [imageUrl, setImageUrl] = useState();
  const [path, setPath] = useState();
  const [isAdding, setIsAdding] = useState(false);

  return (
    <div className="h-screen bg-white flex gap-4 items-center  justify-center w-full">
      <div className="flex w-full items-center flex-col  gap-2 p-2 ">
        <AvatarUpload {...{ setPath, imageUrl, setImageUrl }} />
        <div>
          <span>Upload ảnh của bạn tại đây</span>
        </div>
      </div>
      <div className="w-full">
        <LetterInfo
          imageUrl={path}
          setIsAdding={setIsAdding}
          isAdding={isAdding}
        />
      </div>{" "}
    </div>
  );
};

export default LetterPage;
