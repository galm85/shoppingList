export type Product = {

    _id:string;
    title:string;
    price?:number;
    image:string;
}


export type List = {
    id:number;
    products:Product[];
}


export type User = {
    _id?:string;
    userName:string;
    password?:string;
    avatar:string;
    isAdmin:boolean;
    createdAt?:string;
    updatedAt?:string;
}