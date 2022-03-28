import { useEffect, useState } from "react";
import Inputs from "./Inputs";
import Buttons from "./Buttons";

function MainController(){

    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [result, setResult] = useState(0);

    const handleInput1 = (e) =>{
        //prevents page reload
        e.preventDefault();
        console.log(e.target.value);
        if(isNaN(e.target.value) === false || e.target.value === NaN){
        const input1 =  e.target.value;
        setInputValue1(input1);
        setResult(0);
        // console.log(typeof input1);
        }
        else{
            setInputValue1('');
        }
    }

    const handleInput2 = (e) =>{
        e.preventDefault();
        console.log(e.target.value);
    if(isNaN(e.target.value) === false){
        const input2 = e.target.value;
        // console.log(typeof input2);
        setInputValue2(input2);
    }
    else{
        setInputValue2('');
    }
    }

    const handleOnClick = (e) =>{
        console.log(e.target.value);
        const sign = e.target.value;
        let res = 0;
        //if both input values are numbers, enters if loop, ow sets the result to zero
        if(isNaN(inputValue1) === false && isNaN(inputValue2) === false){
            const val1 = parseInt(inputValue1);
            const val2 = parseInt(inputValue2);
          switch(sign){
            case '+':
                res = val1 + val2;
                break;
            case '-':
                res = val1 - val2;
                break;
            case '*':
                res = (val1 * val2);
                
                break;
            case '/':
                res = (val1 / val2).toFixed(6);
                break;
            default:
                break;
            }
            //sets the result value
            setResult(res);
            //clearing input values
            setInputValue1(0);
            setInputValue2(0);
           
        }
        else{
            setResult(0);
        }
    }
   

    useEffect(()=>{
        console.log("the result is : " + result)
    },[result]) 


    return(
        <div className="Main-Controller-div">
            <Inputs
                value1 = {inputValue1}
                onChange1 = {(e) => handleInput1(e)}
                value2 = {inputValue2}
                onChange2 = {(e) => handleInput2(e)}
                result = {result}
               />
            <Buttons 
                onClickAdd = {(e) => handleOnClick(e)}
                onClickMinus = {(e) => handleOnClick(e)}
                onClickMultiply = {(e) => handleOnClick(e)}
                onClickDivide = {(e) => handleOnClick(e)}
               /> 
        </div>
    )
}

export default MainController;

