import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Routes,
} from 'react-router-dom';
import Example from './pages/Example';

ReactDOM.render((
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Example />} />
        </Routes>
    </BrowserRouter>
), document.getElementById('app'))
