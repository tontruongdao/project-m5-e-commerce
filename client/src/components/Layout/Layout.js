import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import HomePage from "../../containers/HomePage";
import ProductsPage from "../../containers/ProductsPage";
import CategoryPage from "../../containers/CategoryPage";
import Nav from "../Nav";
import ProductItemPage from "../../containers/ProductItemPage";

const Layout = () => {
  return (
    <Router>
      <Nav>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/careers">
            <h1>this is the careers page</h1>
          </Route>
          <Route path="/about">
            <h1>this is the about us page</h1>
          </Route>
          <Route exact={true} path="/items/category/:category">
            <CategoryPage />
          </Route>
          <Route exact={true} path="/items/item/:id">
            <ProductItemPage />
          </Route>
          <Route path="/items">
            <ProductsPage />
          </Route>
        </Switch>
      </Nav>
    </Router>
  );
};

export default Layout;
