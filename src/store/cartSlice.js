import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0
} ;

const cartSlice  = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addItem : (state,action) =>{
                const newItem = action.payload ;
                const existItem = state.cartItems.find( item => item.id === newItem.id) ;
                state.totalQuantity++ ;
                if(!existItem){
                    state.cartItems.push({
                        id: newItem.id,
                        productName: newItem.productName,
                        image: newItem.imgUrl,
                        price: newItem.price,
                        quantity: 1,
                        totalPrice: newItem.price
                    })
                }
        },
    }
})


// export const {}  = cartSlice.actions ;

export default cartSlice.reducer