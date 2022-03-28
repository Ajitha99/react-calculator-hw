import '../styles/Input.css'
function Inputs(props){
    return(
        <div className='div-input'>   
                <label className = "label-input" htmlFor="input-value1">Input 1: </label>
                <input id = "input1" type="text" value={props.value1} onChange={props.onChange1} name="input-value1"/><br></br>
                <label className = "label-input" htmlFor="input-value2">Input 2: </label>
                <input id = "input2"type="text" value={props.value2} onChange={props.onChange2} name="input-value2"/>
                <div>
                    <p><span>Result:</span> {props.result}</p>
                </div>
        </div>
    )
}

export default Inputs;

