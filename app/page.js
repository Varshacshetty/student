"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import { supabase } from "./lib/supabase";

export default function Home() {
  const [studentList,setStudentList]=useState([])

  useEffect(() => {
    loadStudentList();
  },[])

  async function loadStudentList() {
    const {data,error} =  await supabase.from("Student").select();
    if(error) {
      alert(JSON.stringify(error))
    }
    setStudentList(data)
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl font-bold text-blue-600">Students List</h1>
      {studentList.map((stud, index) => {
        return(
          <div key={index} className="border rounded-lg shadow-md p-4 w-80 bg-white my-3">
            <h2 className="text-lg font-semibold text-gray-800">{stud.NAME}</h2>
            <p className="text-sm text-gray-600"><strong>USN:</strong> {stud.USN}</p>
            <p className="text-sm text-gray-600"><strong>Email:</strong> {stud.EMAIL}</p>
            <p className="text-sm text-gray-600"><strong>Phone:</strong> {stud.PHONE}</p>
            <p className="text-sm text-gray-600"><strong>Address:</strong> {stud.ADDRESS}</p>
            <p className="text-sm text-gray-600"><strong>Age:</strong> {stud.AGE}</p>
            <p className="text-sm text-gray-600"><strong>Gender:</strong> {stud.GENDER}</p>
          </div>
        )
      })}
    </div>
  );
}