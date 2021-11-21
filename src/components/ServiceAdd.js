import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addServices, changeServiceField } from '../actions/actionCreators';
import Spinner from './Spinner';
import ErrorMessage from './ErrorMessage';

export default function ServiceAdd() {
  const { item, loading, error } = useSelector(state => state.serviceAdd);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(changeServiceField(name, value));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addServices(item.name, item.price));
  }

  return (
    <form className="Service-add-form" onSubmit={handleSubmit}>
      <input 
        className="Service-add-input" 
        name="name" 
        type="text" 
        required 
        value={item.name} 
        onChange={handleChange}
      />
      <input 
        className="Service-add-input" 
        name="price" 
        type="number" 
        required 
        value={item.price} 
        onChange={handleChange}
      />
      <button 
        className="Service-add-btn" 
        type="submit" 
        disabled={loading}
      >
        {loading ? <Spinner /> : "Добавить"}
      </button>
      {error && <ErrorMessage />}
    </form>
  )
}