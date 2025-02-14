import {Route, Switch} from "react-router-dom/cjs/react-router-dom.min"
import {Main} from './components/Main/MainWarehouse'

import {useState} from "react";
import { Auction } from "./components/Auction/MainAuction";
import { AboutUs } from "./components/AboutUs/MainAboutUs";
import Footer from "./components/Layout/Footer/Footer";
import {Header} from "./components/Layout/Header/Header";
import { ITEMS } from "./consts";


export const Routers = () => {

    const [cartItems, setCartItems] = useState([])
    const [items] = useState(ITEMS)

    const renderMain = () => <Main setCartItems={setCartItems} cartItems={cartItems} item={items} />
    const renderAuction = () => <Auction />
    const renderAboutUs = () => <AboutUs/>

    return <div>
        <header>
        <Header cartItems={cartItems} setCartItems={setCartItems} item={items} />
        </header>
        <Switch>
            <Route path="/" exact render={() => renderMain()}/>
            <Route path="/sklad"  render={() => renderMain()}/>
            <Route path="/torgi" render={() => renderAuction()}/>
            <Route path="/aboutus" render={() => renderAboutUs()}/>
        </Switch>
        <footer>
            <Footer/>
        </footer>
    </div>
}
