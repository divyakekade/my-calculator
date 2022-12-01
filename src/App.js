import './App.css';
import Calculator from './calculator';

function App() {
  return (
    <div className="outer">
      <div className='navbar'>
        <text className='nav-text'>
          MY CALCULATOR
        </text>
      </div>
      <Calculator/>
    </div>
  );
}

export default App;
