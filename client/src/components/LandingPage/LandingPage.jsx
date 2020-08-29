import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {create_user, login} from '../../redux/actions/user_actions'

const LandingPage = () =>{
    const dispatch = useDispatch()
    const users = useSelector(state => state.users)
    const history = useHistory()

    const [loginData, setLoginData] = useState({userName:"", password:""})
    const [registerData, setRegisterData] = useState({userName:"", password:""})

    const loginFunction = (e) =>{
        e.preventDefault()
        let foundUser = false
        let userObject = {name:null, password:null}
        //check if users contains the information
        users.map((user, index) =>{
            if(user.name === loginData.userName && user.password === loginData.password){
                foundUser = true
                userObject = user
            }
            return user
        })

        //save information into redux storage
        if(foundUser){
            dispatch(login(
                userObject.name,
                userObject.password
            ))
            history.push('/dashboard')
        }else{
            alert("incorrect username of password")
        }
        
        //checkUser(loginData.userName, loginData.password)
        //save the logged in user to the redux state
    }
    const register = (e) =>{
        e.preventDefault()
        dispatch(create_user(
            registerData.userName,
            registerData.password
        ))
        alert("new user created")
    }

    const setRegisterName = (e) =>{
        setRegisterData({...registerData,
            userName:e.target.value
        })
    }
    const setRegisterPassword = (e) =>{
        setRegisterData({...registerData,
            password:e.target.value
        })
    }

    const setLoginName = (e) =>{
        setLoginData({...loginData,
            userName:e.target.value
        })
    }
    const setLoginPassword = (e) =>{
        setLoginData({...loginData,
            password:e.target.value
        })
    }


    return(
        <>
            <h1>Welcome To Shop-Tastic</h1>

            <p>Login</p>
            <form onSubmit={loginFunction}>
                <label>
                    :username
                </label>
                <input type="text" onChange={(e) => setLoginName(e)}/>
                <label>
                    :password
                </label>
                <input type="text" onChange={(e) => setLoginPassword(e)}/>
                <input type="submit"/>
            </form>
            <br/><br/>
            <p>Register account</p>
            <form onSubmit={register}>
                <label>
                    :username
                </label>
                <input type="text" onChange={(e) => setRegisterName(e)}/>
                <label>
                    :password
                </label>
                <input type="text" onChange={(e) => setRegisterPassword(e)}/>
                <input type="submit"/>
            </form>
        </>
    )
}

export default LandingPage