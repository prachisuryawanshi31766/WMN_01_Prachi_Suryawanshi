import React from "react";

//react is library and React is object which is in react library//

//RFC=React Function Constant  -----> use for normal function
//RFCE=React Function Constant Export  -----> use for normal function
//RAFCE =React Arrow Function Constant Export  -----> component

//identifier ha file ch nav je dil ahe tech deych 

const first_component= () => {

 
    // khali dilelya gostimule JS_object tayar houn VIRTUAL DOM madhye  DOM-Object banato

    return(
        <div>
            {/* ithe purn tumcya HTML chi script lihitat */}
        
        <p>
            This is My First Component

        </p>

        </div>
    );
}

//file chya baherun pn jr component access karaycha aasel tr hi lline lihuaychi

export default first_component;