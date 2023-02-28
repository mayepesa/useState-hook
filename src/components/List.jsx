import React from "react";
import './List.css'

const List = ({ items }) => {
  console.log(items);
  return (
    <div style={{display: 'flex'}}>
      {items.map((item, index) => {
        return (
          <div key={index} className="character-container">
            <img className="img" src={item.imgUrl} alt={item.name} />
            <p>{item.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default List;
