import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {MEDIA_LIST} from "./constant/medialist";
import Banner from "./component/Banner";


const App = () => {
    //Insert router, links here
    const renderMedia = MEDIA_LIST.map((media) => {
        return (
            <Link to={`/${media.name}`}>
                <img src={media.src} className={media.class} key={media.name}/>
            </Link>
        )
    })

    return (
        <Router>
            <div className={'container'}>
                <h2 style={{marginLeft: '40px', marginBottom: '2rem'}}>TV APPS</h2>
                <div>
                    {renderMedia}
                </div>
                <Switch>
                    <Route path="/:id" children={<Banner/>}/>
                </Switch>
            </div>
        </Router>

    )
}


export default App