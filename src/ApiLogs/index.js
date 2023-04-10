import React, { useLayoutEffect, useState } from 'react'
import { Get_Corona_virus_data } from '../ApiCalls/APicalls'
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
    console.log("tablerow", apiData)
    console.log("tablehead", tablehead)

    useLayoutEffect(() => {
        ApiData()
    }, [])
    return (
        <div>
            <div>
                <span className='h3 text-warning'> Data of Coronavirus</span>
            </div>
            <div className='container col-10 border'>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            {tablehead?.map((ele) => {
                                return <th scope="col">{ele}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {tablehead?.map((ele, ind) => {
                            return <tr>
                                <th scope="row">{ind + 1}</th>
                                <td>{ele}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Apiogs