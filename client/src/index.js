import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'
import Home from './routes/Home'
import Landing from './routes/Landing'
import Login from './routes/Login'
import Register from './routes/Register'

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route
                path='/'
                element={<Landing />}
            >
                <Route
                    path='login'
                    element={<Login />}
                />
                <Route
                    path='register'
                    element={<Register />}
                />
                <Route
                    path='home'
                    element={<Home />}
                />
                <Route
                    path='*'
                    element={
                        <main>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Route>
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
)
