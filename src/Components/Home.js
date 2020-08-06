import React, { Component } from 'react';
import './../Components/Home.css';
import Product from './Product';


export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />
                <div className="home__row">
                    <Product 
                        id="12456655"
                        title="GOOVI by ONSON Robot Vacuum, 2000Pa Robotic Vacuum Cleaner (Slim) Max Suction, Quiet Multiple Cleaning Modes, Self-Charging"
                        price={155.54}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/81gVuEzQfAL._SCLZZZZZZZ__AA210_.jpg"
                    />
                    <Product 
                        id="54886698"
                        title="Single Serve Coffee Maker Brewer for K-Cup Pod & Ground Coffee, Compact Design Thermal Drip Instant Coffee Machine with"
                        price={49.95}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/51R6k-hLXPL._SCLZZZZZZZ___AA210_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id="8955666"
                        title="iPhone Charger, WELAKER Data Sync Transfer Lightning Cable 2Pack 6ft with Dual Port Wall Charger Adapter Charging Block"
                        price={10.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/31-zE6h1tjL._SCLZZZZZZZ___AA210_.jpg"
                    />
                    <Product 
                        id="4586652"
                        title="TaoTronics Projector Screen with Stand,Indoor Outdoor PVC Projection Screen 4K HD 100'' 16: 9 Wrinkle-Free Design(Easy to"
                        price={110.99}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/51eW-unUkeL._SCLZZZZZZZ___AA210_.jpg"
                    />
                    <Product 
                        id="5895566"
                        title="Diaper Bag Backpack, RUVALINO Multifunction Travel Back Pack Large Baby Bag"
                        price={29.99}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/619BFeeFKIL._SCLZZZZZZZ___AA210_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id="1556987"
                        title="SAMSUNG 32-inch Class Frame QLED LS03 Series - FHD Dual LED Quantum HDR Smart TV with Alexa Built-in (QN32LS03TBFXZA, 2020 Model)"
                        price={497.88}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/51NKhnjhpGL._AC_UY218_.jpg"
                    />    
                </div>
            </div>
        )
    }
}
