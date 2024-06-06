import React from "react";

function Media() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col gap-4">
        <div className="w-full md:w-full">
          <iframe
            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FtuoitreHCMUTE%2Fvideos%2F446444264789400%2F&show_text=true&width=560&t=0"
            className="w-full h-[100vh] "
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen="true"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Media;
