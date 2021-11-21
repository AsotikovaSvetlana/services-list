import { 
  FETCH_SERVICES_REQUEST, 
  FETCH_SERVICES_ERROR, 
  FETCH_SERVICES_SUCCESS, 
  ADD_SERVICE_REQUEST, 
  ADD_SERVICE_ERROR, 
  ADD_SERVICE_SUCCESS, 
  CHANGE_SERVICE_FIELD,
  REMOVE_SERVICE_REQUEST,
  REMOVE_SERVICE_ERROR,
  REMOVE_SERVICE_SUCCESS,
  FETCH_EDIT_SERVICE_REQUEST,
  FETCH_EDIT_SERVICE_ERROR,
  FETCH_EDIT_SERVICE_SUCCESS,
  EDIT_SERVICES_REQUEST,
  EDIT_SERVICES_ERROR,
  EDIT_SERVICES_SUCCESS,
  EDIT_CHANGE_SERVICE_FIELD
} from './actionTypes';


// Запрос списка услуг
export function fetchServicesRequest() {
  return {type: FETCH_SERVICES_REQUEST}
}

export function fetchServicesError(error) {
  return {type: FETCH_SERVICES_ERROR, payload: {error}}
}

export function fetchServicesSucces(items) {
  return {type: FETCH_SERVICES_SUCCESS, payload: {items}}
}

// Добавление услуг
export function addServicesRequest(name, price) {
  return {type: ADD_SERVICE_REQUEST, payload: {name, price}}
}

export function addServicesError(error) {
  return {type: ADD_SERVICE_ERROR, payload: {error}}
}

export function addServicesSucces() {
  return {type: ADD_SERVICE_SUCCESS}
}

// Удаление услуг
export function removeServicesRequest(id) {
  return {type: REMOVE_SERVICE_REQUEST, payload: {id}}
}

export function removeServicesError(error) {
  return {type: REMOVE_SERVICE_ERROR, payload: {error}}
}

export function removeServicesSucces() {
  return {type: REMOVE_SERVICE_SUCCESS}
}

// Состояние инпутов
export function changeServiceField(name, value) {
  return {type: CHANGE_SERVICE_FIELD, payload: {name, value}}
}

export function editChangeServiceField(name, value) {
  return {type: EDIT_CHANGE_SERVICE_FIELD, payload: {name, value}}
}

// Редактирование услуг (GET)
export function fetchEditServiceRequest() {
  return {type: FETCH_EDIT_SERVICE_REQUEST}
}

export function fetchEditServiceError(error) {
  return {type: FETCH_EDIT_SERVICE_ERROR, payload: {error}}
}

export function fetchEditServiceSucces(item) {
  return {type: FETCH_EDIT_SERVICE_SUCCESS, payload: {item}}
}

// Редактирование услуг (POST)

export function editServicesRequest() {
  return {type: EDIT_SERVICES_REQUEST}
}

export function editServicesError(error) {
  return {type: EDIT_SERVICES_ERROR, payload: {error}}
}

export function editServicesSucces() {
  return {type: EDIT_SERVICES_SUCCESS}
}

export const fetchServices = () => async (dispatch) => {
  dispatch(fetchServicesRequest());

  try {
    const response = await fetch(`${process.env.REACT_APP_URL}/services`);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const items = await response.json();
    dispatch(fetchServicesSucces(items));
  } catch (error) {
    dispatch(fetchServicesError(error.message));
  }
}

export const addServices = (name, price) => async (dispatch) => {
  dispatch(addServicesRequest());

  try {
    const response = await fetch(`${process.env.REACT_APP_URL}/services`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name, price}),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    dispatch(addServicesSucces());
    dispatch(fetchServices());
  } catch (error) {
    dispatch(addServicesError(error.message));
  }
  
}

export const removeServices = (id) => async (dispatch) => {
  dispatch(removeServicesRequest());

  try {
    const response = await fetch(`${process.env.REACT_APP_URL}/services/${id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    dispatch(removeServicesSucces());
    dispatch(fetchServices());
  } catch (error) {
    dispatch(removeServicesError(error.message));
  } 
}

export const fetchEditService = (id) => async (dispatch) => {
  dispatch(fetchEditServiceRequest());

  try {
    const response = await fetch(`${process.env.REACT_APP_URL}/services/${id}`);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const item = await response.json();
    dispatch(fetchEditServiceSucces(item));
  } catch (error) {
    dispatch(fetchEditServiceError(error.message));
  }
}

export const editServices = (item) => async (dispatch) => {
  dispatch(editServicesRequest());

  try {
    const response = await fetch(`${process.env.REACT_APP_URL}/services`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(item),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    dispatch(editServicesSucces());
  } catch (e) {
    dispatch(editServicesError(e))
  }
}