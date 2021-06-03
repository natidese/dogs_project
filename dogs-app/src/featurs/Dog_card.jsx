import React from 'react'

export default function Dog_Card(props){
    return(
    <div style={{border:props.borderColor}}>
        <h1>{props.firstName}</h1>
        <h1>{props.type}</h1>
        <h1>{props.age}</h1>
    </div>)

} 