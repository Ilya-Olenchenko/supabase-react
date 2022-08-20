import React from 'react'

import logo from './logo512.png'
import classes from './Header.module.css'


const Header = () => {
    return (
        <header className={classes.header}>
            <img className={classes.logo_img} src={logo}/>
            <h1 className={classes.nice_done_h1} >Nicely Done</h1>
        </header>
    )
}

export default Header;