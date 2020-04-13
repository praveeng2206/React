import React from 'react';

const validateComponent=(props)=>{
    
        if(props.length<5){
            return(
            <p>Text too short</p>
            );
            }                
        else if(props.length>5){
        return(
            <p>Too Long enough</p>
            );
        }
        else{
            return(
            <p>Perfect</p>    
            );
        } 
        
    
};

export default validateComponent;