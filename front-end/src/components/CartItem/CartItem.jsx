import React from 'react'
import { NavLink } from 'react-router-dom'
import "./cartItem.css"
import { DeleteForever } from "@material-ui/icons"

const CartItem = ({ data, cart, setCart, setIsOpen }) => {
    const handleRemoveFromCart = () => {
        const newArray = cart.filter(item => item.id !== data.id)
        localStorage.setItem("cart", JSON.stringify(newArray))
        setCart(newArray)
    }
    

    return (
        <div className="columns m-0 
         shopping-cart-modal-body is-flex  is-align-items-center is-justify-content-space-between is-flex-direction-row p-1 m-0" >
            <NavLink 
            className="column is-full"
            to={`../../product/${data.id}`} onClick={() => setIsOpen(false)}>
                <div className="columns 
                 is-flex is-flex-direction-row is-align-items-center is-clickable m-0 ">
                    <figure className="column is-half item-image-container ">
                        <img src={data.img} className=''/>
                    </figure>
                    <div className="column is-half is-flex is-flex-direction-column outlined--text--color ps-2">
                        <h3 className="is-size-3 is-size-5-tablet is-size-6-mobile ">
                            {data.title}
                        </h3>
                        <h4 className='is-size-3 is-size-5-tablet is-size-6-mobile'>
                            {data.price}$
                        </h4>
                    </div>
                </div>
            </NavLink>
            <div className="delete-item-icon is-clickable " onClick={handleRemoveFromCart}>
                <DeleteForever className='' />
            </div>
        </div>
    )
}

export default CartItem