import React, {useState, useRef, LegacyRef} from "react"
import { usePhotos } from "../hooks/usePhotos"
import  useHover  from "../hooks/useHover"

import { CartItemsProps } from "../interfaces"



const CartItems: React.FC <CartItemsProps> = ({item}) => {
    const [hovered, ref] = useHover()
    const {removeFromCart} = usePhotos()

    const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"

    return (
        <div className="cart-item">
            <i 
                onClick={() => removeFromCart(item.id)}
                className={iconClassName}
                ref={ref as LegacyRef<HTMLElement>}
            ></i>
            <img src={item.url} width="130px" alt="item-in-cart"/>
            <p>$5.99</p>
        </div>
    )
}

export default CartItems