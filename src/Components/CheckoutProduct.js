import React, { Component } from 'react';
import './../Components/CheckoutProduct.css';
import {connect} from 'react-redux';

let getData = (store) => {
    return {
        store
    }
}

let getFunction = (dispatch) => {
    return {
        removeFromBasket :dispatch
    }
}

export default connect(getData, getFunction)(class CheckoutProduct extends Component {
    removeFromCart = (id) => {
        console.log(id)
        let action = {
            type: "REMOVE_FROM_BASKET",
            payload: id
        }
        this.props.removeFromBasket(action);
    }
    render() {
        return (
            <div className="checkoutProduct">
                <img className="checkoutProduct__image" src={this.props.image} alt=""/>
                <div className="checkoutProduct__info">
                    <p className="checkoutProduct__title">{this.props.title}</p>
                    <p className="checkoutProduct__price">
                        <small>$</small>
                        <strong>{this.props.price}</strong>
                    </p>
                    <div className="checkoutProduct__rating">
                        {Array(this.props.rating).fill().map((_,index) => {
                            return(
                                <p key={index}>⭐</p>
                            )   
                        })}
                    </div>
                    <button onClick={() => {this.removeFromCart(this.props.id)}}>Remove from Cart</button>
                </div>
            </div>
        )
    }
})
