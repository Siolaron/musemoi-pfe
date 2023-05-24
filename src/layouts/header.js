import {useLocation} from 'react-router-dom';
function Header() {
  const location = useLocation().pathname
  if(location === '/search' || location === '/'){
    return (
      <header className="header">
        <p>HEADER</p>
      </header>
    );
  }
}

export default Header;