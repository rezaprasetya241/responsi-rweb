import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import './style/navbar.style.css'
import logo from '../assets/logoUad.png'

export default function Navbar() {
    const handleLogout = () => {
        localStorage.removeItem("accesstoken")
        window.location="/login"
    }
  return (
    <div>
        <div className='navbar'>
            <div className='container'>
                <div className='navbar_page'>
                    <div className='navbar_page_logo'>
                        <img src={logo}/>
                        <div className='navbar_page_logo_txt'>
                            <h6>UNIVERSITAS AHMAD DAHLAN</h6>
                            <p>Jl. Kapas 9, Semaki, Umbulharjo, Yogyakarta 55166</p>
                        </div>
                    </div>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><a href="https://uad.ac.id/id/">Profile</a></li>
                            <li><a href="https://uad.ac.id/id/unit-kegiatan-mahasiswa-2/">News</a></li>
                            <li><button onClick={handleLogout}>Logout</button></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
  )
}
