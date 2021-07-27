import React from "react";
import {Link, Route, Switch, useRouteMatch} from "react-router-dom";
import Topic from "./Topic";

function Topics() {
    let match = useRouteMatch();
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link
                        to={`${match.url}/cats`}>Cats</Link>
                </li>
                <li>
                    <Link to={`${match.url}/dogs`}>
                        Dogs
                    </Link>
                </li>
            </ul>
            <Switch>
                <Route path={`${match.path}/:topicId`}>
                    <Topic />
                </Route>
                <Route path={match.path}>
                    <h3>Please select a topic.</h3>
                </Route>
            </Switch>
        </div>
    );
}

export default Topics