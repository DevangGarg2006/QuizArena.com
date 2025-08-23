import React from 'react'
import logo from './Qu.png';
import './style.css';
import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-black" >
            <div className="container-fluid ">
                <img src={logo} alt="Bootstrap" width="80" height="60" style={{ backgroundColor: "white" }} />
                <Link className="navbar-brand " to="/" style={{ fontSize: "1.6rem", fontWeight: "700", color: "white", marginLeft: "1%" }}>QuizArena.com</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav d-flex mb-2 mb-lg-0 ms-auto">
                        <li className="nav-item me-2">
                            <Link className="nav-link active" style={{ color: "white",cursor:"pointer" }} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item me-2">
                            <Link className="nav-link active" style={{ color: "white" ,cursor:"pointer" }} aria-current="page" to="/Gk">General Knowledge</Link>
                        </li>
                        <li className="nav-item me-2">
                            <Link className="nav-link active" style={{ color: "white" ,cursor:"pointer" }} aria-current="page" to="/History">History</Link>
                        </li>
                        <li className="nav-item me-2">
                            <Link className="nav-link active" style={{ color: "white" ,cursor:"pointer" }} aria-current="page" to="/Sports">Sports</Link>
                        </li>
                        <li className="nav-item me-2">
                            <Link className="nav-link active" style={{ color: "white" ,cursor:"pointer" }} aria-current="page" to="/Animals">Animals</Link>
                        </li>
                        <li className="nav-item me-2">
                            <Link className="nav-link active" style={{ color: "white" ,cursor:"pointer" }} aria-current="page" to="/AboutUs">About Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
