import React from 'react';


const CustomisedInput = (props) => {
	const inputstyle = {
		border : '2px solid red'
		

	};
	return(
			<div>
				<input style = {inputstyle} type="text"  onChange={props.changed} value={props.currentName}/>
			</div>
		)

};

export default CustomisedInput;


