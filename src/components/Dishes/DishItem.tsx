import React from 'react';
import {Dish} from "../../types";

const noImageAvailable = 'https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg';

interface Props {
  dish: Dish;
  onClick: React.MouseEventHandler;
}

const DishItem: React.FC<Props> = ({dish, onClick}) => {
  const image = dish.image || noImageAvailable;
  const imageStyle = {
    background: `url(${image}) no-repeat center center / cover`,
  }

  return (
    <div className="card mb-2" onClick={onClick}>
      <div className="row g-0">
        <div className="col-sm-4 rounded-start" style={imageStyle}/>
        <div className="col-sm-8">
          <div className="card-body">
            <h5 className="card-title">{dish.name}</h5>
            <p className="card-text small">{dish.description}</p>
            <p className="card-text">{dish.price} KGS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishItem;