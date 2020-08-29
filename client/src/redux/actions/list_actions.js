export const addItem = (name, price) =>{
    return{
        type:'ADD_ITEM',
        payload:{
            name:name,
            price:price
        }
    }
}

export const removeItem = (index) =>{
    return{
        type:'REMOVE_ITEM',
        payload:{
            index:index
        }
    }
}

export const editItem = (name, price, index) =>{
    return{
        type:'EDIT_ITEM',
        payload:{
            name:name,
            price:price,
            index:index
        }
    }
}