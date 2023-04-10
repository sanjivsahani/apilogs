import React, { useLayoutEffect, useState } from 'react'
import axios from 'axios'

const Apiogs = () => {
    const [apiData, setApiData] = useState([])
    const [tablehead, settableHead] = useState([])
    const ApiData = () => {
        axios.get('https://api.coronavirus.data.gov.uk/v1/data').then((res) => {
            // console.log(res?.data?.data[0])
            setApiData(res?.data?.data)
            let object1 = res?.data?.data[0]
            let tableHead = Object.keys(object1);
            settableHead(tableHead)
        }).catch((err) => {
            console.log(err)
        })
    }

    const ThData = () => {
        return tablehead?.map((data) => {
            return <th key={data}>{data}</th>
        })
    }

    const tdData =() =>{
        return apiData.map((data)=>{
          return(
              <tr>
                   {
                      tablehead.map((v)=>{
                          return <td>{data[v]}</td>
                      })
                   }
              </tr>
          )
        })
   }
   
    useLayoutEffect(() => {
        ApiData()
    }, [])
    return (
        <div>
            <div className='text-center p-3'>
                <span className='h3 text-warning'> Data of Coronavirus</span>
            </div>
            <div className='container col-10 border border-dark'>
                <table className="table">
                    <thead>
                        <tr>{ThData()}</tr>
                    </thead>
                    <tbody>
                        {tdData()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Apiogs