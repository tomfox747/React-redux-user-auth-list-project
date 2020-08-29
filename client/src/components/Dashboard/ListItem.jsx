import React,{useState} from 'react'

import {useDispatch, useSelector} from 'react-redux'
import {remove_from_user_list, edit_item_in_list} from '../../redux/actions/user_actions'
import {removeItem, editItem} from '../../redux/actions/list_actions'

const ListItem = ({name, price, index}) =>{
    const dispatcher = useDispatch()
    const loggedIn = useSelector(state => state.loggedIn)
    const [isEditing, setIsEditing] = useState(false)
    const [editedItem, setEditedItem] = useState({name:name, price:price})

    const deleteItemFunction = () =>{
        console.log("deleted item")
        dispatcher(remove_from_user_list(
            loggedIn.name,
            loggedIn.password,
            index
        ))
        //dispatcher(removeItem(
        //    index
        //))
    }
    const update = () =>{
        console.log("edit item")
        //editItem(editedItem.name, editedItem.price, index)
        dispatcher(edit_item_in_list(
            loggedIn.name,
            loggedIn.password,
            index,
            editedItem
        ))
        setIsEditing(false)
    }
    
    const setEditedName = (e) =>{
        setEditedItem({...editedItem,
            name:e.target.value
        })
    }
    const setEditedPrice = (e) =>{
        setEditedItem({...editedItem,
            price:e.target.value
        })
    }

    return(
        <>
            <p>{name}</p>
            <p>{price}</p>
            {
                isEditing && (
                    <div style={{backgroundColor:"lightblue", paddingBottom:"10px"}}>
                        <h4>Edit box</h4>
                        <p>Name</p>
                        <input type="text" value={editedItem.name} onChange={(e) => setEditedName(e)}/>
                        <p>Price</p>
                        <input type="text" value={editedItem.price} onChange={(e) => setEditedPrice(e)}/>
                        <button onClick={() => update()}>Finished</button>
                    </div>
                )
            }
            <button onClick={() => deleteItemFunction()}>Delete item</button>
            <button onClick={() => setIsEditing(true)}>Edit item</button>
        </>
    )
}

export default ListItem