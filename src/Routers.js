import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min"
import {Main} from './components/Main/Main'

export const Routers = () => {
    <Switch>
        <Route path="/" exact render={() => <Main/> } />
        <Route path="/torgi" render={()=> {}} /> 
    </Switch>
}