import _ from 'lodash';
import React, {Component, Fragment} from 'react';
import {Checkbox, Table} from "semantic-ui-react";
import AF_RESOURCES from "../data";
import "./data-table.css";

const tableData = AF_RESOURCES;
export default class TableExampleSortable extends Component {
  state = {
    column: null,
    data: tableData,
    direction: null,
    config : {
      month:[1,2,3,4,5,6,7,8,9,10,11,12]
    }
  }


  handleSort = (clickedColumn) => () => {
    const {column, data, direction} = this.state

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: 'ascending',
      })

      return
    }

    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })

  }

  isValidMonth = (emergence) => {
    return _.intersection(emergence,this.state.config.month);
  }

  isCheckedMonth = (month) => {
    return (this.state.config.month.indexOf(month)>=0);
  }

  handleChangeMonth = (e,{checked,value}) =>{
    console.log(checked,value);
  }

  render() {

    const {suirChecked,column, data, direction,config} = this.state;

    return (
      <Fragment>
        {_.range(1, 13).map((v) => {
          return <Checkbox
            onChange={this.handleChangeMonth}
            checked={this.isCheckedMonth(v)}
            value={v}
            label={<label>{v}월</label>}/>
        })}
        <Table sortable celled fixed>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell
                sorted={column === 'type' ? direction : null}
                onClick={this.handleSort('type')}
              >
                종류
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'name' ? direction : null}
                onClick={this.handleSort('name')}
              >
                이름
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'img' ? direction : null}
                onClick={this.handleSort('img')}
              >
                모습
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'price' ? direction : null}
                onClick={this.handleSort('price')}
              >
                가격
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'size' ? direction : null}
                onClick={this.handleSort('size')}
              >
                크기
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'emergence.placement' ? direction : null}
                onClick={this.handleSort('emergence.placement')}
              >
                출현 장소
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'emergence.month' ? direction : null}
                onClick={this.handleSort('emergence.month')}
              >
                출현 기간
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'emergence.hour' ? direction : null}
                onClick={this.handleSort('emergence.hour')}
              >
                출현 시간
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {_.map(data, ({img, name, type, price, emergence, size}) => (
              <Table.Row key={name} hidden={!this.isValidMonth(emergence.month)}>
                <Table.Cell>{type}</Table.Cell>
                <Table.Cell>{name}</Table.Cell>
                <Table.Cell className="thumbnail"><img src={img.url}/></Table.Cell>
                <Table.Cell>{price}</Table.Cell>
                <Table.Cell>{size}</Table.Cell>
                <Table.Cell>{emergence.placement}</Table.Cell>
                <Table.Cell>
                  <div className="month-wrapper">
                    {Object.keys(emergence.month).map((v, index) => {
                      return (
                        <div className={`month ${emergence.month[v] ? "on" : ""}`}>{v}</div>
                      );
                    })}
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <div className="hour-wrapper">
                    {Object.keys(emergence.hour).map((v, index) => {
                      return (
                        <div className={`hour ${emergence.hour[v] ? "on" : ""}`}>{v}</div>
                      );
                    })}
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Fragment>
    )
  }
}