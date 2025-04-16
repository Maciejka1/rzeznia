import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom'
import logo from '../img/logo.png'
function Nav() {
  const [navControl, setNavControl] = React.useState()
  return (
    <div class='z-50'>
        <div onClick={() => setNavControl('0')}>
            <div className="open-menu fixed m-5 text-4xl top-0 right-0 md:hidden" >
                <i className="fas fa-bars"></i>
            </div>
        </div>
        <nav className="pr-2 flex flex-col top-0 -right-60 items-center w-40 h-screen bg-white fixed md:justify-between md:w-full md:h-12  md:right-0 md:left-0
        md:my-2 md:flex-row" style={{right: navControl}}> 
        <div className="md:h-full md:flex items-center">
            <img src={logo} alt="logo" className=" h-20 mt-8 rounded-full md:m-0 md:h-full md:rounded-none"/>
            <h1 className="md:ml-2 text-lg">Rzeźnia Anthony Cubeth</h1>
        </div>
            <ul className="flex flex-col mb-10 text-black gap-5 font-semibold text-lg md:mb-0 md:flex-row md:text-black">
                <Link to="/">
                    <li>Strona główna</li>
                </Link>
                <Link to="/cennik">
                    <li>Cennik</li>
                </Link>
                <Link to="/kontakt">
                    <li>Kontakt</li>
                </Link>
                <Link to="/informacje">
                    <li>Informacje</li>
                </Link>
                <Link to="/rytualy">
                    <li>Rytuały</li>
                </Link>
            </ul>
            <div className="text-4xl md:hidden" onClick={() => setNavControl('-100%')}>
                <i className="fas fa-times"></i>
            </div>
        </nav>
    </div>
  );

}

export default Nav;