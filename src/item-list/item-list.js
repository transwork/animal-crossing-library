import React from 'react';
import './item-list.css';
import DataTable from "./data-table";


class ItemList extends React.Component {
  render() {

    return (
      <div className="item-list-wrapper">
        {/*<img*/}
        {/*  className="logo"*/}
        {/*  src="https://w.namu.la/s/1cf323b3e7b85343142ce18d3893c7fe882b39451070db6bc5cd0d3d8f5daec6db7d8b4ab55f2e46506b50b6f3ad481734d188ca3001fb71b53ebd6abf7a5df5fc27c2bb1149e2683f02853dd0b872822d6670ea5616e04be6d93d9decd02088"/>*/}

        <div className="data-table-container">
          <DataTable></DataTable>
        </div>
      </div>
    );
  }
}

export default ItemList