import React from 'react';
import ReactDOM from 'react-dom';
import './item-list.css';


class ItemList extends React.Component {
  /*
  type:['물고기','식물'],
  period:{m1...m12,h1...h24},
  discover:["강","연못"]
  */
  constructor() {
    super();
    const BOOKS = [
      {
        type: "물고기",
        period: {
          m1: true,
          m2: true,
          m3: true,
          m4: false,
          m5: false,
          m6: false,
          m7: false,
          m8: false,
          m9: false,
          m10: false,
          m11: true,
          m12: true,
          h1: true
        },
        discover: "강",
        price: 900,
        size: 1
      }
    ];
    this.state = {BOOKS: BOOKS};
  }

  render() {

    return (
      <div>
        <div>어서와요 동물의 숲 도감 v0.1</div>
        <div>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((number) => {
            return <label className="month-box"><input type="checkbox"/>{number}월</label>;
          })}
        </div>
        <div className="list-wrapper">
          {this.state.BOOKS.map((data) => {
            return (
              <div class="list-item-wrapper">
                <div class="list-item-type">{data.type}</div>
                <div class="list-item-discover">{data.discover}</div>
                <div class="list-item-price">{data.price}</div>
                <div class="list-item-size">{data.size}</div>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default ItemList