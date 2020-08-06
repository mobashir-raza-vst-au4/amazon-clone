import React, { Component } from 'react'
import './../Components/Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import {connect} from 'react-redux';

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
export default connect(getData, getFunction)(class Subtotal extends Component {
    
    render() {
        var getTotal = `${this.props.basket.reduce((amount, item) => {
            // console.log(amount, item)
            return amount + item.price 
        },0)}`
        return (
            <div className="subtotal">
                {/* price */}
                <p>
                    Subtotal({this.props.basket.length} items): {<strong><CurrencyFormat decimalScale={2} value={getTotal} displayType={'text'} thousandSeparator={true} prefix={'$'}/></strong>}
                </p>
                
                <small className="subtotal__gift">
                    <input className="subtotal__checkbox" type="checkbox"/>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/checkout/gifts_icon._CB480856104_.png" />
                    <span>This order contains a gift</span>
                </small>
                <button>Proceed to Checkout</button>
            </div>
        )
    }
})
