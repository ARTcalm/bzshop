import { Redirect } from "react-router-dom/cjs/react-router-dom.min"
import { Routers } from "./Routers"
import { useEffect } from "react"

export const App = () => {
    useEffect(() => {<Redirect push to={'/sklad'}/>},[])
    return <Routers />
}