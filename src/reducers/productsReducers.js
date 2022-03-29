const { 
    FETCH_PRODUCTS,
    FILTER_PRODUCTS_BY_CATEGORIA,
    ORDER_PRODUCTS_BY_PRECO,
    FILTER_PRODUCTS_BY_NAME
      
    } = require("../types");

export const productsReducer = (state = {}, action) => {
    switch (action.type){
        case ORDER_PRODUCTS_BY_PRECO:
            return{
                ...state,
                sort:action.payload.sort,
                filteredItems:action.payload.items
            }
        case FILTER_PRODUCTS_BY_CATEGORIA:
            return {
                ...state,
                size: action.payload.size,
                filteredItems: action.payload.items,
            }

        case FILTER_PRODUCTS_BY_NAME:
            return {
                ...state,
                search:action.payload.search,
                filteredItems:action.payload.items
            }

            case FETCH_PRODUCTS:
                return {
                    items: action.payload,
                    filteredItems: action.payload
    
                };
        default:    
            return state
    }
}