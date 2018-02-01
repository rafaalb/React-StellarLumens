import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTransactions } from './../actions/payments';

class Payments extends Component {
  componentWillMount() {
    this.props.fetchTransactions();
  }
  renderTransactions() {
    return this.props.transactions.map((transaction) => {
      return (
        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{transaction.type}</h5>
            <small>{transaction.created_at}</small>
          </div>
          {transaction.type === 'create_account'
          && <p className="mb-1">Starting balance: {transaction.starting_balance}</p>}
          {transaction.type === 'payment'
          && <p className="mb-1 small">Paid {transaction.amount} to: {transaction.to}</p>}
          <small>Transaction Hash: {transaction.transaction_hash}</small>
        </a>
      );
    });
  }

  render() {
    console.log(this.props);

    return (
      <div className="payments">
        <div className="list-group">
          {this.renderTransactions()}
        </div>
      </div>
    );
  }
}

export default connect((state) => (state), { fetchTransactions })(Payments);
