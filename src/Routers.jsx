import {Route, Switch} from "react-router-dom/cjs/react-router-dom.min"
import {Main} from './components/Main/Main'
import {Layout} from "./components/Layout/Layout"
import {useState} from "react";

export const Routers = () => {

    const [cartItems, setCartItems] = useState([])

    const renderMain = () => <Main setCartItems={setCartItems} cartItems={cartItems} />

    return <div><Layout cartItems={cartItems} setCartItems={setCartItems} />
        <Switch>
            <Route path="/" exact render={() => renderMain()}/>
            <Route path="/sklad"  render={() => renderMain()}/>
            <Route path="/torgi" render={() => {
            }}/>
            <Route path="/aboutus" render={() => {
            }}/>
            <Route path="/contact" render={() => {
            }}/>
        </Switch>
    </div>
}