import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import ItemList from './item-list/item-list.js';
import './index.css';

const CLIENT_VERSION = '0.1';

ReactDOM.render(
  <ItemList/>,
  document.getElementById('root'),
);

