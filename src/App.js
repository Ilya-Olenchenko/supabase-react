import React from "react"
import { BrowserRouter } from 'react-router-dom'
import Header from "./components/Header"
import AppRouter from "./components/AppRouter"

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <AppRouter />
        </BrowserRouter>
    );
};

export default App;