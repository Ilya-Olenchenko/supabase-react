import React from 'react'

import logo from './logo512.png'
import classes from './Header.module.css'


const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo_text}>
                <img className={classes.logo_img} src={logo} />
                <h1 className={classes.nice_done_h1} >Nicely Done</h1>
            </div>
            
            <div className={classes.links}>
                <a href='/about'>about</a>
                <a href='/posts'>Стрічка з контентом</a>
            </div>
        </header>
    )
}

export default Header;