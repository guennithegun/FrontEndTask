import React from 'react';
import { Link } from 'react-router-dom';

import './overlayone.css';

export function OverlayOne(props) {
  if (!props.showOverlay) {
    return null;
  }
  return (
    <div className="overlay">
      <div className="overlay--content">
        <h1 className="overlay--content-headline">I am an awesome Overlay</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        <div className="overlay--buttons">
          <button className="button">CONTACT</button>
          <Link to={'/'}>
            <button className="button button-close" onClick={props.toggleOverlay} >CLOSE</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
