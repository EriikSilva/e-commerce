import React, { Component } from "react";
import { connect } from "react-redux";
import  Fade  from "react-reveal/Fade";
import { removeFromCart } from "../actions/cartActions";
import {createOrder, clearOrder} from "../actions/orderActions"
import Modal from "react-modal";
import Zoom  from "react-reveal/Zoom";
import { FiTrash2 } from "react-icons/fi";





class Cart extends Component{

    constructor(props){
       super(props);
         this.state = {
         name: "",
         email: "",
         address: "",
         showCheckout: false
        }
    }
    //pegar o valor do input
    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    //criar ordem para o form
    createOrder = (e) => {
        e.preventDefault();
        const order = {
        name: this.state.name,
        email: this.state.email,
        address: this.state.address,
        cartItems: this.props.cartItems,
        total: this.props.cartItems.reduce((a,c) => ( a + c.preco*c.count), 0)
        };
        this.props.createOrder(order)
    } 

    closeModal = () => {
        this.props.clearOrder();
     }

    render(){
        //recuperando as props do objeto dentro do render
        const {cartItems, order} = this.props;

    return(
        <div className="cart-header">

        
        {cartItems.length === 0 ? (<div>Carrinho Vazio</div>
        ):(
        <div>Você tem {cartItems.length} produto(s) no carrinho</div>)}
            
            {
                order && 
                <Modal isOpen={true} onRequestClose={this.closeModal} >
                    <Zoom>
                    <button className="close-modal" onClick={this.closeModal}>X</button>
                    
                    <div className="order-details">
                        <h3 className="success-message">Compra realizada com sucesso.</h3>
                        <h2>Código do pedido: {order.id}</h2>
                        <ul>
                            <li>
                            <div>Nome e Sobrenome:</div>
                                <div>{order.name}</div>
                            </li>

                            <li>
                            <div>Email:</div>
                                <div>{order.email}</div>
                            </li>
                            
                            <li>
                                <div>Endereço de entrega:</div>
                                <div>{order.address}</div>
                            </li>
                            
                            <li>
                                <div>Comprado em:</div>
                                <div>{order.createdAt}</div>
                            </li>
                            
                            <li>
                                <div>Total da Compra:</div>
                                <div>{"R$: "}{order.total}</div>
                            </li>
                            
                            <li>
                                <div>Produtos Comprados:</div>
                            <div>
                                {order.cartItems.map((x) => (
                                <div>
                                    {x.count} {" x "} {x.nome}
                                </div>
                                 ))}
                            </div>
                            </li>
                        </ul>
                    </div>
                 </Zoom>
                </Modal>
            }

            <div>
                <div className="cart">
                    <Fade left cascade>
                    <ul className="cart-items">
                        {cartItems.map(item =>(

                            <li key={item.id}>
                                <div>
                                    <img src={item.imagem} alt={item.nome}/>
                                </div>
                                <div>
                                    <p>{item.nome}</p>
                                </div>
                                <div>
                                    <p>{"R$" + item.preco}</p>
                                </div>
                                <div className="right">

                                {"Quant.: " + item.count} {" "}

                                <button onClick={()=> this.props.removeFromCart(item)}>
                                    <FiTrash2/>
                                </button>
                                </div>

                            </li>
                        ))}
                    </ul>
                    </Fade>
                </div>
                {/* se o carrinho estiver vazio */}
              {cartItems.length!==0 &&(
                  <div>
                <div className="cart">
                    <div className="total">
                        <div>
                            Total:{"R$ "}
                         
                            {cartItems.reduce((a, c) => a + c.preco * c.count, 0)}
                        </div>
                    </div>
                   
                    <button onClick={() => {this.setState({showCheckout:true})}} 
                    className="button-buy-cart">
                          Comprar
                    </button>
                    
              </div>
                {
                this.state.showCheckout && (
                    
                    <Fade right cascade>
                    <div className="cart">
                        <form onSubmit={this.createOrder}>
                            <ul className="form-container">
                                <li>
                                <label>Nome: </label>
                                <input type="text" 
                                        name="name"
                                        required 
                                        onChange={this.handleInput}>
                                 </input>
                                </li>

                                <li>
                                 <label>Email: </label>
                                <input
                                        name="email"
                                        type="email" 
                                        required 
                                        onChange={this.handleInput}>
                                 </input>
                                </li>

                                <li>
                                <label>Endereço de entrega: </label>
                                <input 
                                    name="address"
                                    type="text" 
                                    required 
                                    onChange={this.handleInput}>
                                 </input>
                                </li>

                                <li>
                                    <button className="button-end" type="submit">
                                        Finalizar Compra
                                    </button>
                                </li>
                            </ul>

                        </form>
                    </div>
                    </Fade>
                )}
                </div>
              )}
            </div>
        </div>

        )
    }

}

export default connect(
    (state)=> ({
    order: state.order.order,
    cartItems: state.cart.cartItems,

}),
    {removeFromCart, createOrder, clearOrder}
)(Cart);