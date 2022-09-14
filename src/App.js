import React from "react"
import {BrowserRouter,Route} from 'react-router-dom'
import About from "./pages/About"
import Posts from "./pages/Posts"
import Header from "./components/Header"

const App = () =>{
    return(
        <BrowserRouter>
              <Header />
             <Route path="/about">
                <About/>
            </Route> 
            <Route path="/posts">
                <Posts/>
            </Route> 
        </BrowserRouter>
    );
};

export default App;