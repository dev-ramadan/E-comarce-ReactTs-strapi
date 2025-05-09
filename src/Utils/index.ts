import { IProduct } from "./intefaces";
export const chackItemInCart = (cart:IProduct[],item:IProduct) => {
    const exit = cart.find((product:IProduct) => product.id === item.id) ;
    if(exit){
        return cart.map((product) => 
            product.id === item.id ? {...product,qty:product.qty +1 } : product
        )
    }
    return [...cart ,{...item,qty:1}]
}