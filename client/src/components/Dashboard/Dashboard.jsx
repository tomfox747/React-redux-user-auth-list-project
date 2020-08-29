import React,{useState, useEffect} from 'react'

import {useDispatch, useSelector} from 'react-redux'
import {add_to_user_list} from '../../redux/actions/user_actions'

import ListItem from './ListItem'

const Dashboard = () =>{
    const users = useSelector(state => state.users)
    const loggedIn = useSelector(state => state.loggedIn)
    const dispatcher = useDispatch()

    //const [list, setList] = useState([])
    const [newItem, setNewItem] = useState({name:"", price:""})

    const setName = (e) =>{
        setNewItem({...newItem, 
            name:e.target.value
        })
    }
    const setPrice = (e) =>{
        setNewItem({...newItem,
            price:e.target.value
        })
    }

    const addItemFunction = (e) =>{
        console.log("item added")
        //dispatcher(addItem(
        //    newItem.name,
        //    newItem.price
        //))  
        dispatcher(add_to_user_list(
            loggedIn.name,
            loggedIn.password,
            {
                name:newItem.name,
                price:newItem.price
            }
        ))
    }

    return(
        <>
            <h1>Dashboard</h1>
            <h3>Shopping List</h3>
            {
                users.map((user, index) =>{
                    if(user.name === loggedIn.name && user.password === loggedIn.password){
                        return user.list.map((item, index) =>{
                            return(
                                <div key={index}>
                                    <ListItem name={item.name} price={item.price} index={index}/>
                                </div>
                            )
                        })    
                    }else{
                        return null
                    }
                })
            }
            <br/>
            <h3>Add Item</h3>
            <p>Item Name</p>
            <input type="text" onChange={(e) => setName(e)}/>
            <p>Item Price</p>
            <input type="text" onChange={(e) => setPrice(e)}/>
            <button onClick={(e) => addItemFunction(e)}>Add Item</button>
        </>
    )
}

export default Dashboard