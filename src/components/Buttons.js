
function Buttons(props){
    return(
        <div>
            <button value = '+' onClick={props.onClickAdd}>+</button>
            <button value = '-' onClick={props.onClickMinus}>-</button>
            <button value = '*' onClick={props.onClickMultiply}>*</button>
            <button value = '/' onClick={props.onClickDivide}>/</button>
        </div>
    )
}

export default Buttons;