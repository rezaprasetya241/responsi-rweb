import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import orang  from '../assets/orang.png'
import './styles/Home.style.css'
import Navbar from '../components/navbar'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Data from '../components/Data.json'
import '../components/style/Card.style.css'
export default function Home() {
    const [searchNews, setSearchNews] = useState("")
  return (
    <div className='homePage'>
        <Navbar/>
        <div className='homePage_main'>
            <div style={{color: 'white'}}>
                <h3>UNIT KEGIATAN MAHASISWA</h3>
                <h3>UNIVERSITAS AHMAD DAHLAN</h3>
            </div>
            <div>
                <input type="text" placeholder="What you looking for..." onChange={event => {
                    setSearchNews(event.target.value)
                }}/>
                <button>Search</button>
            </div>
        </div>
        <div className='news'>
            <div className='container'>
                <div>
                    <div style={{margin: '40px auto',}} className='text-center title'>
                        <h3>Berita Terbaru</h3>
                    </div>
                    {
                    Data.filter((val) => {
                        if(searchNews == "") {
                            return val
                        } else if(val.title.toLowerCase().includes(searchNews.toLowerCase())){
                            return val
                        }
                    }).map( (record, key) => {
                        return(
                        <div className='card' key={key}>
                        <div className='cardImg'>
                            <img src={record.urlPic}/>
                        </div>
                        <div className='cardText'>
                            <div>
                                <h5>{record.title}</h5>
                                <p>{record.desc}</p>
                                <button>Read More</button>
                            </div>
                        </div>
                    </div>
                        )
                    })
                    }
                </div>

            </div>
        </div>

        <div className='displayUkm'>
            <div className='container'>
                <div>
                    <div style={{margin: '40px auto',}} className='text-center title'>
                        <h3>Unit Kegiatan Mahasiswa</h3>
                    </div>
                    <div className='diplay_listUkm'>
                        <div className='listUkm'>
                            <Link to="/">BADMINTON</Link>
                        </div>
                        <div className='listUkm'>
                            <Link to="/">MADAPALA</Link>
                        </div>
                        <div className='listUkm'>
                            <Link to="/">LENSA</Link>
                        </div>
                        <div className='listUkm'>
                            <Link to="/">KARATE</Link>
                        </div>
                        <div className='listUkm'>
                            <Link to="/">MUSIK</Link>
                        </div>
                        <div className='listUkm'>
                            <Link to="/">SENI TARI</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
