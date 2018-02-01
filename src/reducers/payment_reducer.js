import {
  FETCH_TRANSACTIONS,
  CREATE_WALLET,
  MAKE_PAYMENT,
  UPDATE_WALLET,
  UPDATE_KEY
} from './../actions/action_types';

export const transactions = (state = [], action) => {
  switch (action.type) {
    case FETCH_TRANSACTIONS:
      return [...state, action.transactions];
    default:
      return state;
  }
};


const initialState = {
  publicKey: '',
  privateKey: ''
};

export const wallet = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_WALLET:
      return {
        publicKey: action.public,
        privateKey: action.private,
        balance: action.balance
      };
    case UPDATE_WALLET:
      return {
        ...state,
        balance: action.balance
      };
    case UPDATE_KEY:
      return {
        ...state,
        [action.key]: action.payloadKey
      };
    default:
      return state;
  }
};

export const makePayment = (state = '', action) => {
  switch (action.type) {
    case MAKE_PAYMENT:
      return state;
    default:
      return state;
  }
};
