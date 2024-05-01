import { useState } from "react"
import Header from "../Header/Header"
import { ITEMS } from "../Main/consts"



export const Layout = () => {
    const [items] = useState(ITEMS)


    return <Header item={items}  />
}
