import React, { useEffect, useState } from "react";
import LetterCard from "./LetterCard";
import { Card, Carousel } from "antd";
import slides from "../../assets/images/slides";
import { db } from "../../utils/firebase";
import { collection, getDocs, onSnapshot, query } from "firebase/firestore";
const Letter = () => {
  const q = query(collection(db, "letters"));

  const [letters, setLetters] = useState([]);

  const getLetters = async () => {
    const querySnapshot = await getDocs(q);
    let newLetters = [];
    querySnapshot.forEach((doc) => {
      newLetters.push(doc.data());
    });
    setLetters(newLetters);
  };
  useEffect(() => {
    getLetters();
  }, []);

  return (
    <div className="h-auto">
      {letters && letters.length > 0 && (
        <Carousel arrows infinite={true} autoplay>
          {letters &&
            letters.map((item) => {
              return <LetterCard data={item} />;
            })}
        </Carousel>
      )}
    </div>
  );
};

export default Letter;
