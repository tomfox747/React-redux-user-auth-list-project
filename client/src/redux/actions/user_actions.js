export const create_user = (name, password) =>{
    return{
        type:'CREATE_USER',
        payload:{
            name:name,
            password:password
        }
    }
}

export const login = (name, password) =>{
    return{
        type:'SET_CURRENT_USER',
        payload:{
            name:name,
            password:password
        }
    }
}

export const add_to_user_list = (name, password, item) =>{
    return{
        type:'ADD_ITEM',
        payload:{
            name:name,
            password:password,
            item:item
        }
    }
}

export const remove_from_user_list = (name, password, index) =>{
    return{
        type:'REMOVE_ITEM',
        payload:{
            name:name,
            password:password,
            index:index
        }
    }
}

export const edit_item_in_list = (name, password, index, item) =>{
    return{
        type:'EDIT_ITEM',
        payload:{
            name:name,
            password:password,
            index:index,
            item:item
        }
    }
}

export const logout = () =>{
    return{
        type:'LOGOUT'
    }
}