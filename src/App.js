import React, { useState } from 'react';
import TareaForm from './TareaForm';
import ListaTareas from './ListaTareas';
import Filtros from './Filtros';

function App() {
  const [tareas, setTareas] = useState([]);
  const [filtro, setFiltro] = useState("Todas");
  const [ordenAsc, setOrdenAsc] = useState(false)

  const agregarTarea = (texto) => {
    setTareas([...tareas, { texto, completada: false, fecha: Date() }]);
  };

  const ordenarTareas = () => {
    let newTareas = tareas.sort((a,b) => {
      return new Date(b.fecha) - new Date(a.fecha);
    })
    newTareas = ordenAsc ? newTareas.reverse() : newTareas
    setTareas(newTareas)
    setOrdenAsc(!ordenAsc)
  }

  const eliminarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);
  };

  const editarTarea = (index, nuevoTexto) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].texto = nuevoTexto;
    setTareas(nuevasTareas);
  };

  const toggleCompletada = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completada = !nuevasTareas[index].completada;
    setTareas(nuevasTareas);
  };

  const filtrarTareas = (filtro) => {
    setFiltro(filtro);
  };

  let tareasFiltradas = tareas;
  if (filtro === "Pendientes") {
    tareasFiltradas = tareas.filter((tarea) => !tarea.completada);
  } else if (filtro === "Completadas") {
    tareasFiltradas = tareas.filter((tarea) => tarea.completada);
  }

  return (
    <div className="container d-flex">
      <main className='mx-auto card mt-4'>
        <div className='card-header text-center'>
          <h1 className='fs-3'>Lista de Tareas</h1>
        </div>
        <div className='card-body p-3'>
          <TareaForm agregarTarea={agregarTarea} />
          <Filtros filtrarTareas={filtrarTareas} ordenarTareas={ordenarTareas}/>
          <ListaTareas
            tareas={tareasFiltradas}
            eliminarTarea={eliminarTarea}
            editarTarea={editarTarea}
            toggleCompletada={toggleCompletada}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
