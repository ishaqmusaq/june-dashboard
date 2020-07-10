import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import editStartup from './component/editStartup';
import { startupForm } from './component/startupForm';


const Router = () => {
    return (
        <BrowserRouter>
            <Route exact path='/' component={App} />
            <Route path='/edit/:id' component={editStartup} />
            <Route path='/add' component={startupForm} />
        </BrowserRouter>
    );
}

export default Router;