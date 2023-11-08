import React, { useState } from 'react';

function Tarea({ tarea, fecha, onDelete, onEdit, completada, onToggleCompletada }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(tarea);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    if (editedText.trim() === '') {
      alert("No puede dejar la tarea vacia")
      return
    }
    onEdit(editedText);
    setIsEditing(false);
  };

  return (
    <li className='list-group-item d-flex align-items-center gap-1'>
      <input className='form-check-input' type="checkbox" checked={completada} onChange={onToggleCompletada} />
      {isEditing ? (
        <>
          <input
            className='form-control'
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button className='btn btn-success' onClick={handleSaveClick}>Guardar</button>
        </>
      ) : (
        <>
          {tarea} <br/>
          {new Date(fecha).toUTCString()}
          <div className='d-flex gap-2 ms-auto'>
            <button className='btn btn-danger' onClick={onDelete}>Eliminar</button>
            <button className='btn btn-primary' onClick={handleEditClick}>Editar</button>
          </div>
        </>
      )}
    </li>
  );
}

export default Tarea;
