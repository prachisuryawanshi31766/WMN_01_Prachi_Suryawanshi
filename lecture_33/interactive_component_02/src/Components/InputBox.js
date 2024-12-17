import React from 'react';


//component defination

const InputBox= ({inputType})=> {
    return (
        <div className='inputbox-wrapper'>
            <div className='inputbox-container'>
                <input type={inputType}/>
            </div>

        </div>
    );
}
export default InputBox;