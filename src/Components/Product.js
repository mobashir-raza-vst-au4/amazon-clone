import React, { Component } from 'react'
import './../Components/Product.css';
import {connect} from 'react-redux';

let getData = (store) => {
    return {
        store
    }
}

let getFunction = (dispatch) => {
    return {
        addToBasket: dispatch
    }
}
  
export default connect(getData, getFunction)(class Product extends Component {

    addToCart = (id, title, image, price, rating) => {
        let action = {
            type: "ADD_TO_BASKET",
            payload: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        }
        this.props.addToBasket(action)
    }
    render() {
        return (
            <div className="product">
                <div className="product__info">
                    <p>{this.props.title}</p>
                    <p className="product__price">
                        <small>$</small>
                        <strong>{this.props.price}</strong>
                    </p>
                    <div className="product__rating">
                        {Array(this.props.rating).fill().map((_,index) => {
                            return(
                                <p key={index}>⭐</p>
                            )   
                        })}
                    </div>
                </div>
                <img src={this.props.image} alt="" />
                <button onClick={() => {this.addToCart(this.props.id, this.props.title, this.props.image, this.props.price, this.props.rating)}}>Add to Cart</button> 
            </div>
        )
    }
})
