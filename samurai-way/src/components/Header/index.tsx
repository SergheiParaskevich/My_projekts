import React from 'react';
import style from './style.module.css'

function Header() {
    return (
        <div className={style.header}>
           <img  className={style.logo} src={'http://surl.li/dxchi'}/>
        </div>
    );
}

export default Header;