import React from 'react'
import './Header.css'


const Header = ({heading, color}) => {
    return (
        <div className="page-logo mb-2">
            <h1 className={`text-${color}`}>{heading}</h1>
        </div>
    )
}

export default Header
