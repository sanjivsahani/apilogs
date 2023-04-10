// import logo from './logo.svg';
// import './App.css';
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import APIdata from './APIdata';

// function App() {
//   const [data,setData]=useState([])
//   const apiLogs = ()=>{
//     axios.get('https://api.coronavirus.data.gov.uk/v1/data').then((res)=>{
//       // console.log(res?.data?.data)
//       setData(res?.data?.data)
//     }).catch((err)=>{
//       console.log(err)
//     })
//   }

//   useEffect(() => {
//     apiLogs()
//   }, [])
  
//   return (
//     <div className="App">
//       <APIdata data = {data}/>
//     </div>
//   );
// }

// export default App;
 import React from 'react'
import Signup from './compoment/Signup'
import Login from './compoment/Login'
import Header from './Header'
import Apiogs from './ApiLogs'
 
 const App = () => {
   return (
     <div>
        <Header/>
        <Signup/>
        <Login/>
        <Apiogs/>
     </div>
   )
 }
 
 export default App