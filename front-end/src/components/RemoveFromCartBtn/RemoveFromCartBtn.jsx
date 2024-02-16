import React from 'react'
import { useCartContext } from "../../context/CartContext";
import "./removeFromCartBtn.css"
const RemoveFromCartBtn = ({id}) => {

    const { cart, setCart } = useCartContext()

    const handleRemoveFromCart = () => {
        const newArray = cart.filter(item => item.id != id)
        localStorage.setItem("cart", JSON.stringify(newArray))
        setCart(newArray)
    }

    return (
        <div className="remove-btn is-clickable dark--text--color is-clickable is-flex is-justify-content-center is-align-items-center py-2" onClick={handleRemoveFromCart}>
            remove
        </div>)
}

export default RemoveFromCartBtn