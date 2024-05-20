import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <img src="/logosalesforce.png" alt="Logo Salesforce" className="logo" />
        </div>
        <nav>
          <ul className="nav-list">
            <li className="nav-item">
              <Link href="/" legacyBehavior>
                <a className="nav-link">Inicio</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/Login" legacyBehavior>
                <a className="nav-link">Login</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/Cadastro" legacyBehavior>
                <a className="nav-link">Cadastro</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
