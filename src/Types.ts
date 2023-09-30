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
    avatar?:string;
    isAdmin:boolean;
    createdAt?:string;
    updatedAt?:string;
}




// redux types
export type Action = {
    type:string;
    payload?:any;
}

export type MainState = {
    productReducer:ProductReducer;
    userReducer:UserReducer;
}

export type UserReducer = {
    user:any;
}

export type ProductReducer = {
    products:[];
}