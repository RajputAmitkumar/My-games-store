import React, { useState } from "react"
//provider
//consumer

const CartContext = React.createContext()

const CartProvider = (props) => {

    const [cartData, setCartData] = useState([])

    const addCartdata = (data)=> {
        setCartData([...cartData,data])
    }

    const removeCartData = ()=> {
    
    }
    return (
        <CartContext.Provider value={{cartData, addCartdata}}>
            {props.children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider}