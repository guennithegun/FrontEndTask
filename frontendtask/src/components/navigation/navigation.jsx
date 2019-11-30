import React from 'react';

import './navigation.css';

export function Navigation(props) {

  return (
    <nav className="navigationBar">
      <div className="navigationBar--content navigationRed">
        <ul className="navigationBar--list">
          <li className="navigationBar--list-item"><a href="#">Lorem</a></li>
          <li className="navigationBar--list-item"><a href="#">Ipsum</a></li>
          <li className="navigationBar--list-item"><a href="#">Dolor Sit</a></li>
          <li className="navigationBar--list-item active--navigationBarItem-left"><a href="#">Ament Consetetur</a></li>
          <li className="navigationBar--list-item"><a href="#">Sadipscing</a></li>
        </ul>
      </div>
      <div className="navigationBar--content navigationBlack hiddenMobile">
        <ul className="navigationBar--list">
          <li className="navigationBar--list-item"><a href="#">Impressum</a></li>
          <li className="navigationBar--list-item"><a href="#">Kontakt</a></li>
        </ul>
      </div>
    </nav>
  );
}
