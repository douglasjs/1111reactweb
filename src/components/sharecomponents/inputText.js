import React from 'react';
import { emptyCheck, numCheck} from './toolFunction';

function InputText(props){
    
    const handleChange = ( name, that, checkValue, title, required ) => event => {
        let word = event.target.value.trimStart();
        if (required === true){word = emptyCheck(word, title, that.state[name])};    
        word = numCheck(word, checkValue, title );
        that.setState({ ...that.state, [name]: word});
    };

    return(
        <div className="form-row">

            <label>
                { props.required &&
                    <span className='text-danger'>*</span>
                }                    {props.title} 
                <em className='text-primary'>{props.notice} </em>
            </label>
            <input type="text" className={`form-control`} id={props.inputName} placeholder={props.title}   
            value={props.inputState} onChange={handleChange(props.inputName, props.stateObj, props.checkValue, props.title, props.required)} />
                
            { /*props.required &&
                <div className="invalid-feedback">
                    {props.title}不可以空白
                </div>*/
            }

        </div>
            
    )
}

export default InputText;