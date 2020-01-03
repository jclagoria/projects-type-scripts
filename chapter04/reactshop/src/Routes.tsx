import * as React from "react";

import {BrowserRouter as Router, RouteComponentProps, Redirect, Route, Switch} from "react-router-dom";
import { CSSTransition, TransitionGroup  } from "react-transition-group";

import Header from "./Header";
import AdminPage from "./AdminPage";
import ProductsPage from "./ProductsPage";
import ProdcutPage from "./ProdcutPage";
import NotFoundPage from "./NotFoundPage";
import LoginPage from "./Login";

const RoutesWrap: React.FC = () => {
    return (
        <Router>
            <Route component={Routes}/>
        </Router>
    );
};

const Routes: React.FC<RouteComponentProps> = props => {

    const [loggedIn, setLoggeddIn] = React.useState(true);

    return(
        <div>
            <Header  />
            <TransitionGroup>
                <CSSTransition key={props.location.key}
                               timeout={500}
                                classNames="animate">
                        <Switch>
                            <Redirect exact={true} from="/" to="/products"/>
                            <Route exact={true} path="/products" component={ProductsPage}/>
                            <Route path="/products/:id" component={ProdcutPage}/>
                            <Route path="/admin">
                                {
                                    loggedIn ? <AdminPage/> : <Redirect to="/login" />
                                }
                            </Route>
                            <Route path="/login" component={LoginPage} />
                            <Route component={NotFoundPage}/>
                        </Switch>

                </CSSTransition>
            </TransitionGroup>
        </div>
    );
};

export default RoutesWrap;