import React from 'react';

//component  Definaion 
const InputBox=({inputType,onChangeHandler}) =>{
    
    //Because this is a component we must return some html elements

    //Return UI Element


    return(
        <div className='inputbox-wrapper' id='inputbox-wrappr'>
            <div className='inputbox-container' id='inputbox-container'>

                <input type= {inputType}
                onChange={onChangeHandler}/>

            </div>
        </div>
    );
}

//Export Component
export default InputBox;