"use client"
import InputField from '@/app/components/InputField'
import React from 'react'
import {useState} from 'react'
import { supabase } from "@/app/lib/supabase";
import { User2Icon,Share} from 'lucide-react';


export default function CreateStudent() {
    const [name,setName] = useState("")
    const [age,setAge] = useState(0)
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState(0)
    const [address,setAddress] = useState("")
    const [gender,setGender] = useState("")
    const [usn,setUsn] = useState("")
return(
        <div className="min-h-screen flex flex-col justify-center items-center">
            <h1 className='text-3xl font-bold text-blue-500'>CreateStudent</h1>
            <h1 className='m1-2'><User2Icon size={20}/></h1>
            <InputField 
              type={"text"} 
              value={name}
               placeholder={"Student Name"}
               onChange={(e)=>{
                setName(e.target.value)
               }} />
            <InputField 
              type={"text"} 
              value={email}
               placeholder={"Student Email"}
               onChange={(e)=>{
                setEmail(e.target.value)
               }} />
            <InputField 
              type={"text"} 
              value={phone}
               placeholder={"Student phone"}
               onChange={(e)=>{
                setPhone(e.target.value)
               }} />
            <InputField 
              type={"text"} 
              value={address}
               placeholder={"Student address"}
               onChange={(e)=>{
                setAddress(e.target.value)
               }} />   
            <InputField 
              type={"text"} 
              value={gender}
               placeholder={"Student gender"}
               onChange={(e)=>{
                setGender(e.target.value)
               }} />  
            <InputField 
              type={"text"} 
              value={age}
               placeholder={"Student age"}
               onChange={(e)=>{
                setAge(e.target.value)
            }} />   
            <InputField 
              type={"text"} 
              value={usn}
               placeholder={"Student usn"}
               onChange={(e)=>{
                setUsn(e.target.value)
               }} />  

             <button
             onClick={async(event)=> {
                if(usn==""||name==""||email==""||phone==""||address==""||gender==""||age=="")
                {    
                    alert('All Fields are Mandatory')
                    return;
                } else{
                    try{
                     const{Data,error} = await supabase.from('Student').insert({
                       USN:usn,
                       NAME:name,
                       EMAIL:email,
                       PHONE:phone,
                       ADDRESS:address,
                       GENDER:gender,
                       AGE:age
                     }).select()
                    if(error != null){
                      throw error
                    }
                    alert("Student Profile Created \n ${JSON.stringify(data)}")
                    }catch(e){
                    alert('Error :${JSON.string.stringify(e)}')
                }
            }
        }}
        className='flex flex-row bg-green-800 text-white text-lg p-3 rounded-md shadow space-x-2'> Create Profile
        <Share size={20} className='ml-2'/></button>         
        </div>
    )
}