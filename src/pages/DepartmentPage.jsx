import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import LetterCard from "../components/global/LetterCard";
import { useParams } from "react-router-dom";
import { db } from "../utils/firebase";
const DepartmentPage = () => {
  let { id } = useParams();

  const [attendees, setAttendees] = useState([]);
  const getAttendees = async () => {
    const q = query(
      collection(db, "letters"),
      where("khoa", "==", parseInt(id))
    );
    const querySnapshot = await getDocs(q);
    let newAttendees = [];
    querySnapshot.forEach((doc) => {
      newAttendees.push(doc.data());
    });
    setAttendees(newAttendees);
  };
  useEffect(() => {
    getAttendees();
  }, [id]);
  return (
    <div>
      {attendees.map((attendee) => (
        <LetterCard data={attendee} />
      ))}
    </div>
  );
};

export default DepartmentPage;
