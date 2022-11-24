import "./App.css";
import { useState } from "react";

export default function Calculator() {
    const [input,setInput]=useState("33")
    const [answer,setAnswer]=useState("00")
  return (
    <div className="outer-box">
      <div className="input-box">
        <text className="input-text">{input}</text>
      </div>
      <div className="answer-box">
        <text className="answer-text">{answer}</text>
      </div>
      <div className="buttons">
        <div className="two-buttons">
        <button className="number-button">
        <text className='number-text'>AC</text>
        </button>
        <button className="number-button">
        <text className='number-text'>C</text>
        </button>
        </div>
        <div className="buttons-row">
        <button className="number-button">
        <text className='number-text'>7</text>
        </button>
        <button className="number-button">
        <text className='number-text'>8</text>
        </button>
        <button className="number-button">
        <text className='number-text'>9</text>
        </button>
        <button className="number-button">
        <text className='number-text'>/</text>
        </button>
        </div>
        <div className="buttons-row">
        <button className="number-button">
        <text className='number-text'>4</text>
        </button>
        <button className="number-button">
        <text className='number-text'>5</text>
        </button>
        <button className="number-button">
        <text className='number-text'>6</text>
        </button>
        <button className="number-button">
        <text className='number-text'>x</text>
        </button>
        </div>
        <div className="buttons-row">
        <button className="number-button">
        <text className='number-text'>1</text>
        </button>
        <button className="number-button">
        <text className='number-text'>2</text>
        </button>
        <button className="number-button">
        <text className='number-text'>3</text>
        </button>
        <button className="number-button">
        <text className='number-text'>-</text>
        </button>
        </div>
        <div className="buttons-row">
        <button className="number-button">
        <text className='number-text'>.</text>
        </button>
        <button className="number-button">
        <text className='number-text'>0</text>
        </button>
        <button className="number-button">
        <text className='number-text'>00</text>
        </button>
        <button className="number-button">
        <text className='number-text'>+</text>
        </button>
        </div>
        <div className="equalto-button">
        <button className="equals-button">
        <text className='equal-sign'>=</text>
        </button>
        </div>
      </div>
    </div>
  );
}
