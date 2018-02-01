import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createWallet, updateKey } from './../actions/payments';

class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: 0,
      receivingAddress: '',
      inputWallet: false,
    };
  }
  createWallet() {
    this.props.createWallet();
  }
  inputWallet() {
    this.setState({ inputWallet: !this.state.inputWallet });
  }
  updateKey(payload) {
    this.props.updateKey(payload);
  }
  renderInputWallet() {
    if (this.state.inputWallet) {
      return (
        <div>
          <div className="input-group key">
            <input
                type="text"
                className="form-control"
                aria-label="Amount (to the nearest dollar)"
                value={this.props.wallet.publicKey}
                onChange={(e) => this.updateKey({ payloadKey: e.target.value, key: 'publicKey' })}
            />
            <span className="input-group-addon">Public Key</span>
          </div>
          <div className="input-group key">
            <input
                type="text"
                className="form-control"
                aria-label="Amount (to the nearest dollar)"
                value={this.props.wallet.privateKey}
                onChange={(e) => this.updateKey({ payloadKey: e.target.value, key: 'privateKey' })}
            />
            <span className="input-group-addon">Private Key</span>
          </div>
        </div>
      );
    }
  }

  renderBalance() {
    if (this.props.wallet.publicKey) {
      return (
        <div>
          <p className="small"> Your Address: {this.props.wallet.publicKey}</p>
          <p className="small"> Balance: {this.props.wallet.balance} XLM</p>
        </div>
      );
    }
  }
  render() {
    console.log(this.props);
    return (
      <div className="account">
        <div className="list-group-item">
            <p>Stellar Account</p>

            <button className="btn btn-primary buttonAcc" onClick={() => this.createWallet()}>
                Create Wallet
            </button>
            <button className="btn btn-info buttonAcc" onClick={() => this.inputWallet()}>
                Already have a Wallet
            </button>
            <br />
            {this.renderInputWallet()}
            {this.renderBalance()}
        </div>
      </div>
    );
  }
}


export default connect(state => state, { createWallet, updateKey })(Account);
