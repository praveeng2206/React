import React from 'react';
import './css/OutputStyle.css';

const customisedOutput = (props) => {
	return(
			<div className="OutputStyle">
				<p>This is the first paragraph {props.userName}</p>
				<p>This is the second paragraph {props.userName}</p>
			</div>
		)

};

export default customisedOutput;