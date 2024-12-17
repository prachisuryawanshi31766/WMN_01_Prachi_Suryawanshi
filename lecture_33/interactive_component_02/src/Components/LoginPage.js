import React from 'react';
import './LoginPage.css';
import InputBox from './InputBox';
import Lable from './Lable';
import SubmitButton from './SubmitButton'


//component defination

const LoginPage = () => {
    return(
        <div className='Loginpage-wrapper'>
            <div className='Loginpage-container'>
            
            <div className='row'>
             <Lable title='ID' />
             <InputBox inputType='text' />
            </div>
           
           <div className='row'>
             <Lable title='Password' />
             <InputBox inputType='Password' />
            </div>

            <div className='row'>
              <SubmitButton title='Signup'/>
              <SubmitButton title='Login'/>
            </div>

          </div>
        </div>
    );
}

export default LoginPage;