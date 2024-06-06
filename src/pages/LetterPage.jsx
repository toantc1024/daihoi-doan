import React, { useState } from "react";
import LetterInfo from "../components/LetterPage/LetterInfo";
import AvatarUpload from "../components/LetterPage/AvatarUpload";
import Letter from "../components/global/Letter";
const LetterPage = () => {
  const [imageUrl, setImageUrl] = useState();
  const [path, setPath] = useState();
  const [isAdding, setIsAdding] = useState(false);

  return (
    <div className="min-h-screen ">
      <div className="pt-16 bg-white ">
        <div className=" flex flex-col  gap-4 items-center  justify-center">
          {" "}
          <div className="flex w-full items-center flex-col  gap-2 p-2 ">
            <AvatarUpload {...{ setPath, imageUrl, setImageUrl }} />
            <div>
              <span>Upload Avatar XXII của bạn tại đây</span>
            </div>
          </div>
          <LetterInfo
            imageUrl={path}
            setIsAdding={setIsAdding}
            isAdding={isAdding}
          />
        </div>
        <Letter />
      </div>
    </div>
  );
};

export default LetterPage;
