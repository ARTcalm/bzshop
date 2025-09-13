import {Route, Switch} from "react-router-dom/cjs/react-router-dom.min"
import {Main} from './components/Main/MainWarehouse'
import {useState} from "react";
import { Auction } from "./components/Auction/AddToAuction";
import { AboutUs } from "./components/AboutUs/MainAboutUs";
import { Cart } from "./components/ShoppingCart/MainShoppingCart";
import {Footer} from "./components/Layout/Footer/Footer";
import {Header} from "./components/Layout/Header/Header";
import { ITEMS } from "./consts";
import { Modal } from "./components/Layout/Intro/Modal";



export const Routers = () => {

    const [cartItems, setCartItems] = useState([])
    const [items] = useState(ITEMS)
    let count = cartItems.length
    
    const renderMain = () => <Main setCartItems={setCartItems} cartItems={cartItems} item={items}  />
    const renderAuction = () => <Auction />
    const renderAboutUs = () => <AboutUs/>
    const renderCart = () => <Cart cartItems={cartItems} setCartItems={setCartItems} item={items} />

    return <div>
        <header>
        <Header count={count} />
        </header>
        <main>
            <Switch>
                <Route path="/" exact render={() => renderMain()}/>
                <Route path="/sklad"  render={() => renderMain()}/>
                <Route path="/torgi" render={() => renderAuction()}/>
                <Route path="/aboutus" render={() => renderAboutUs()}/>
                <Route path="/cart" render={()=> renderCart()} />
            </Switch>
            <Modal />
        </main>
        <footer>
            <Footer/>
        </footer>
        
    </div>
}
