import React from 'react'
import "./productCard.css"
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../../../context/CartContext";
import AddToCartBtn from '../../../../components/AddToCartBtn/AddToCartBtn'
import RemoveFromCartBtn from '../../../../components/RemoveFromCartBtn/RemoveFromCartBtn'
import Rating from '../../../../components/Rating/Rating';

const ProductCard = ({ data, id }) => {

    const { cart } = useCartContext()
    return (
        <>
            

                <div className="column is-3-desktop is-4-tablet is-6-mobile">
                    <div className="card is-clickable ">
                        <NavLink to={`/product/${id}`} className="card is-clickable main-card">
                            <figure className="image is-256x256">
                                <img src={`${data.image.data.attributes.url}`} />
                            </figure>
                            <div className="p-2" >
                                <div className="m-0 ">
                                    <div className="card-title is-size-5 is-size-6-mobile">{data.title}</div>
                                    <div className="is-flex is-flex-direction-column pt-1">
                                        <Rating ratingArray={data?.reviews.data} />
                                        <div>
                                            {data.categories?.data.map((cat, i) =>
                                                <p key={i} className='is-size-7 is-inline has-text-dark'>{cat.attributes.name} </p>)

                                            }
                                        </div>
                                    </div>

                                </div>
                                <div className="is-size-5 has-text-weight-semibold">{data.price}$</div>
                            </div>
                        </NavLink>
                        {cart?.some(item => item.id == id) ? <RemoveFromCartBtn id={id} /> : <AddToCartBtn data={data} id={id} />}

                    </div>
                </div>
            
        </>


    )
}

export default ProductCard