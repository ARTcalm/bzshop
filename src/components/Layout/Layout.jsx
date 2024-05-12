import {useState} from "react"
import Header from "../Header/Header"
import {ITEMS} from "../../consts"


export const Layout = (props) => {
    const {cartItems, setCartItems} = props

    const [items] = useState(ITEMS)


    return <Header cartItems={cartItems} setCartItems={setCartItems} item={items}  />
}