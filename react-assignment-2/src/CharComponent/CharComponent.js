import React from 'react';

const componentStyle={
    display: 'inline',
    padding: '16px',
    margin: '16px',
    border: '1px solid black',
    textAlign: 'center',
    backgroundColor: 'red'



};
const charComponent=(props) =>{
    return(
    <p style={componentStyle} onClick={props.clicked}>{props.charData}</p>
    );

};

export default charComponent;