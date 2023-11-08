// src/TareaForm.js
import React, { useState } from 'react';

function TareaForm({ agregarTarea }) {
  const [texto, setTexto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (texto.trim() === "") {
      alert("Ingrese una tarea")
      return
    };
    agregarTarea(texto);
    setTexto("");
  };

  return (
    <form onSubmit={handleSubmit} className='d-flex flex-column'>
      <input
        type="text"
        placeholder="Añadir tarea..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        className='form-control'
      />
      <button type="submit" className='btn btn-success ms-auto mt-2'>Agregar Tarea</button>
    </form>
  );
}

export default TareaForm;

