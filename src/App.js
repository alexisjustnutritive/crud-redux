import React from 'react';
// redux
import { Provider } from 'react-redux';
import store from './store';
// router dom
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components
import Header from './components/Header';
import Products from './components/Products';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';

function App() {

    return (
        <Router>
            <Provider store={ store }>
                <Header />
                <div className="container p-4">
                    <Switch>
                        <Route exact path='/' component={ Products } />
                        <Route exact path='/product/add' component={ AddProduct } />
                        <Route exact path='/product/edit/:id' component={ EditProduct } />
                        <Route exact path='*' component={ Products } />
                    </Switch>
                </div>
            </Provider>
        </Router>
    );
}

export default App;
