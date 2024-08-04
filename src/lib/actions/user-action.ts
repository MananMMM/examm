"use server";

import { redirect } from "next/navigation";
import { addUser, getUserByUsername, updatUserById } from "../api";
import { InputUser, IUser } from "../types";

interface IProps {
  params: IUser;
}
export const handleAdd = (prev: unknown, data: FormData) => {
  const users: InputUser = {
    name: data.get("name") as string,
    surname: data.get("surname") as string,
    username: data.get("username") as string,
    salary: +(data.get("salary") as string),
  };

  if(!data.get('name')|| !data.get('surname')|| !data.get('username')|| !data.get('salary')){
    return{
        message:"Please fill all the fileds"
    }
  }

  const salaryType=parseInt(data.get('salary') as string)
  if(isNaN(salaryType)){
    return{
        message:"Salary must be a number"
    }
  }

  const uniqueUsername=data.get('username') as string
  if( getUserByUsername(uniqueUsername)){
    return{
      message:"User is already exists"
    }
  }

  addUser(users),
  redirect("/")

};

export const handleUpdate=(id:number,data:FormData)=>{
 const users:InputUser={
    name:data.get("name") as string,
    surname:data.get("surname") as string,
    username:data.get("username") as string,
    salary:+(data.get("salary") as string)
  }
//  let id=+(data.get("id") as string)
 updatUserById(id,users)
 redirect("/")
}
