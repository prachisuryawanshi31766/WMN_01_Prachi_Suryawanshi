import React from 'react';

//Component Definition
const Lable = ({titleText}) => {
    
    //Return UI elements

    return(
        <div className="lable-wrapper" id="lable-wrapper">
            <div className="lable-container" id="lable-container">
                <span>
                    {titleText}
                </span>
            </div>
        </div>
    );
}

//Export Component
export default Lable;