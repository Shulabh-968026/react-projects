import React,{ FC } from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// import "./Queries/query"
// require("dotenv").config({
//   path:"./config.env"
// })
console.log(process.env.REACT_APP_APPLICATION_KEY)
const App:FC = () =>{
  return (
    <div>
        <h1>Hello World!!!</h1>
    </div>
  );
}

export default App;
