import React, { Component} from "react";
import { connect } from "react-redux";
import {filterProducts, sortProducts} from "../actions/productActions"




class Filter extends Component{
    render(){
        return(
            !this.props.filterProducts? ( 
            <div>Loading...</div>
            ):(
            <div className="filter">
            <div className="filter-result">
 
                {/* {this.props.filteredProducts.length} {" "}  */}

                {/* BUG */}
                Produtos
                  
            </div>
            <div className="filter-sort">
                Preço:
                <select value={this.props.sort} onChange={(e)=> 
                    this.props.sortProducts(this.props.filteredProducts, e.target.value)}>
                        <option value="All">Todos</option>
                        <option value="lowest">Mais Barato</option>
                        <option value="highest">Mais Caro</option>
                </select>
            </div>
            
            
              
          

            <div className="filter-categoria">
                    Categoria:
                    <select value={this.props.size} 
                    onChange={(e) => this.props.filterProducts(this.props.products, e.target.value)}>
                        <option value="">Todos</option>
                        <option value="Fantastic">Fantastic</option>
                        <option value="Refined">Refined</option>
                        <option value="Practical">Practical</option>
                        <option value="Small">Small</option>
                        <option value="Sleek">Sleek</option>
                        <option value="Generic">Generic</option>
                        <option value="Handmade">Handmade</option>
                        <option value="Sleek">Sleek</option>
                        <option value="Licensed">Licensed</option>
                        <option value="Handcrafted">Handcrafted</option>
                        <option value="Rustic">Rustic</option>
                        <option value="Intelligent">Intelligent</option>
                        <option value="Tasty">Tasty</option>
                        <option value="Awesome">Awesome</option>
                        <option value="Incredible">Incredible</option>
                        <option value="Ergonomic">Ergonomic</option>
                        <option value="Gorgeous">Gorgeous</option>
                        <option value="Unbranded">Unbranded</option>                   
                    </select>
                </div>

      
            </div>

            )
        );
    }
}

export default connect((state) => ({
    categoria: state.products.size,
    id: state.products.id,
    sort: state.products.sort,
    products: state.products.items,
    filteredProducts: state.products.filteredItems,

}), 
{
    filterProducts,
    sortProducts
}
)(Filter);