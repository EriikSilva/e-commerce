import React from "react";
import "./index.css"
// import api from "./api.json"
import Products from "./components/Products";
import Filter from "./components/Filter";
import Cart from "./components/Cart";
import store from "./store";
import { Provider } from "react-redux";

class App extends React.Component{
    render(){
        
    return(
        <Provider store={store}>
        <div className="grid-container">
            <header>
                <a href="/">E-Commerce</a>
            </header>
            <main>
                <div className="content">
                    <div className="main">
                        <Filter/>
                        <Products/>
                    </div>
                    <div className="sidebar">
                        <Cart/>
                    </div>
                </div>
            </main>
            <footer>
                Feito com carinho por Erik
            </footer>
        </div>
        </Provider>
    )
    }

}

export default App

