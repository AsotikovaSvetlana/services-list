import {
  FETCH_EDIT_SERVICE_REQUEST,
  FETCH_EDIT_SERVICE_ERROR,
  FETCH_EDIT_SERVICE_SUCCESS,
  EDIT_CHANGE_SERVICE_FIELD,
  EDIT_SERVICES_REQUEST,
  EDIT_SERVICES_ERROR,
  EDIT_SERVICES_SUCCESS
} from '../actions/actionTypes';

const initialState = {
  item: {
    id: '',
    name: '',
    price: '',
    content: ''
  },
  loading: false,
  error: null,
  redirect: false,
  loadingEdit: false
}

export default function serviceDetailReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_EDIT_SERVICE_REQUEST:
      return {
        ...initialState, 
        loading: true
      };
    case FETCH_EDIT_SERVICE_ERROR:
      const { error } = action.payload;
      return {
        ...initialState, 
        error
      };
    case FETCH_EDIT_SERVICE_SUCCESS:
      const { item } = action.payload;
      return {
        ...initialState, 
        item
      };
    case EDIT_CHANGE_SERVICE_FIELD:
      const { name, value } = action.payload;
      return {
        ...state, 
        item: {...state.item, [name]: value}
      };
    case EDIT_SERVICES_REQUEST:
      return {
        ...state, 
        error: null, 
        loadingEdit: true, 
        redirect: false
      };
    case EDIT_SERVICES_ERROR:
      const { error: err } = action.payload;
      return {
        ...state, 
        error: err, 
        loadingEdit: false, 
        redirect: false
      };
    case EDIT_SERVICES_SUCCESS:
      return {
        ...initialState, 
        redirect: true
      };
    default:
      return state;
  }
}