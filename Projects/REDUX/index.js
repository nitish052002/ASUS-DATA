import axios from "axios";
import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";

// BASE URL
const API = "http://localhost:3000/users";

//ACTIONS
const INC = "increment";
const INIT = "init";

// STORE
const store = createStore(
  combineReducers({
    likes: likesReducer,
    products: productsReducer,
  }),
  applyMiddleware(logger.default, thunk)
);

// LIKES REDUCER
function likesReducer(state = { likes: 1 }, action) {
  switch (action.type) {
    case INC:
      return { ...state, likes: state.likes + 1 };
    case INIT:
      return action.payload;
    default:
      return state;
  }
}

// PRODUCTS REDUCER

function productsReducer(state = { likes: 1 }, action) {
  switch (action.type) {
    case INC:
      return { ...state, likes: state.likes + 1 };
    case INIT:
      return action.payload;
    default:
      return state;
  }
}

// INITIALISING INITAL STATE

function initUser(data) {
  return { type: INIT, payload: data };
}

const initStore = (id) => {
  return async (dispatch, getState) => {
    const { data } = await axios.get(`${API}?id=${id}`);
    console.log("data  : ", data);
    dispatch(initUser(data));
  };
};

store.dispatch(initStore(2));
