import { FETCH_PRODUCTS,
       FILTER_PRODUCTS_BY_CATEGORIA,
         ORDER_PRODUCTS_BY_PRECO,
      
} from "../types"

export const fetchProducts = () => async (dispatch) => {
    const res = await fetch("/api/products");
    const data = await res.json();
    //console.log(data);
    dispatch({
      type: FETCH_PRODUCTS,
      payload: data,
    });
};


export const filterProducts = (products, size) => async (dispatch)=>{
  dispatch({
    type: FILTER_PRODUCTS_BY_CATEGORIA,
    payload: {
      size: size,
      items: size === "" ? products:
      products.filter(x => x.categoria.indexOf(size) >= 0)
    }
  })
}



export const sortProducts = (filteredProducts, sort) => (dispatch) => {

  const sortedProducts = filteredProducts.slice();

  if(sort === "All"){
    sortedProducts.sort((a,b) => (a.id > b.id? 1: -1));
  }else{
    sortedProducts.sort((a,b) =>  (
      sort === "lowest" ?
       a.preco > b.preco
       ?1
       :-1
       :a.preco > b.preco
       ?-1
       :1
    ))
  }
  dispatch(
    {
      type:ORDER_PRODUCTS_BY_PRECO,
      payload:{
        sort:sort,
        items: sortedProducts
      }
    }
  )
}