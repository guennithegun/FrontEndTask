import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

export function Header(props) {
  const { employees } = props;

  return (
    <header className="header">
      <div className="header--content">
        <div className="header--content-introduction">
          <h5>LOREM IPSUM DOLOR</h5>
          <h1><span>LOREM IPSUM DOLOR SIT AMET,</span> CONSETETUR SADIPSCING ELTIR.</h1>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
        </div>
        <div className="header--content-employees">
          {employees.map(employee => {
            return (
              <div key={employee.name} className="employee">
                <Link to={`/overlay${employee.name}`}>
                  <img className="employee--image" src={employee.picUrl} alt="awesome employee" onClick={props.toggleOverlay} />
                </Link>
                <p className="employee--name">{employee.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
}
