import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { fetchEditService, editChangeServiceField, editServices } from '../actions/actionCreators';
import Loader from '../components/Loader';
import Error from '../components/Error';
import Spinner from '../components/Spinner';

export default function ServiceDetailPage() {
  const { item, loading, error, redirect, loadingEdit } = useSelector(state => state.serviceDetail);
  const dispatch = useDispatch();
  let { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchEditService(id));
  }, [dispatch, id])

  useEffect(() => {
    if (redirect) {
      navigate('/services');
    }
  }, [navigate, redirect])

  const handleCancel = () => {
    navigate(-1);
  }

  const handleEditChange = (event) => {
    const { name, value } = event.target;
    dispatch(editChangeServiceField(name, value));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(editServices(item));
  }

  if (error) {
    return <Error />;
  }
  
  return (
    <>
      {
        loading 
        ? 
        <Loader /> 
        :
        <form className="Service-detail" onSubmit={handleSubmit}>
          <label htmlFor="name">Название</label>
          <input 
            className="Service-detail-field" 
            type="text" 
            name="name" 
            id="name" 
            disabled={loadingEdit}
            value={item.name} 
            onChange={handleEditChange}
          />
          <label htmlFor="price">Стоимость</label>
          <input 
            className="Service-detail-field" 
            type="number" 
            name="price" 
            id="price" 
            disabled={loadingEdit}
            value={item.price} 
            onChange={handleEditChange}/>
          <label htmlFor="content">Описание</label>
          <input 
            className="Service-detail-field" 
            type="text" 
            name="content" 
            id="content" 
            disabled={loadingEdit}
            value={item.content} 
            onChange={handleEditChange}
          />
          <div>
            <button 
              className="Service-detail-btn" 
              type="button"
              disabled={loadingEdit}
              onClick={handleCancel}
            >
              Отмена
            </button>
            <button className="Service-detail-btn" type="submit">
              {loadingEdit ? <Spinner /> : 'Сохранить'}
            </button>
          </div>
        </form>
      }
    </>
  )
}
