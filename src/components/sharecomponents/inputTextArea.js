import React from 'react';


function InputTextArea(props){
    
    const handleChange = ( name, that ) => event => {
        that.setState({ ...that.state, [name]: event.target.value});
    };


    return(


        <div className="form-row">
            <label>
                { props.required &&
                    <span className='text-danger'>*</span>
                }
                {props.title} 
                <em className='text-primary'>{props.notice} 
                </em> 
            </label>
            <textarea  className={`form-control`} id={props.inputName} placeholder={props.title}   rows={props.rows}
            value={props.inputState} onChange={handleChange(props.inputName, props.stateObj)}  required={props.required} />
            { props.required &&
                <div className="invalid-feedback">
                    {props.title}不可以空白
                </div>
            }

        </div>

    )
}

export default InputTextArea;