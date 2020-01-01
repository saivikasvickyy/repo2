import React from "react"

function Time(){
    // ways to declare variables inside a component
    let time = new Date()
    const timeInHours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    var message

    //if else ladder same as like in java
    if(timeInHours < 12)
        message = "Good Morning"
    else if( (timeInHours >= 12) && (timeInHours <=18 ) )
        message = "Good Afternoon"
    else
        message = "Good Evening"

return (
    <h1>Time is {timeInHours} : {minutes} : {seconds} , {message} </h1>
)
} 

export default Time