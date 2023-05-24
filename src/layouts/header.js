import {useLocation} from 'react-router-dom';
import '../style/layouts/header.css';

function Header() {
  const location = useLocation().pathname

  if(location === '/search' || location === '/scan'){
    return (
      <header className="header">
        <p>{location}</p>
      </header>
    );
  }
  if(location === '/'){
    return (
      <header className="header">
        <h1>Ma collection</h1>
      </header>
    );
  }
}

export default Header;