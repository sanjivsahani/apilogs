import React, { useState } from 'react'

const Login = () => {
    let iniData = {
        email: "",
        pass: ""
    }
    const [Logindata, setLoginData] = useState(iniData)

    const handleChange = (e) => {
        setLoginData({ ...Logindata ,[e.target.name]: e.target.value })
    }
    const handleLogin =()=>{
      let authData = JSON.parse(localStorage.getItem('data'))
        if(authData?.email === Logindata?.email && authData?.pass === Logindata?.pass){
            console.log("login sucess Full")
        }else{
            alert("crediantial are incorrect")
        }
    }

    return (
        <div className='my-5'>

            <div className='container col-5 border border-dark p-4'>
                <div className='mb-3'>
                    <span className=' h3  text-warning '> Login Page </span>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" placeholder="name@example.com" name='email' onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Password</label>
                    <input type="password" className="form-control" placeholder="*****" name='pass' onChange={handleChange} />
                </div>
                <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="button" onClick={handleLogin}>Login button</button>
                    {/* <button className="btn btn-primary" type="button">Button</button> */}
                </div>
            </div>
        </div>
    )
}

export default Login