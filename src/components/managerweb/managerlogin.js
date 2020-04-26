import React, { useState } from 'react';
import TitleSet from '../sharecomponents/titleset';

function ManagerLogin(props) {

    const [loginNumber, setloginNumber] = useState('');
    const [loginPassword, setloginPassword] = useState('');

    const changeLoginHandler = (event) => {
        setloginNumber(event.target.value)
    }

    const changePasswordHandler = (event) => {
        setloginPassword(event.target.value)
    }

    const loginHandler = (event) => {
        event.preventDefault();
        if(loginNumber.length === 0 || loginPassword.length === 0 ){
            alert("請輸入帳號ID及密碼");
            return;
        }

        if(loginPassword !== loginNumber + "1234" ){
            alert("請輸入正確的帳號ID及密碼");
            return;
        }

        props.history.push({
            pathname: '/managerweb/' + loginNumber,
            state: { detail: 'login' }
        })
        
    }


    const URL = [
        '/assetsBK/vendor/jquery/jquery.min.js',
        '/assetsBK/vendor/bootstrap/js/bootstrap.bundle.min.js',
        '/assetsBK/js/sb-admin-2.min.js',
        '/assetsBK/vendor/chart.js/Chart.min.js',
    ];

    let companyName = '1111人力銀行';
    let companyMeta = {
        keywords: '1111,人力,徵才',
        description: '1111人力銀行'
    }
    const styleSheet = [
        '/assetsBK/vendor/fontawesome-free/css/all.min.css',
        'https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i',
        '/assetsBK/css/sb-admin-2.css'
    ]



    return (

        <div className="bg-gradient-primary">
            <TitleSet title={companyName} meta={companyMeta} style={styleSheet} script={URL} />
            <div>

                <div className="row  justify-content-center">

                    <div>

                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body">
                                <div className="row">
                                        <div>
                                            <div className="text-center">
                                                <img src='/image/benefit-1111.png' alt='1111'/>
                                                <hr />
                                                <h1 className="h4 text-gray-900 mb-4">1111 人力銀行客製化網站登入</h1>
                                            </div>

                                            <form className="user">
                                                <div className="form-group">
                                                    <input type="number" className="form-control form-control-user" id="InputID" aria-describedby="emailHelp" onChange={changeLoginHandler} value={loginNumber} placeholder="請輸入客戶代碼" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" className="form-control form-control-user" id="InputPassword" placeholder="請輸入密碼" onChange={changePasswordHandler}  value={loginPassword} />
                                                </div>
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox small">
                                                    </div>
                                                </div>
                                                <a href="index.html" className="btn btn-primary btn-user btn-block" onClick={loginHandler}>
                                                    Login
                                                </a>
                                                <hr />
                                            </form>
                                        </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>


    )


}

export default ManagerLogin;