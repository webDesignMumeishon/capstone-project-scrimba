import React, {useState} from "react"
import { usePhotos } from "../hooks/usePhotos"
import CartItems from "../components/CartItems"

function Cart() {
    const [btnText, setBtnText] = useState<string>("Place Order")
    const {cartItems, emptyCart} = usePhotos()
    const totalCost = 5.99 * cartItems.length
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})

    const cartItemsElements = cartItems.map(item => {
        return <CartItems item={item}/>
    })

    function placeOrder() : void{
        setBtnText("Ordering...")
        setTimeout(() => {
            console.log("Order Placed")
            emptyCart()
        }, 3000 )
    }


    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemsElements}
            <p className="total-cost">Total: {totalCostDisplay}</p>
           { 
           cartItems.length > 0 && 
            <div className="order-button">
                <button onClick={placeOrder}>{btnText}</button>
            </div>
            }
        </main>
    )
}

export default Cart