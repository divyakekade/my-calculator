import "./App.css";
import { useState } from "react";
import NumberButton from './numberButton';
import EqualButton from "./equalButton";
import { type } from "@testing-library/user-event/dist/type";

export default function Calculator() {
    const [input,setInput]=useState("")
    const [answer,setAnswer]=useState("")
    const ACHandler = () => {
      setInput("")
      setAnswer("")
    }
    const CHandler = () => {
      setInput(input.slice(0,-1))
    }
    const inputHandler = (num) => {
      setInput(input.concat(num))
    }
    const equalToHandler = () => {
      var i=0,n1="",n2="",op="",res=0;
      if(input[0]=='-'){
        i=1;
      }
      for(;i<input.length;i++)
      {
        if(input[i]=="+" || input[i]=="-" || input[i]=="x" || input[i]=="/"){
          op=input[i]
          break;
        }
      }
      n1=input.slice(0,i)
      n2=input.slice(i+1,input.length)
      console.log(n1)
      console.log(n2)
      console.log(op)
      console.log(typeof(n2))
      console.log(typeof(+n2))
      if(op=="+"){
        res=(+n1)+(+n2)
      }
      else if(op=='-'){
        res=(+n1)-(+n2)
      }
      else if(op=='x'){
        res=(+n1)*(+n2)
      }
      else if(op=="/"){
        res=(+n1)/(+n2)
      }
      console.log(res)
      setAnswer(res.toString())
    }
  return (
    <div className="outer-box">
      <div className="input-box" placeholder='Enter 1st number operator and 2nd number'>
      <text className="answer-text">{input}</text>
      </div>
      <div className="answer-box">
        <text className="answer-text">{answer}</text>
      </div>
      <div className="buttons">
        <div className="two-buttons">
        <NumberButton num='AC' onclick={()=>ACHandler()}/>
        <NumberButton num='C' onclick={()=>CHandler()}/>
        </div>
        <div className="buttons-row">
        <NumberButton num='7' onclick={()=>inputHandler('7')}/>
        <NumberButton num='8' onclick={()=>inputHandler('8')}/>
        <NumberButton num='9' onclick={()=>inputHandler('9')}/>
        <NumberButton num='/' onclick={()=>inputHandler('/')}/>
        </div>
        <div className="buttons-row">
        <NumberButton num='4' onclick={()=>inputHandler('4')}/>
        <NumberButton num='5' onclick={()=>inputHandler('5')}/>
        <NumberButton num='6' onclick={()=>inputHandler('6')}/>
        <NumberButton num='x' onclick={()=>inputHandler('x')}/>
        </div>
        <div className="buttons-row">
        <NumberButton num='1' onclick={()=>inputHandler('1')}/>
        <NumberButton num='2' onclick={()=>inputHandler('2')}/>
        <NumberButton num='3' onclick={()=>inputHandler('3')}/>
        <NumberButton num='-' onclick={()=>inputHandler('-')}/>
        </div>
        <div className="buttons-row">
        <NumberButton num='.' onclick={()=>inputHandler('.')}/>
        <NumberButton num='0' onclick={()=>inputHandler('0')}/>
        <NumberButton num='00' onclick={()=>inputHandler('00')}/>
        <NumberButton num='+' onclick={()=>inputHandler('+')}/>
        </div>
        <div className="equalto-button">
        <EqualButton onclick={()=>equalToHandler()}/>
        </div>
      </div>
    </div>
  );
}
