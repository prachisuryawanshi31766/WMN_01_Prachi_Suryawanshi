import React from 'react';
import { useState } from 'react';

import Lable from './Lable';
import InputBox from './InputBox';
import Button from './Button';
import './LoginPage.css';

///Component Definition
const LoginPage = () => {

    const [userId, setuserId] = useState('');
    const [password, setpassword] = useState('');

    //on submit handler
    const onSubmitClickHandler = () => {
        console.log()
        console.log("User Id = "+userId);
        HTMLFormControlsCollection.log("Password = "+password);
    }

    //user id change handler
    const onChangeUserId = (event) => {
        setuserId(event.target.value);
    }

    //password change hadler
    const onChangePassword = (event) => {
        setpassword(event.target.value);
    }

    //Return UI elements
    return (
        <div className="loginpage-wrapper" id="loginpage-wrapper">
            <div className="loginpage-container" id="loginpage-container">
                
                <div className="loginpage-row" id="loginpage-row">
                    <Lable titleText={"User Id : "}/>
                    <InputBox inputType={"text"}
                                OnChangeHandler={onChangeUserId}/>
                </div>
                
                <div className="loginpage-row" id="loginpage-row">
                    <Lable titleText={"Password : "}/>
                    <InputBox inputType={"password"}
                                OnChangeHandler={onChangePassword}/>
                </div>
                

                <Button title={"Submit"}
                        onClickHandler={onSubmitClickHandler}/>
            
            </div>
        </div>
    );
}

//Export Component
export default LoginPage;