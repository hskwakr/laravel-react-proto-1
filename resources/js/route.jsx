import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Routes,
} from 'react-router-dom';
import Example from './pages/Example';
import Home from './pages/Home';

ReactDOM.render((
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/example' element={<Example />} />
        </Routes>
    </BrowserRouter>
), document.getElementById('app'))
