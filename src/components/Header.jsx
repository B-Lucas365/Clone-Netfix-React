import React from 'react'
import './Header.css'

export default (props) => {
    return (
        <header className={props.black ? 'black' : ''}>
            <div className='header--logo'>
                <a href="/">
                    <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png" alt="" />
                </a>
            </div>
            <div className='header--user'>
                <a href="/">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png" alt="" />
                </a>
            </div>
        </header>
    )
}