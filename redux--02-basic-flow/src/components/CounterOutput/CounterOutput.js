import React from 'react';

import './CounterOutput.css';

const counterOutput = (props) => {
    console.log(props);
    return (
        <div className="CounterOutput">
          Current Counter: {props.value}
        </div>
    )
    
}

export default counterOutput;