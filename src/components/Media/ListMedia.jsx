import { collection, getDocs, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../utils/firebase";

const ListMedia = () => {
  const [medias, setMedias] = useState([]);
  const getMedias = async () => {
    const q = query(collection(db, "medias"));
    const querySnapshot = await getDocs(q);
    let newMedias = [];
    querySnapshot.forEach((doc) => {
      newMedias.push(doc.data());
    });
    setMedias(newMedias);
  };

  useEffect(() => {
    getMedias();
  }, []);
  return (
    <div className="h-screen overflow-auto">
      {medias &&
        medias.map((media) => {
          return (
            <iframe
              src={media.src}
              className="w-full h-[100vh] "
              frameborder="0"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen="true"
            ></iframe>
          );
        })}
    </div>
  );
};

export default ListMedia;
