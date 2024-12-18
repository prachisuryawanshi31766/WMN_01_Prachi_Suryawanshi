import React from 'react';

import './Button.css';

//component Defination
const Button = (props) =>{
    
    //return UI element

    return(
        <div className='button-wrapper'>
            <div className='button-container'>

                <button className='submit-button' id='submit-button'
                onClick={props.onClickHandler}>

                    <span className='button-text' id='button-text'>
                        {props.title}
                    </span>

                </button>
            </div>
        </div>

    );
}

//Export Component

export default Button;