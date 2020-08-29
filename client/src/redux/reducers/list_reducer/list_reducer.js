const list_reducer = (state = [], action) =>{
    switch(action.type){
        //case 'ADD_ITEM':
        //    return [...state, {name:action.payload.name, price:action.payload.price}]

        case 'REMOVE_ITEM':
            let newArray = [...state].splice(action.payload.index, 1)
            return newArray

        case 'EDIT_ITEM':
            return state.map((item, index) =>{
                if(index === action.payload.index){
                    return Object.assign({}, item, {
                        name:action.payload.name,
                        price:action.payload.price
                      })
                }else{
                    return item
                }
            })
        default:
            return state
    }
}

export default list_reducer 