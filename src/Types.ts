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