import React from 'react';
import Spinner from './Spinner';
import ErrorMessage from './ErrorMessage';

export default function ServiceListItem(props) {
  const { item, onRemove, onEdit, loading, id, error } = props;
  const deleteId = id.find(id => id === item.id);

  return (
    <li className="Service-list-item">
      <p>{item.name}</p>
      <p>{item.price}</p>
      {error && <ErrorMessage />}
      {
        loading && item.id === deleteId 
        ? 
        <div className="Spinner">
          <Spinner />
        </div> 
        :
        <div className="Service-list-icons">
          <span className="material-icons edit" onClick={() => onEdit(item.id)}>
            border_color
           </span>
          <span className="material-icons delete" onClick={() => onRemove(item.id)}>
            delete
          </span>
        </div>
      }
    </li>
  )
}
