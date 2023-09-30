export type Product = {
    _id:string;
    title:string;
    image:string;
    cloudinary_id?:string;
}


export type List = {
    _id?:number;
    items:ListItem[];
    listName:string;
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


export type ListItem = {
    _id:string;
    title:string;
    image:string;
    cloudinary_id?:string;
    checked?:boolean;
}




// redux types
export type Action = {
    type:string;
    payload?:any;
}

export type MainState = {
    productReducer:ProductReducer;
    userReducer:UserReducer;
    listReducer:ListReducer;
}

export type UserReducer = {
    user:any;
}

export type ProductReducer = {
    products:[];
}

export type ListReducer = {
    lists:List[];

}