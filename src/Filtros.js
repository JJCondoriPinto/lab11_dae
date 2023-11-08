import React, { useState } from 'react';

function Filtros({ filtrarTareas, ordenarTareas }) {
  return (
    <div className='my-2 d-flex gap-2'>
      <button className='btn btn-primary' onClick={() => filtrarTareas("Todas")}>Todas</button>
      <button className='btn btn-primary' onClick={() => filtrarTareas("Pendientes")}>Pendientes</button>
      <button className='btn btn-primary' onClick={() => filtrarTareas("Completadas")}>Completadas</button>
      <button className='btn btn-primary' onClick={() => ordenarTareas()}>Ordenar por fecha</button>
    </div>
  );
}

export default Filtros;
