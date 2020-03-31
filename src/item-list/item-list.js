import React from 'react';
import './item-list.css';
import DataTable from "./data-table";


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
      <React.Fragment>
        <div>어서와요 동물의 숲 도감</div>
        <div class="data-table-container">
          <DataTable></DataTable>
        </div>
      </React.Fragment>
    );
  }
}

export default ItemList