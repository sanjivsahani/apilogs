import React, { useState } from 'react'

const Signup = () => {
    let iniData = {
        name: "",
        email: "",
        pass: ""
    }
    const [signupdata, setsignupData] = useState(iniData)

    const handleChange = (e) => {
        setsignupData({ ...signupdata ,[e.target.name]: e.target.value })
    }
    const handleSignup =()=>{
        console.log(signupdata)
        if(signupdata?.name || signupdata?.email || signupdata?.pass){
            let authData = JSON.stringify(signupdata)
            localStorage.setItem("data",authData)
        }
    }

    return (
        <div className='my-5'>

            <div className='container col-5 border border-dark p-4'>
                <div className='mb-3'>
                    <span className=' h3  text-warning '> Signup Page </span>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Name</label>
                    <input type="text" className="form-control" placeholder="Jhon Doe" name='name' onChange={handleChange} />
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
                    <button className="btn btn-primary" type="button" onClick={handleSignup}>SignUp button</button>
                    {/* <button className="btn btn-primary" type="button">Button</button> */}
                </div>
            </div>
        </div>
    )
}

export default Signup