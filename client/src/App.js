import React,{useState, useEffect} from 'react';
import './App.css';

import {Switch, Route, useHistory} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {logout} from './redux/actions/user_actions'
import Header from './components/Header/Header'
import LandingPage from './components/LandingPage/LandingPage'
import Dashboard from './components/Dashboard/Dashboard'

function App() {
  const loggedIn = useSelector(state => state.loggedIn)
  const dispatch = useDispatch()
  const history = useHistory()

  const checkUser = () =>{
    if(loggedIn.name === null || loggedIn.password === null || loggedIn === null){
      history.push('/')
    }
  }; checkUser()

  const logoutFunction = () =>{
    dispatch(logout())
  }

  return (
    <div className="App">
      <Header/>
      <p>{loggedIn.name} is currently logged In</p>
      <button onClick={() => logoutFunction()}>Logout</button>
      <Switch>
        <Route exact path='/'>
          <LandingPage/>
        </Route>
        <Route path='/dashboard'>
          <Dashboard/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
