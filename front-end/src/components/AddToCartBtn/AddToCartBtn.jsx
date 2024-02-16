import React from 'react'
import { useCartContext } from "../../context/CartContext";
import { AddShoppingCart } from "@material-ui/icons"
import "./addToCartBtn.css"
const AddToCartBtn = ({data , id}) => {

    const { cart, setCart } = useCartContext()

    const handleAddToCart = () => {
        const newArray = [...cart ,{
            id: id,
            title: data.title,
            price: data.price,
            img:`${data.image.data.attributes.url}`
        } ]
        localStorage.setItem("cart", JSON.stringify(newArray))
        setCart(newArray)
    }
    return (
        <div className="add-btn is-clickable dark--bg--color light--text--color is-flex is-justify-content-center is-align-items-center py-2" onClick={handleAddToCart} >
            <AddShoppingCart className='' />
        </div >
    )
}

export default AddToCartBtn