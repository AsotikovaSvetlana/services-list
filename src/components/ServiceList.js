import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchServices, removeServices } from '../actions/actionCreators';
import ServiceListItem from './ServiceListItem';
import Error from '../components/Error';
import Loader from '../components/Loader';

export default function ServiceList() {
  const { items, error, loading, loadingRemove, errorRemove } = useSelector(state => state.serviceList);
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchServices())
  }, [dispatch])

  const handleRemove = (id) => {
    dispatch(removeServices(id))
    setCurrentId(prevId => ([...prevId, id]));
  }

  const handleEdit = (id) => {
    navigate(`/services/${id}`);
  }
  
  return (
    <>
      {error && <Error />}
      {loading && <Loader />}
      {
        <ul className="Service-list">
          {
            items.map(item => 
              <ServiceListItem 
                key={item.id} 
                item={item}  
                error={errorRemove} 
                loading={loadingRemove} 
                id={currentId}
                onRemove={handleRemove}
                onEdit={handleEdit}
              />
            )
          }
        </ul>
      }
    </>
  )
}
