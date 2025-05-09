export interface IProduct  {
    id: number ;
    title: string ;
    image :string | any;
    description : string ;
    price:number;
    url ?:string;
    documentId:string;
    qty:number
    imageUrl?:string;
    formats?:any
}