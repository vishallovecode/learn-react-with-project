import React from 'react';
const Child  = React.memo((props)=>{
    console.log("Child render")
    return (
        <div>{props.counter}</div>
    )
})

export default Child;