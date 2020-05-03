import React from 'react';

function InputSwitch(props){
    
    const handleChange = ( name, that ) => event => {
        that.setState({ ...that.state, [name]: event.target.checked});
    };

    return(
        <div className="form-row custom-control custom-switch">
            <input type="checkbox" className="custom-control-input inputswitch_size"
                   id={props.inputName} checked ={props.inputState} onChange={handleChange(props.inputName, props.stateObj)}/>
            <label className="custom-control-label inputswitch_size" htmlFor={props.inputName}>開啟{props.sessionName}區段</label>
            <hr />
        </div>
    )
}

export default InputSwitch;