import React from 'react'
import { NavLink } from 'react-router-dom'
import '../style/footer.css'

function Footer() {
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