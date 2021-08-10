import React from 'react'
import "../App.css" ;


class Navbar extends React.Component {
  render() {
    return (
       
       
        <nav className="navbar navbar-expand-lg bg-secondary text-uppercase " id="mainNav">
        <div className="container">
            <a className="navbar-brand" href="#page-top">Remons Blog</a>
            <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#home">Home</a></li>
                    <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#blogpost">Blog Post</a></li>
                    <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About</a></li>
                    <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">Login</a></li>
                </ul>
            </div>
        </div>
    </nav>
    
     
    )

  }  
}

export default Navbar
