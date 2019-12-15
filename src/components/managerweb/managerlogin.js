import React, {useState} from 'react';

function ManagerLogin(props) {

    const [loginNumber, setloginNumber] = useState('');

    const changeHandler = (event) => {
        setloginNumber(event.target.value)
    }

    const loginHandler = () => {
        props.history.push({
            pathname: '/managerweb/' + loginNumber
        })
    }


    return (
           <div>
            <div><h1>Login</h1></div>
            <div><input type='text' onChange={changeHandler} value={loginNumber} /></div>
            <button onClick={loginHandler}>Login</button>
           </div>
    )
   
   
}

export default ManagerLogin;