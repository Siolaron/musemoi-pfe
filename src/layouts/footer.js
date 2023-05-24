import React from 'react'
import { NavLink } from 'react-router-dom'
import '../style/layouts/footer.css'
import {useLocation} from 'react-router-dom';

function Footer() {

  const location = useLocation().pathname
  if(location === '/search' || location === '/scan' || location === '/'){
    document.querySelector('main').classList.remove('art')
  }else{
    document.querySelector('main').classList.add('art')
  }
  
  return (
    <>
      <footer className='footer'>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
        Collection
        </NavLink>
        <NavLink
          to="/scan"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
            }
          >
        Scan
        </NavLink>
        <NavLink
            to="/search"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
        Recherche
        </NavLink>
      </footer>
    </>
  );
}

export default Footer;