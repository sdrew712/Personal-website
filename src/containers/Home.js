import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <Link to='/about'>
            <div className='new-style'>
                Hello world
            </div>
        </Link>
    )
}

export default Home
