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
                <a href="/">React SHOPPING</a>
            </header>
            <main>
                <div className="content">
                    <div className="main">
                        <Filter 
                        // count={this.state.products.length}

                        
                        // size={this.state.size}///////////////la em cima 
                        // sort={this.state.sort}
                        // material={this.state.material}
                        // filterProducts={this.filterProducts}
                        // sortProducts={this.sortProducts}
                        // filterMaterial={this.filterMaterial}
                        />
                        <Products 
                        // products={this.state.products} 
                        // addToCart={this.addToCart}
                        />
                    </div>
                    <div className="sidebar">
                        <Cart 
                        // cartItems={this.state.cartItems}
                        // removeFromCart={this.removeFromCart}
                        // createOrder={this.createOrder}
                        />
                    </div>
                </div>
            </main>
            {/* <footer>
                Feito com carinho por Erik
            </footer> */}
        </div>
        </Provider>
    )
    }

}

export default App





/*
    constructor(){
        super();
        this.state = {
            // products: api.products,
            cartItems: JSON.parse(localStorage.getItem("cartItems")) ?
             JSON.parse(localStorage.getItem("cartItems")): [],
            // size:"",   
            // material:"",
            // sort:""
        }
    }

    removeFromCart = (product) =>{
        const cartItems = this.state.cartItems.slice();
        this.setState({
            cartItems: cartItems.filter((x) => x.id !== product.id)
         });

        localStorage.setItem("cartItems", JSON.stringify(cartItems.filter((x) => x.id !== product.id)));
    }   

    createOrder = (order) => {
        alert("need to save order for" + order.name) 
    }

    addToCart = (product) =>{
        const cartItems = this.state.cartItems.slice();

        let alreadyInCart = false;

        cartItems.forEach(item=> {
            if(item.id === product.id){
                item.count++;
                alreadyInCart = true
            }
        });

        if(!alreadyInCart){
            cartItems.push({...product, count: 1});
        }

        this.setState({cartItems})
        localStorage.setItem("cartItems", JSON.stringify(cartItems));

    }



    sortProducts = (event) =>{
        const sort = event.target.value;

        this.setState((state) => ({
            sort: sort,
            products: this.state.products.slice().sort((a,b) => (
                sort === "lowest"?
                ((a.preco > b.preco) ? 1: -1):
                sort === "highest"?
                ((a.preco < b.preco) ? 1: -1):
                ((a.id > b.id) ? 1:-1)
            ))
        }))
    }

    filterProducts = (event)=> {

        if(event.target.value === ""){
            this.setState({size: event.target.value, product:api.products})
        }
        else{
            this.setState({
            size:event.target.value,
            products: api.products.filter((product) => 
            product.categoria.indexOf(event.target.value) >= 0),
        });
        }
    }
    */