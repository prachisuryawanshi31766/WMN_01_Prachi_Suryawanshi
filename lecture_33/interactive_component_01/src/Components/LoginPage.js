import React from 'react';

import InputBox from './InputBox';
import Lable from './Lable';
import SubmitButton from './SubmitButton'


//component defination

const LoginPage = () => {
    return(
        <div className='Loginpage-wrapper'>
            <div className='Loginpage-container'>

            <Lable />
            <InputBox />

            <Lable />
            <InputBox />

        <SubmitButton />
            </div>

        </div>
    );
}

export default LoginPage;