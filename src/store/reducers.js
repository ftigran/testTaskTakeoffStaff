import {
  ACTION_PRIZ_SUCCESS_MODAL,
  ACTION_APPLY_MODAL,
  ACTION_SELECT_ADDRESS_DELIVERY,
  ACTION_SELECT_ADDRESS_ERROR,
  ACTION_SELECT_ADDRESS,
  ACTION_SELECT_CITY,
  ACTION_LOGGIN_USER,
  ACTION_CHANGE_TASK,
  ACTION_ADD_TASK_ROW,
  ACTION_INSTAPOST_SEND,
  ACTION_DECREMENT_SCORE,
  ACTION_ADD_PRIZ_ROW,
  ACTION_SELECT_PRIZ,
  ACTION_ADRESS_MODAL,
  ACTION_SELECT_PRIZ_MODAL,
  ACTION_RESET_EMAIL_APPROVE_MODAL,
  ACTION_LOGIN_MODAL,
  ACTION_SET_EMAIL_APPROVE_MODAL,
  ACTION_TOGGLE_ERROR,
  ACTION_SET_POPUP,
  ACTION_REGISTRATION_USER,
} from "./actions";
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
// Or with Immutablejs:
// import { reducer as formReducer } from 'redux-form/immutable';
import {
  rowsPrizi,
  rowsTasks,
  createData,
  ColumnsPrizi,
  ColumnsTasks,
  createDataPrizi,
} from "./defStore";

const initialState = {
  // error: false,
  // popupOpen: false,
  isLogged: true,
  RegEmailApproveModalOpen: false,
  LoginModalOpen: false,
  ResetEmailApproveModalOpen: false,
  selectPrizModalOpen: false,
  prizSuccessModalOpen: false,
  adressModalOpen: false,
  instaPostModalOpen: false,
  ApplyModalOpen: false,
  priz: {},
  task: 1,
  rowsPrizi,
  rowsTasks,
  ColumnsPrizi,
  ColumnsTasks,
  score: 22,
  selectCity: 0,
  address: "",
  addressError: false,
  addressDelivery: false,
};
export const rootRedducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_LOGGIN_USER:
      console.log("userLog");
      return { ...state, isLogged: action.payload };
    case ACTION_SET_EMAIL_APPROVE_MODAL:
      return { ...state, RegEmailApproveModalOpen: action.payload };
    case ACTION_LOGIN_MODAL:
      console.log("action");
      console.log(action);
      return { ...state, LoginModalOpen: action.payload };
    case ACTION_RESET_EMAIL_APPROVE_MODAL:
      console.log("action");
      console.log(action);
      return { ...state, ResetEmailApproveModalOpen: action.payload };
    case ACTION_SELECT_PRIZ_MODAL:
      console.log("action");
      console.log(action);
      return { ...state, selectPrizModalOpen: action.payload };
    case ACTION_PRIZ_SUCCESS_MODAL:
      console.log("action");
      console.log(action);
      return { ...state, prizSuccessModalOpen: action.payload };
    case ACTION_ADRESS_MODAL:
      console.log("action");
      console.log(action);
      return { ...state, adressModalOpen: action.payload };
    case ACTION_SELECT_PRIZ:
      console.log("action");
      console.log(action);
      return { ...state, priz: action.payload };
    case ACTION_CHANGE_TASK:
      console.log("action");
      console.log(action);
      return { ...state, task: action.payload };
    case ACTION_ADD_PRIZ_ROW:
      console.log("action");
      console.log(action);
      return {
        ...state,
        rowsPrizi: state.rowsPrizi.concat(createDataPrizi(...action.payload)),
      };
    case ACTION_ADD_TASK_ROW:
      console.log("action");
      console.log(action);
      return {
        ...state,
        rowsTasks: state.rowsTasks.concat(createData(...action.payload)),
      };
    case ACTION_DECREMENT_SCORE:
      console.log("action");
      console.log(action);
      return { ...state, score: state.score - action.payload };
    case ACTION_INSTAPOST_SEND:
      return { ...state, instaPostModalOpen: action.payload };
    case ACTION_SELECT_CITY:
      console.log("action");
      console.log(action);
      return { ...state, selectCity: action.payload };
    case ACTION_SELECT_ADDRESS:
      console.log("action");
      console.log(action);
      return { ...state, address: action.payload };

    case ACTION_SELECT_ADDRESS_ERROR:
      console.log("action");
      console.log(action);
      return { ...state, addressError: action.payload };
    case ACTION_SELECT_ADDRESS_DELIVERY:
      console.log("action");
      console.log(action);
      return { ...state, addressDelivery: action.payload };
    case ACTION_APPLY_MODAL:
      console.log("action");
      console.log(action);
      return { ...state, ApplyModalOpen: action.payload };
  }

  return state;
};

const reducers = {
  data: rootRedducer,
  form: formReducer,
};
export const reducer = combineReducers(reducers);
