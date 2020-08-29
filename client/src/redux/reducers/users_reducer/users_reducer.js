export const users_reducer = (state = [], action) =>{
    switch (action.type){
        case "CREATE_USER":
            return [...state, {name:action.payload.name, password:action.payload.password, list:[]}]
        case "ADD_ITEM":
            return state.map((user,index) =>{
                if(user.name === action.payload.name && user.password === action.payload.password){
                    return{
                        name:action.payload.name,
                        password:action.payload.password,
                        list:[...user.list, action.payload.item]
                    }
                }else{
                    return{
                        name:user.name,
                        password:user.password,
                        list:user.list
                    }
                }
            })
        case "REMOVE_ITEM":
            return state.map((user, index) =>{
                if(user.name === action.payload.name && user.password === action.payload.password){
                    let newArray = [...user.list]
                    newArray.splice(action.payload.index, 1)
                    return{
                        name:user.name,
                        password:user.password,
                        list:newArray
                    }
                }else{
                    return{
                        name:user.name,
                        password:user.password,
                        list:user.list
                    }
                }
            })
        case "EDIT_ITEM":
            return state.map((user, index) =>{
                if(user.name === action.payload.name && user.password === action.payload.password){
                    return {
                        name:user.name,
                        password:user.password,
                        list:user.list.map((item, index) =>{
                            if(index === action.payload.index){
                                return{
                                    name:action.payload.item.name,
                                    price:action.payload.item.price
                                }
                            }else{
                                return{
                                    name:item.name,
                                    price:item.price
                                }
                            }
                        })   
                    }
                }else{
                    return{
                        name:user.name,
                        password:user.password,
                        list:user.list
                    }
                }
            })
        default:
            return state
    }
}

export const loggedInReducer = (state = {name:null, password:null}, action) =>{
    switch (action.type){
        case 'SET_CURRENT_USER':
            return {name:action.payload.name, password:action.payload.password}
        case 'LOGOUT':
            return {name:null, password:null}
        default:
            return state
    }
}