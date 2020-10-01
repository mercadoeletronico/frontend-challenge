import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './styles/main.scss'

//import App from './App';
import Head from './components/header/header';
// import Supplier from './components/supplier/supplier';
// import Shipto from './components/shipto/shipto';
// import Billto from './components/billto/billto';
// import Chargeto from './components/chargeto/chargeto';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <div className="row">
      <div className="col-sm-12">
        <Head />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
