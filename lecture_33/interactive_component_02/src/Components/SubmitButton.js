import React from 'react';

//Component defination 
const SubmitButton =({title}) => {
    //return UI Element
    return(
        <div className='Submit-button-wrapper' >
            <div className='Submit-button-container'>
            <button>
                {title}
            </button>
            </div>
        </div>
    );
}

export default SubmitButton;