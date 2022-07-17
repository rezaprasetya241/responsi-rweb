import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../assets/logoUad.png'
import './style/Footer.style.css'
import {HiOutlineMail} from 'react-icons/hi'
import {IoCall} from 'react-icons/io5'
export default function Footer() {
  return (
    <footer>
        <div className='container'>
            <div className='footer__list'>  
                <div className='footer_page_logo'>
                    <div style={{display: 'flex'}}>
                        <img src={Logo} alt='logo parfume'/>
                        <div className='footer_page_logo_txt'>
                            <h6>UNIVERSITAS AHMAD DAHLAN</h6>
                            <p>Jl. Kapas 9, Semaki, Umbulharjo, Yogyakarta 55166</p>
                            <p><HiOutlineMail/> ukmuad@gmail.com</p>
                            <p><IoCall/> Telp. (0287) 64564564 </p>
                        </div>
                    </div>
                </div>
                <Row className='footer_row'>
                    <Col md>
                        <h6 className='text-white'>Account</h6>
                        <p className='footer__link'>My Account</p>
                        <p className='footer__link'>Education</p>
                        <p className='footer__link'>Moment</p>
                    </Col>
                    <Col md>
                        <h6 className='text-white'>Tentang UKM UAD</h6>
                        <p className='footer__link'>Sambutan Ketua UKM</p>
                        <p className='footer__link'>Sejarah</p>
                        <p className='footer__link'>Visi dan Misi</p>
                        <p className='footer__link'>Manajemen</p>
                    </Col>
                    <Col md>
                        <h6 className='text-white'>Kerjasama</h6>
                        <p className='footer__link'>Antar Kampus</p>
                        <p className='footer__link'>Antar Fakultas</p>
                        <p className='footer__link'>Startup</p>
                        <p className='footer__link'>Corporate</p>
                    </Col>
                </Row>
            </div>
        </div>
            <p className='copyright' style={{width: "100%", background: '#284B73'}}>Copyright 2022 • Made With Love by Hey Asaa.</p>
    </footer>
  )
}
