import Link from "next/link";
import { IUser } from "../types";

interface IProps {
  users: IUser[];
}

export const UserList = ({ users }: IProps) => {
  return (
    <>
      <div className="columns">
        {users.map((user) => {
          return (
            <div key={user.id} className="column">
              <strong>User No.{user.id}</strong>
              <p>{user.name}</p>
              <p>{user.surname}</p>
              <strong>{user.salary} AMD</strong>
              <br></br>
            <Link href={'/edit/' + user.id}>Edit</Link>
            </div>
          );
        })}
      </div>
    </>
  );
};
