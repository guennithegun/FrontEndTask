import React from 'react';

import './sectioncards.css';

export function SectionCards(props) {
  const { cardData } = props;
  return (
    <section className="sectionCards">
      <div className="sectionCards--headline">
        <h1><b>Lorem ipsum</b> dolor sit amet, consetetur sadipscing elitr.</h1>
      </div>
      <div className="sectionCards--cards">
        {cardData.map(data => {
          return (
            <div key={data.id} className="card">
              <div className="card--content">
                <div className="card--image">
                  <img src={data.picUrl} alt="awesome details" />
                </div>
                <div className="card--headline">
                  <h3>{data.headline}</h3>
                </div>
                <p>{data.contentText}</p>
              </div>
              <div className="card--button">
                <a href="#">DETAILS ></a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
