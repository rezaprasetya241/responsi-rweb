import React from 'react'
import './style/Card.style.css'
import berita from '../assets/berita1.png'
import Data from './Data.json'
export default function Card() {
  return (
    <>
    {
      Data.map( (record, key) => {
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
      {/* <div className='card'>
          <div className='cardImg'>
              <img src={berita}/>
          </div>
          <div className='cardText'>
              <div>
                  <h5>Pendaftaran Anggota UKM Mahasiswa Baru Angkatan 2022</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id ultrices quam posuere phasellus vestibulum, ultricies quam. Pretium adipiscing aliquam tellus faucibus nunc, tempus imperdiet. Massa feugiat duis nec mi faucibus retium adipiscing.</p>
                  <button>Read More</button>
              </div>
          </div>
      </div> */}
    </>
  )
}
