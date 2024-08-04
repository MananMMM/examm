import { getAllUsers } from "@/lib/api"
import { UserList } from "@/lib/components/user-list"

export default function Page(){
  const list=getAllUsers()
  console.log(list)
  return <>
    <h1 className="is-size-2">Home Page</h1>
    <br></br>
    <UserList  users={list}/>

  </>
}