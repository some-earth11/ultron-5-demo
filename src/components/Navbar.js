import 'bootstrap/dist/css/bootstrap.min.css';  
import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import {Button} from './Button';
import './Navbar.css';
function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize',showButton);

  return (
    <>
      <nav className='navbar'>
          <div className='navbar-container'>
              <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                  Mis-Match
                  {/* add logo here */}
              </Link>
              <div className="menu-icon" onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
              </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/About' className='nav-links' onClick={closeMobileMenu}>
                        Why we Need Mis-Match
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Cards' className='nav-links' onClick={closeMobileMenu}>
                        Our Services
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/MobileApp' className='nav-links' onClick={closeMobileMenu}>
                        Mobile App
                    </Link>
                </li>
              </ul>
              
          </div>
      </nav>

    </>
  )
}

export default Navbar;
