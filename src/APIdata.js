import React from 'react'

const APIdata = ({ data }) => {
    console.log(data)
    return (
        <>
            {
         data.map((ele)=>{
             return <>
             <h1> {ele?.areaName}</h1>
             <h1> {ele?.confirmedRate}</h1>
             </>
            }) 
            }
        </>
    )
}

export default APIdata