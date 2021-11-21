import { 
  ADD_SERVICE_REQUEST, 
  ADD_SERVICE_ERROR, 
  ADD_SERVICE_SUCCESS, 
  CHANGE_SERVICE_FIELD 
} from '../actions/actionTypes';

const initialState = {
  item: {name: '', price: '', content: ''},
  error: null,
  loading: false
}

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE_REQUEST:
      return {
        ...state, 
        error: null, 
        loading: true
      };
    case ADD_SERVICE_ERROR:
      const { error } = action.payload;
      return {
        ...initialState, 
        error
      };
    case ADD_SERVICE_SUCCESS:
      return {
        ...initialState
      };
    case CHANGE_SERVICE_FIELD:
      const { name, value } = action.payload;
      return {
        ...state, 
        item: {...state.item, [name]: value}
      };
    default:
      return state;
  }
}