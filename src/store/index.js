import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import serviceAddReducer from "../reducers/ServiceAddReducer";
import serviceListReducer from '../reducers/ServiceListReducer';
import serviceDetailReducer from '../reducers/ServiceDetailReducer';

const reducer = combineReducers({
  serviceAdd: serviceAddReducer,
  serviceList: serviceListReducer,
  serviceDetail: serviceDetailReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer, 
  composeEnhancers(applyMiddleware(thunk))
);

export default store;