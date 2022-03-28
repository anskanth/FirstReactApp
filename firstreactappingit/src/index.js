import React, {useState} from "react";
import ReactDOM  from "react-dom" ;
import App from "./App";



function WebPage()
{
    return <><div>
        <App/>
        <h1>Hello, World</h1>
        <SampleFunction/>
        <p>sample text</p>
        
    </div>
  
    </>;
}

function SampleFunction()
{

    const [time, setTime] =useState(new Date().toLocaleTimeString());

    setInterval(()=> setTime(new Date().toLocaleTimeString()));
    return <h2>This is <b>Srikanth</b>, it is {time}</h2>;
    
}

ReactDOM.render(<WebPage/>, document.getElementById("root"));