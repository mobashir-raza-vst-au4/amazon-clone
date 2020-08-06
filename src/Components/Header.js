import React, { Component } from 'react'
import './../Components/Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {connect} from 'react-redux';
import { auth } from '../firebase';

let getData = (store) => {
    console.log(store)
    return {
        basket: store.basket.basket,
        user: store.basket.user
    }
}

let getFunction = (dispatch) => {
    return {
        logout: dispatch
    }
}

export default connect(getData, getFunction)(class Header extends Component {
    
        logout = () => {
            console.log("hho")
            if(this.props.user){
                auth.signOut();
                let action = {
                    type: "SET_USER",
                    payload: null
                }
                this.props.logout(action)
            }
        }

    render() {
        return (
            <nav className="header"> 
                {/* logo on the left */}
                <Link to="/">
                    <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
                </Link>

                {/* search box */}
                <div className="header__search">
                    <input type="text" className="header__searchInput"/>
                    <SearchIcon className="header__searchIcon"/>
                </div>
                {/* 3 links */}
                <div className="header__nav">
                    {/* 1st link */}
                    <Link to={!this.props.user && "/login"} className="header__link">
                        <div onClick={this.logout} className="header__option">
                            <span className="header__optionLineOne">Hello, {this.props.user}</span>
                            <span className="header__optionLineTwo">{this.props.user ? 'Sign Out' : 'Sign In'}</span>
                        </div>
                    </Link>
                    {/* 2nd link */}
                    <Link to="/" className="header__link">
                        <div className="header__option">
                            <span className="header__optionLineOne">Returns</span>
                            <span className="header__optionLineTwo">& Orders</span>
                        </div>
                    </Link>
                    {/* 3rd link */}
                    <Link to="/" className="header__link">
                        <div className="header__option">
                            <span className="header__optionLineOne">Your</span>
                            <span className="header__optionLineTwo">Prime</span>
                        </div>
                    </Link>
                    {/* 4th link */}
                    <Link to="/checkout" className="header__link">
                        <div className="header__optionBasket">
                            {/* shopping basket icon */}
                            <ShoppingBasketIcon/>
                            {/* Number of items in the basket */}
                            <span className="header__optionLineTwo header__optionBasketCount">{this.props.basket.length}</span>
                        </div>
                    </Link>
                </div>
                {/* basket icon with number */}
            </nav>
        )
    }
})
