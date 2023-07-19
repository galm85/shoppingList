export type Product = {

    id:number;
    title:string;
    price?:number;
    image:string;
}


export type List = {
    id:number;
    products:Product[];
}