import React from "react";
import ListMedia from "../components/Media/ListMedia";
function Media() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col gap-4">
        <ListMedia />
      </div>
    </div>
  );
}

export default Media;
