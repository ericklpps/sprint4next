import Link from 'next/link';


const Header: React.FC = () => {
  return (
    <header className="bg-white text-gray-800 p-4 rounded shadow-md">
      <div className="flex items-start">
        <div className="flex items-start">
          <img src="/logosalesforce.png" alt="Logo Salesforce" className="h-12 w-auto mr-2" />
        </div>
        <nav>
          <ul className="flex space-x-4 p-3" style={{ fontSize: '1.1rem' }}>
            <li className="mr-4">
              <Link href="/" legacyBehavior className="hover:text-blue-500">
                Inicio
              </Link>
            </li>
            <li className="mr-4">
              <Link href="/Login" legacyBehavior className="hover:text-blue-500">
                Login
              </Link>
            </li>
            <li className="mr-4">
              <Link href="/Cadastro" legacyBehavior className="hover:text-blue-500">
                Cadastro
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
