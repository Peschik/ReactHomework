import './app.css'
import MainPage from './main-page/main-page'
import ItemListPage from './items-list-page/aromistico-list-page';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ItemPage from './item-page/item-page';
import GoodsPage from './goods-page/goods-page';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/aromistico_list">
          <ItemListPage />
        </Route> 
        <Route exact path="/aromistico_item">
          <ItemPage />
        </Route>
        <Route exact path="/for_your_pleasure">
          <GoodsPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
