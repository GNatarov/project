import React, { Component, useState } from 'react'
import './App.css'
// import Header from './components/Header';
// import Navbar from './components/Navbar';
// import Profile from './components/Profile';

const Input = () => {
  const [value, setValue] = useState('asdf')
  return (
  <>  
     <input value={value} onChange={e => setValue(e.target.value)}/>
     <p>{value.toUpperCase()}</p>
  </>
  )
}

const Spoiler = ({children, header:Header}) => {
  const [show, setShow] = useState(true)
  return (
    <>
      <Header onClick={() => setShow(!show)}/>
      {show && children}
    </>
  )
}

const App = () => {
  
  return (
    <>
      
      <Spoiler header={({ ...props }) => <h2 {...props}>Show</h2>}>
        <Input />
        <Input />


        <Spoiler header={({ onClick }) => <button onClick={onClick}>Show</button>}>
          <Input />
          <Input />
        </Spoiler>
      </Spoiler>
    </>
  );
}




export default App;
