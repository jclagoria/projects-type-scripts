import * as React from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";

import Header from "./Header";
import AdminPage from "./AdminPage";
import ProductsPage from "./ProductsPage";
import ProdcutPage from "./ProdcutPage";
import NotFoundPage from "./NotFoundPage";

const Routes: React.FC = () => {
    return(
        <Router>
            <div>
                <Header  />
                <Switch>
                    <Redirect exact={true} from="/" to="/products"/>
                    <Route exact={true} path="/products" component={ProductsPage}/>
                    <Route path="/products/:id" component={ProdcutPage}/>
                    <Route path="/admin" component={AdminPage}/>
                    <Route component={NotFoundPage}/>
                </Switch>
            </div>
        </Router>
    );
};

export default Routes;