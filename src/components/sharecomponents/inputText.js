import React from 'react';
import checkTextLength from './checktextlength';

function InputText(props){
    
    const handleChange = ( name, that ) => event => {
        that.setState({ ...that.state, [name]: event.target.value});
    };

    let checkString = props.inputState;
    let checkValue = props.checkValue;
    let checkTitle = props.title;
    
    /*const checkTextLength = ( checkString ) => {
        if (checkString.length === 0) {
            alert(props.title + '不可以空白');
            return false;
        }
        if (checkString.length > props.checkValue) {
            alert(props.title + '超過字數');
            return false;
        }
    };*/

    return(
        <div className="form-row">

            <label>
                { props.required &&
                    <span className='text-danger'>*</span>
                }                    {props.title} 
                <em className='text-primary'>{props.notice} </em>
            </label>
            <input type="text" className={`form-control`} id={props.inputName} placeholder={props.title}   
            value={props.inputState} onChange={handleChange(props.inputName, props.stateObj)}  required={props.required} />
                
            { /*props.required &&
                <div className="invalid-feedback">
                    {props.title}不可以空白
                </div>*/
            }
            {
            /*checkTextLength(props.inputState)*/
            checkTextLength(checkString, checkValue, checkTitle)
            }

        </div>
            
    )
}

export default InputText;