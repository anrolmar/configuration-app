import './NavBar.scss';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import Applications from '../../views/Applications/Applications';
import Configurations from '../../views/Configurations/Configurations';
import Home from '../../views/Home/Home';

export const NavBar: React.FC = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <i className="icon fas fa-home"></i>Home
            </Link>
          </li>
          <li>
            <Link to="/configurations">
              <i className="icon fas fa-cogs"></i>Configurations
            </Link>
          </li>
          <li>
            <Link to="/applications">
              <i className="icon fas fa-rocket"></i>Applications
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/configurations" element={<Configurations />} />
        <Route path="/applications" element={<Applications />} />
      </Routes>
    </BrowserRouter>
  );
};
