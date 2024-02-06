import React from "react";

interface Props {
    changeLocation: (location: string) => void;
}

const Appbar:React.FC = ({changeLocation}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <span className="navbar-brand">Plovo</span>
          <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                      <a href="#" className="nav-link"
                         onClick={() => changeLocation('home')}>Home</a>
                  </li>
                  <li className="nav-item">
                      <a href="#" className="nav-link"
                         onClick={() => changeLocation('new-dish')}>New dish</a>
                  </li>
                  <li className="nav-item">
                      <a href="#" className="nav-link"
                         onClick={() => changeLocation('new-juise')}>New juise</a>
                  </li>
              </ul>
          </div>
      </div>
    </nav>
  );
};

export default Appbar;