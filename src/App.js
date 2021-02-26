import React from 'react'
import { Route } from 'react-router-dom';
import './App.css'

import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import UsersContainer from './components/Users/UsersContainer';


const App = (props) => {
  return (

    <div className='app-wrapper'>
      <Header />
      <div className='main-wrapper'>
        <Navbar />
        <div className="main-wrapper-content">
          <Route path='/dialogs' render={ () => <DialogsContainer store={props.store}/>} />
          <Route path='/profile' render={ () => <Profile store={props.store}/>} />
          <Route path='/users' render={ () => <UsersContainer store={props.store} /> }/>
          </div>
        </div>
      </div>
    
  )
}




export default App;
