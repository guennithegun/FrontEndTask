import React from 'react';

import './footer.css';

export function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer--links">
        <ul>
          <li>DATENSCHUTZ</li>
          <li>NUTZUNGSBEDINGUNGEN</li>
          <li>IMPRESSUM</li>
        </ul>
      </div>
      <div className="footer--socialmedia">
        <div><a href="#">FACEBOOK</a></div>
        <div><a href="#">INSTAGRAM</a></div>
        <div><a href="#">YOUTUBE</a></div>
      </div>
    </footer>
  );
}
