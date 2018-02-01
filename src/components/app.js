import React, { Component } from 'react';
import Payments from './../containers/payments';
import Account from './../containers/account';
import MakePayments from './../containers/make_payments';

export default class App extends Component {
  render() {
    return (
      <div>
      <div className="jumbotron">
        <h1>Stellar, payments!</h1>
        <p>Real time payments!!</p>
      </div>
      <div className="col-md-12">
        <div className="col-md-6">
          <Account />
          <MakePayments />
        </div>
        <div className="col-md-6">
          <Payments />
        </div>
      </div>
      </div>
    );
  }
}
