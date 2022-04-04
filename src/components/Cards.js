import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
function Cards() {
  return (
    <div className="cards">
      <h1 className="">Check out these Epic Destinations</h1>
      <div className="cards_container">
        <div className="cards_wrapper">
          <ul className="cards_items">
            <CardItem
              src="Project1-img/img-9.jpg"
              text="Explore the hiden waterfall deep inside the Amazon Jungle"
              label="Advanture"
              path="/services"
            />
            <CardItem
              src="Project1-img/img-8.jpg"
              text="Explore the hiden waterfall deep inside the Amazon Jungle"
              label="Advanture"
              path="/services"
            />
            <CardItem
              src="Project1-img/img-7.jpg"
              text="Explore the hiden waterfall deep inside the Amazon Jungle"
              label="Advanture"
              path="/services"
            />
            <CardItem
              src="Project1-img/img-6.jpg"
              text="Explore the hiden waterfall deep inside the Amazon Jungle"
              label="Advanture"
              path="/services"
            />
            <CardItem
              src="Project1-img/img-5.jpg"
              text="Explore the hiden waterfall deep inside the Amazon Jungle"
              label="Advanture"
              path="/services"
            />
            <CardItem
              src="Project1-img/img-4.jpg"
              text="Explore the hiden waterfall deep inside the Amazon Jungle"
              label="Advanture"
              path="/services"
            />
            <CardItem
              src="Project1-img/img-3.jpg"
              text="Explore the hiden waterfall deep inside the Amazon Jungle"
              label="Advanture"
              path="/services"
            />
            <CardItem
              src="Project1-img/img-2.jpg"
              text="Explore the hiden waterfall deep inside the Amazon Jungle"
              label="Advanture"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
