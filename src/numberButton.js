import './App.css';
export default function NumberButton(props){
    return (
        <button className="number-button" onClick={props.onclick}>
        <text className='number-text'>{props.num}</text>
        </button>
    )
}