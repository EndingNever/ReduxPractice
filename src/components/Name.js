import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { nameActions } from '../store/name'
import './Name.css'



export default function Name() {
  const name = useSelector(state => state.name.name)
  const [userInput, setUserInput] = useState('');
  const dispatch = useDispatch();

  const addName = () => {
    dispatch(nameActions.addName())
  }

  const getInputValue = (e) => {
    setUserInput(e.target.value);
    // console.log(e.target.value)
  }

  const addUserName = () => {
    setUserInput('');
    dispatch(nameActions.addUserName(userInput + ' '))
  }

  return (
    <div className='profile'>
      <h1>These are your names!</h1>
      {name.map(name =>
        <p key={name}>{name}</p>
      )}
      {/* <h2 onClick={(e)=> console.log(e)}>{name}</h2> */}
      <input value={userInput} onChange={getInputValue} type="text" />
      {/* <button onClick={addName}>Push Yellow</button> */}
      <button onClick={addUserName}>Push</button>
    </div>
  )
}
