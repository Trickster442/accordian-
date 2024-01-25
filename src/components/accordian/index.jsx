// single selection this is type of accordian when you open only one menu at a time
// multiple selection this is a type which can open multiple menu at a time

import { useState } from "react";
import data from "./data";
import './styles.css';

export default function Accordian(){
    const [single, setSingle] = useState(null);   //We are not selecting anything at first so set it null
    const [enableMultiple, setEnableMultiple] = useState(false) ; //setting enable multiple to false at initial
    const [multiple, setMultiple] = useState([])       //making it takes array not just single value but multiple


    function handleSingle(getcurrentId){
        setSingle(getcurrentId === single ? null : getcurrentId);      //You cant assign value with assign operator but rather inside a parenthesis
     
    }
    console.log(single)
    console.log(enableMultiple)

    function multiSelection(getcurrentId){
        let cpyMultiple = [...multiple];
        const indexOfcurrentId = cpyMultiple.indexOf(getcurrentId);

        if (indexOfcurrentId === -1) cpyMultiple.push(getcurrentId)
        else cpyMultiple.splice(indexOfcurrentId , 1)
        setMultiple(cpyMultiple);

    }
    console.log(multiple)

    return (
    <div className="wrapper">
        {/*if enableMultiple is true then will change to false on click*/}
        <button onClick={()=>setEnableMultiple(!enableMultiple)}>Enable Multiple Accordian</button>    
        <div className="accordian">
            {  
            /*Checking if data is empty or not*/
                data && data.length > 0 ? 
                /*if data is not empty then execute this */
                data.map(dataItem => <div className="item">   {/* running loop in data object where only printing question parts*/}
                    <div onClick={enableMultiple ? ()=>multiSelection(dataItem.id) : ()=>handleSingle(dataItem.id)} className="Title">
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                    </div>
                    {
                      single === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ?
                      (
                        <div className="content">{dataItem.answer}</div>
                      )
                        
                        : null
                    }
                </div>)        
                : <div>No Data found !!</div>
            }
        </div>
    </div>
    )
    
}