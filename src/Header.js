import React from 'react'

const Header = () => {
    const handlelogout = ()=>{
        localStorage.removeItem("data")
    } 
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">OPPS</a>
                <button type="button" class="btn btn-danger" onClick={handlelogout}>LogOut</button>
                </div>
            </nav>
        </div>
    )
}

export default Header