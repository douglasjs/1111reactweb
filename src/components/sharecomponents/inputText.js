import React from 'react';
//import checkTextLength from './checktextlength';
//import {strNumLimite} from './toolFunction';

function InputText(props){
    
    const handleChange = ( name, that ) => event => {
        that.setState({ ...that.state, [name]: event.target.value});
    };

    let inputString = props.inputState;
    //inputString = props.inputState.length > props.checkValue ? checkTextLength(props.inputState, props.checkValue, props.title) : props.inputState;

    if (props.inputState === 0) {
        alert(props.title + '不可以空白');
        inputString = " ";
    }
    if (props.inputState.length > props.checkValue) {
        alert(props.title + '超過' + props.checkValue + '個字的限制');
        inputString = props.inputState.substring(0,props.inputState.length-1 > props.checkValue ? props.checkValue-1: props.inputState.length-1 );
    }

    return(
        <div className="form-row">

            <label>
                { props.required &&
                    <span className='text-danger'>*</span>
                }                    {props.title} 
                <em className='text-primary'>{props.notice} </em>
            </label>
            <input type="text" className={`form-control`} id={props.inputName} placeholder={props.title}   
            value={inputString} onChange={handleChange(props.inputName, props.stateObj)}  required={props.required} />
                
            { /*props.required &&
                <div className="invalid-feedback">
                    {props.title}不可以空白
                </div>*/
            }

        </div>
            
    )
}

export default InputText;