import React from 'react'
import { Link } from 'react-router'

function Navbar() {
    return (
        <div className='navbar-links'>
            <Link className='link' to='/canlisonuclar'>Canlı Sonuçlar</Link>
            <Link className='link' to='/'>Puan Durumu</Link>
            <Link className='link' to='/golkralligi'>Gol Krallığı</Link>
        </div>
    )
}

export default Navbar