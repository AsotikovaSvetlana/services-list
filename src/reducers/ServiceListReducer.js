import { 
  FETCH_SERVICES_REQUEST, 
  FETCH_SERVICES_ERROR, 
  FETCH_SERVICES_SUCCESS,
  REMOVE_SERVICE_REQUEST,
  REMOVE_SERVICE_ERROR,
  REMOVE_SERVICE_SUCCESS
} from '../actions/actionTypes';

const initialState = {
  items: [],
  error: null,
  loading: false,
  loadingRemove: false,
  errorRemove: null
};

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SERVICES_REQUEST:
      return {
        ...initialState,
        loading: true
      }
    case FETCH_SERVICES_ERROR:
      const { error } = action.payload;
      return {
        ...initialState, 
        error
      }
    case FETCH_SERVICES_SUCCESS:
      const { items } = action.payload;
      return {
        ...initialState,
        items
      }
    case REMOVE_SERVICE_REQUEST:
      return {
        ...state, 
        loadingRemove: true,
        errorRemove: null
      }
    case REMOVE_SERVICE_ERROR:
      const { error: errorRemove } = action.payload;
      return {
        ...state, 
        errorRemove, 
        loadingRemove: false
      }
    case REMOVE_SERVICE_SUCCESS:
      return {
        ...state, 
        errorRemove: null, 
        loadingRemove: false
      }
    default:
      return state;
  }
}