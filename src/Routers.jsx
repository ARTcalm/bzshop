import {Route, Switch} from "react-router-dom/cjs/react-router-dom.min"
import {Main} from './components/Main/Main'
import {Layout} from "./components/Layout/Layout"

export const Routers = () => {
    return <div><Layout/>
        <Switch>
            <Route path="/" exact render={() => <Main/>}/>
            <Route path="/sklad"  render={() => <Main/>}/>
            <Route path="/torgi" render={() => {
            }}/>
            <Route path="/aboutus" render={() => {
            }}/>
            <Route path="/contact" render={() => {
            }}/>
        </Switch>
    </div>
}