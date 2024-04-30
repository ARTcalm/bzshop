import { useState } from "react"
import Header from "../Header"
import { ITEMS } from "../consts"



export const Layout = () => {
    const [items] = useState(ITEMS)


    return <Header item={items}  />
}
