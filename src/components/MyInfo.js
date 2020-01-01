import React from "react" 

//To use java script inside JSX we need to use curly braces {} as seen below for firstName and lastName
//Or if we want to use a ${varName} we should use these inside bactics `
function MyInfo() {
    const firstName="Sai"
    const lastName="Vikas" 
    return(
        <div>        
            <h1>Hi {firstName + " " + lastName}</h1>  
            <h1>Hello { `${firstName} ${lastName}`}</h1>  
            <p>This is my list</p>
        <ul>
        <li> Hyderabad </li>
        <li> Vizag </li>
        <li> Vijayawada </li>
        <li> Chennai </li>
    </ul>
    </div>
    )
}

export default MyInfo