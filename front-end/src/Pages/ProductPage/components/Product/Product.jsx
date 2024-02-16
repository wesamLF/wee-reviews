import React from 'react'
import { NavLink } from 'react-router-dom'
import { useCartContext } from "../../../../context/CartContext";
import AddToCartBtn from '../../../../components/AddToCartBtn/AddToCartBtn'
import RemoveFromCartBtn from '../../../../components/RemoveFromCartBtn/RemoveFromCartBtn'
import "./product.css"
import Rating from '../../../../components/Rating/Rating';
const Product = ({ data, id }) => {
    const { cart } = useCartContext()
    return (
        <div className="container pt-6">
            <div >
                <nav className="breadcrumb is-hidden-mobile mb-0 px-6" aria-label="breadcrumbs">
                    <ul>
                        <li ><NavLink to={"../home"} className='dark--text--color'>Home</NavLink></li>
                        <li ><NavLink to={"../market"} className='dark--text--color'>Market</NavLink></li>
                        <li className="is-active"><a href="#" aria-current="page">{data.title}</a></li>
                    </ul>
                </nav>
                <div className="">
                    <div className="columns is-mobile is-multiline m-0">
                        <div className="product-img column  is-7-desktop is-5-tablet is-12-mobile  " >
                            <img className='' src={`${data.image.data.attributes.url}`} alt='product image' />

                        </div>
                        <div className="column is-5-desktop is-7-tablet is-12-mobile">
                            <h2 className="title">
                                {data.title}
                            </h2>
                            <p className="subtitle is-size-6">{data.desc}
                            </p>
                            <Rating ratingArray={data.reviews.data} />
                            <div className="categories ">
                                {data.categories.data.map((cat, i) =>
                                    <NavLink key={i} to={"../../market"} className=" is-primary px-2">
                                        {cat.attributes.name}
                                    </NavLink>

                                )}
                            </div>
                            <div className=" is-flex  is-flex-direction-column">
                                <h4 className='is-size-2 is-size-3-mobile'>
                                    ${data.price}
                                </h4>


                                {cart?.some(item => item.id == id) ? <RemoveFromCartBtn id={id} /> :
                                    <AddToCartBtn data={data} id={id} />}

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>)
}

export default Product