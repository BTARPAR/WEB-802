import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import InventoryEdit from "./components/InventoryEdit";
import Home from "./components/Home";
import InventoryList from "./components/InventoryList";
import "bootstrap/dist/css/bootstrap.min.css"

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path={'/'} exact={true} component={Home}/>
                <Route path={'/inventories'} exact={true} component={InventoryList}/>
                <Route path={'/inventories/:id'} exact={true} component={InventoryEdit}/>
            </Switch>
        </Router>
    )
}

export default App;