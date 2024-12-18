
import React from 'react';

//component Defination

const Button =({title, onClickHandler}) =>{

    //Return UI element
     return(
        <div className='button-wrapper'>
            <div className='button-container'>
                {/* <button onClick={ ()=>
                {  
                  alert('Button is Clicked');

                }}>
                </button>*/}

                <button onClick={onClickHandler}>
                    <h1>{title}</h1>
                </button>
            </div>
        </div>
     );

}

//Export Component
export default Button ;