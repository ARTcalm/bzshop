import {Route, Switch} from "react-router-dom/cjs/react-router-dom.min"
import {Main} from './components/Main/MainWarehouse'
import {Layout} from "./components/Layout/Layout"
import {useState} from "react";
import { Auction } from "./components/Auction/MainAuction";
import { AboutUs } from "./components/AboutUs/MainAboutUs";


export const Routers = () => {

    const [cartItems, setCartItems] = useState([])

    const renderMain = () => <Main setCartItems={setCartItems} cartItems={cartItems} />
    const renderAuction = () => <Auction />
    const renderAboutUs = () => <AboutUs/>

    return <div><Layout cartItems={cartItems} setCartItems={setCartItems} />
        <Switch>
            <Route path="/" exact render={() => renderMain()}/>
            <Route path="/sklad"  render={() => renderMain()}/>
            <Route path="/torgi" render={() => renderAuction()}/>
            <Route path="/aboutus" render={() => renderAboutUs()}/>
        </Switch>
    </div>
}
