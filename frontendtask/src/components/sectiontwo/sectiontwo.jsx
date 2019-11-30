import React from 'react';

export function SectionTwo(props) {
  return (
    <section className="section">
    <div className="section--content">
      <div className="section--wrapper">
        <h2><mark className="section--mark-blue">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</mark></h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
        <button>ZUR STORY</button>
      </div>
    </div>
      <div className="section--content">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/8aGhZQkoFbQ" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="eventloop"></iframe>
      </div>
    </section>
  );
}
