import React from 'react';
import { Link } from 'react-router-dom';
function CardItem({src,text, label,path}) {
  return (
    <>
      <li className="cards_item">
        <Link to={path} className="cards_item_link">
          <figure className="cards_item_pic-wrap" data-category={label}>
            <img
              src={src}
              alt="Travel Images"
              className="cards_item_img"
            />
          </figure>
          <div className="cards_item_info">
              <h5 className="cards_item_text">{text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
