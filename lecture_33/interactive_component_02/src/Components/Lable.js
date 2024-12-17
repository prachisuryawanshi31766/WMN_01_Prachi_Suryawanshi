import React from 'react';

//component defination 

const Lable = ({title}) =>
{
    return(
        <div className='Lable-wrapper'>
            <div className='Lable-container'>

                {title}
                
            </div>

        </div>
    );
}

export default Lable;