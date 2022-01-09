import React from "react"
import {Link} from "react-router-dom"
import { usePhotos } from "../hooks/usePhotos"


function Header() {
    const {cartItems} = usePhotos()
    const hasCartItems = !!cartItems.length

    return (
        <header>
            <Link to="/">
                <h2>Pic Some</h2>   
            </Link>
            <Link to="/cart">
                {hasCartItems ?
                <i className="ri-shopping-cart-fill ri-fw ri-2x"></i> : 
                <i className="ri-shopping-cart-line ri-fw ri-2x"></i>}
            </Link>
        </header>
    )
}

export default Header