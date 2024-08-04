import Database from "better-sqlite3";
import { InputUser, IUser } from "./types";

const db = new Database("test.db");
export const addUser = (users: IUser[]) => {
  return db
    .prepare(
      `
        INSERT INTO users(name,surname,username,salary)
        VALUES(@name,@surname,@username,@salary)
        
        `
    )
    .run(users);
};

export const getAllUsers = (): IUser[] => {
  return db
    .prepare(  `
    SELECT * FROM users `  )
    .all() as IUser[];
};

export const getUserByUsername=(username:string)=>{

    return db.prepare(`
        SELECT * FROM users WHERE username=?
        `).get(username) as IUser
}


export const getUserById=(id:number):IUser=>{
    return db
    .prepare("SELECT * FROM users WHERE id=?")
    .get(id) as IUser
    }

    export const updatUserById=(id:number,users:InputUser):Database.RunResult=>{
   return db.prepare(`
            UPDATE users SET name=?,surname=?,username=?,salary=? WHERE id=?
            `).run(users.name,users.surname,users.username,users.salary,id)
    }