import React, { Component }from "react";
import "../api.json"
import Fade from "react-reveal/Fade"
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom"
import { connect } from "react-redux";
import {fetchProducts} from "../actions/productActions"
import {addToCart}  from "../actions/cartActions"
import { FaCartPlus} from "react-icons/fa";


class Products extends Component{

    constructor(props){
        super(props);
        this.state = {
            product: null
        }
    }

    componentDidMount(){
        this.props.fetchProducts();
    }

    openModal = (product) =>{
        this.setState({product})
    }

    closeModal = () => {
        this.setState({product:null});
    }

    render(){
        const {product} = this.state;

        return(
            <div>
                <Fade bottom cascade>
                {
                !this.props.products ? (<div>Carregando...</div>):( 
                <ul className="products">

                {this.props.products.map(product => (
                           <li key={product.id}>
                           <div className="product">
                           <a href={"#" + product.id} 
                           onClick={() => this.openModal(product)}>
                               <img className="product-img" src={product.imagem} alt={product.nome} />
                           </a>
                            <div className="product-principal">
                           <div className="product-name">
                            {product.nome}
                           </div>
                         
                           
                           <div className="product-category">
                               Categoria: {product.categoria}
                           </div>

                           <div className="product-material">
                               Material: {product.material}
                           </div>

                           <div className="product-departamento">
                              Departamento:{product.departamento}
                           </div>

                           <div className="product-price">
                               R$:{product.preco}
                            
                           </div>
                        <button onClick={()=> 
                            this.props.addToCart(product)}
                             className="button primary">   
                            <FaCartPlus/> Adicionar ao carrinho
                        </button>
                        </div>
                    
                    </div>
                           
                    </li>
                )
                )};
                </ul>)}
              
                </Fade>
                {
                    product && (
                        <Modal  isOpen={true} onRequestClose={this.closeModal}>  
                            <Zoom>
                             
                                <button className="close-modal" onClick={this.closeModal}>X</button>
                                <div className="product-details">
                                    <div>
                                   
                                    <div className="descricao-modal"> 
                                        <img src={product.imagem} alt={product.nome}/>
                                            <h1>Descrição</h1>
                                            <hr></hr>
                                               <h3>{product.descricao}</h3>
                                        </div>
                                    </div>
                                   

                                    
                                    <div className="product-details-description">
                                       
                                        <h1> {product.nome}</h1>
                                                          
                                        <hr></hr>
                                  
                                        <h2>Categoria: <h3>{product.categoria}</h3></h2>

                                        <hr></hr>
                                        <h2>Material: <h3> {product.material}</h3></h2> 
                                        <hr></hr>
                                       <h2>Departamento de:<h3> {product.departamento}</h3></h2>
                                       <hr></hr>
                                       <h3> {"Por Apenas: "} <br></br> <h2 className="modal-price">{"R$: "} {product.preco}</h2></h3>

                                       <div>
                                          
                                           <button className="button-modal" onClick={(e)=>{
                                               this.props.addToCart(product)
                                               this.closeModal()
                                           }}>Adicionar ao carrinho</button>
                                       </div>
                                       
                                    </div>
                                </div>
                              
                            </Zoom>
                              
                        </Modal>
                    )
                }
            </div>
        )
    }
}

export default connect((state)=>({products: state.products.filteredItems}),{
    fetchProducts,
    addToCart
})(Products);