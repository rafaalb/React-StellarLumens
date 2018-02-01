import React, { Component } from 'react';
import { connect } from 'react-redux';
import { makePayment } from './../actions/payments';


class MakePayments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: 0,
      receivingAddress: ''
    };
  }
  makePayment() {
    this.props.makePayment({
      receiver: this.state.receivingAddress,
      amount: this.state.amount,
    });
  }
  render() {
    return (
      <div className="account">

        <div className="list-group-item">
            <p>Make Payments</p>

            <p className="small"> Your Address: { this.props.wallet.publicKey }</p>
            <br />
            <p className="small"> Input the receiving address: </p>
            <div className="input-group">
              <input
                  type="text"
                  className="form-control"
                  aria-label="Amount (to the nearest dollar)"
                  value={this.state.receivingAddress}
                  onChange={(e) => this.setState({ receivingAddress: e.target.value })}
              />
              <span className="input-group-addon">Address</span>
            </div>
            <div className="input-group payInput">
              <input
                  type="number"
                  className="form-control"
                  aria-label="Amount (to the nearest dollar)"
                  value={this.state.amount}
                  onChange={(e) => this.setState({ amount: e.target.value })}
              />
              <span className="input-group-addon">$</span>
            </div>
            <button className="btn btn-primary" onClick={() => this.makePayment()}>
              Pay
            </button>
        </div>
      </div>
    );
  }
}


export default connect(state => state, { makePayment })(MakePayments);
