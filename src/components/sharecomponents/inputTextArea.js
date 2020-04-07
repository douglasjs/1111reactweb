import React from 'react';
import checkTextLength from './checktextlength';

function InputTextArea(props){
    
    const handleChange = ( name, that ) => event => {
        that.setState({ ...that.state, [name]: event.target.value});
    };

    /*let checkString = props.inputState;
    let checkValue = props.checkValue;
    let checkTitle = props.title;*/

    checkTextLength(props.inputState, props.checkValue, props.title);

    let inputString = props.inputState;

    if (props.inputState.length === 0){
        inputString = "請輸入";
    }

    if (props.inputState.length > props.checkValue){
        inputString = inputString.substr(0,props.checkValue);
    }

    return(


        <div className="form-row">
            <label>
                { props.required &&
                    <span className='text-danger'>*</span>
                }
                {props.title} 
                <em className='text-primary'>{props.notice} </em> 
            </label>

            <textarea  className={`form-control`} id={props.inputName} placeholder={props.title}   rows={props.rows}
            value={inputString} onChange={handleChange(props.inputName, props.stateObj)}  required={props.required} />

            { /*props.required &&
                <div className="invalid-feedback">
                    {props.title}不可以空白
                </div>*/
            }

        </div>

    )
}

export default InputTextArea;