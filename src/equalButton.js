import './App.css';
export default function EqualButton(props){
    return (
        <button className="equals-button" onClick={props.onclick}>
        <text className='equal-sign'>=</text>
        </button>
    )
}