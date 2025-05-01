import { IProduct } from "@/Utils/intefaces";
import {createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    cartProducts :localStorage.getItem("cart")?
    JSON.parse(localStorage.getItem("cart")!):
    []
}

const shpingCartSlice = createSlice({
name : 'cart' ,
initialState ,
reducers: {
    addToCart : (state,action:PayloadAction<IProduct>) => {
        state.cartProducts = [...state.cartProducts , action.payload]
        localStorage.setItem("cart",JSON.stringify(state.cartProducts))
    },
    removeProduct : (state,action)=>{
        state.cartProducts = state.cartProducts.filter((product:IProduct) => product.id !== action.payload);
        localStorage.setItem("cart",JSON.stringify(state.cartProducts))
    },
    increseQty : (state,action) => {
        state.cartProducts = state.cartProducts.map((item:IProduct) => {
            if(item.id === action.payload) return {...item , qty:item.qty +1}
            return item
        })
        localStorage.setItem("cart",JSON.stringify(state.cartProducts))
    },
    dicreseQty: (state,action) => {
        state.cartProducts = state.cartProducts.map((item:IProduct) => {
            if(item.id === action.payload && item.qty > 1 ) return {...item , qty:item.qty -1}
            return item
        }) 
        localStorage.setItem("cart",JSON.stringify(state.cartProducts))
    }
},
})

export const {addToCart,removeProduct,dicreseQty,increseQty} = shpingCartSlice.actions;
export const selectCart = ({cart}:any) => cart
export default shpingCartSlice.reducer