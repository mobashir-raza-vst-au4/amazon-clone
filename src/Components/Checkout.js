import React, { Component } from 'react';
import "./../Components/Checkout.css";
import {connect} from 'react-redux';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

let getData = (store) => {
    return {
        basket: store.basket.basket
    }
}

let getFunction = (dispatch) => {
    return {
        dispatch
    }
}

export default connect(getData, getFunction)(class Checkout extends Component {
    render() {
        return (
            <div className="checkout">
                <div className="checkout__left">
                    <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._C8423492668_.jpg" alt="" />
                    {this.props.basket.length === 0 &&
                    <div>
                        <h2>Your Shopping Cart is empty</h2>
                        <p>
                            You have no items in your cart. To buy one or more items, click "Add to Cart" next to the item.
                        </p>
                    </div>
                    }
                    {this.props.basket.length >= 1 &&
                    <div>
                        <h2 className="checkout__title">Your Shopping Cart</h2>
                        {/* List out all of the Checkout Products */}
                        {this.props.basket && this.props.basket.map((items, index) => {
                            console.log("items>>",items)
                            return(
                                // import CheckoutProduct
                                <CheckoutProduct id={items.id} image={items.image} price={items.price} rating={items.rating} title={items.title} />
                            )
                        })}
                    </div>
                    }      
                </div>
                {this.props.basket.length > 0 && 
                    <div className="checkout__right">
                        <Subtotal/>
                    </div>
                }
            </div>
        )
    }
})
