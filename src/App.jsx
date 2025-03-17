import { useState, useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componation/header';
import Foot from './componation/footer';
import Body from './componation/body';
function App() {
  var [A, setA]= useState(0);
  var [B, setB]= useState(0);
  const [total, dispatch] = useReducer(reducer, {count: 0});


  function handleA(e){
    setA(e.target.value);
  }
  function handleB(e){
    setB(e.target.value);
  }



  function reducer(state, action) {
    switch (action.type) {
      case "+":
        console.log(A,B);
        return{...state, count: parseInt(action.A) + parseInt(action.B)}
      case "-":
        return{...state, count: parseInt(action.A) - parseInt(action.B)}
      case "*":
        return{...state, count: parseInt(action.A) * parseInt(action.B)}
      case "/":
        return{...state, count: parseInt(action.A) / parseInt(action.B)}
      default:
        break;
    }
  }

  function cong(){
    dispatch({type: '+',A,B});
  }
  function tru(){
    dispatch({type: '-',A,B});
  }
  function nhan(){
    dispatch({type: '*',A,B});
  }
  function chia(){
    dispatch({type: '/',A,B});
  }

  return (
    <>
      {/* <input type="number" onChange={handleA}/><br />
      <input type="number" onChange={handleB}/><br />
      <input type="radio" onClick={cong} name="cal" value="+" /> + 
      <input type="radio" onClick={tru} name="cal" value="-" /> - 
      <input type="radio" onClick={nhan} name="cal" value="*" /> * 
      <input type="radio" onClick={chia} name="cal" value="/" /> / <br />
      <label htmlFor="#">Result: {total.count}</label> */}
      <Header/>
      <Body/>
      <Foot/>
    </>
  );
}


export default App
