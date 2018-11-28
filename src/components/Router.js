import React from 'react';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';

import Home from "./Home";
import Start from "./Start";
import NotFound from "./NotFound";


const Router = () => (
    <BrowserRouter>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/start" component={Start} />
            <Route path="/404" component={NotFound} />
        </div>
    </BrowserRouter>
)

export default Router;