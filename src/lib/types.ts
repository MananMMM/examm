export interface IUser{
    id:number
    name:string
    surname:string
    username:string
    salary:number
}

export type InputUser=Omit<IUser,'id'>