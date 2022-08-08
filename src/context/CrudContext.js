import { createContext, useEffect, useState } from "react";


const CrudContext = createContext();



const initialDb = [
  {
    nombreEstudiante: "Miguel",
    apellidoEstudiante: "Rosario Cuevas",
    actaNacimiento: "001-054564-7",
    direccion: "Santo Domingo norte, sector La victoria  # 42",
    nombrePadre: "Ramon",
    apellidoPadre: "Perez Guzman",
    telefono: "849-549-3232",
    cedula: "402-5554890-8",
    confirmacion: true,
    pago: true,
    idUsuario:"7"
},
{
  nombreEstudiante: "Ramon",
  apellidoEstudiante: "Perez",
  actaNacimiento: "001-054564-5",
  direccion: "Santo Domingo este, sector La clata  # 112",
  nombrePadre: "Carlos",
  apellidoPadre: " Guzman Medina",
  telefono: "829-549-3232",
  cedula: "402-5554890-8",
  confirmacion: false,
  pago: true,
  idUsuario:"1"
},
  
];



const CrudProvider = ({ children }) => {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

 
  /*useEffect(() => {
    window.localStorage.setItem("db", JSON.stringify(db));
    window.localStorage.setItem("db", JSON.stringify(db));
  }, [db]);

  useEffect(() => {
    setDb(JSON.parse(window.localStorage.getItem("db")));
  }, []);

 */

  const createData = (data) => {
    data.id = Date.now();
    //console.log(data);
    setDb([...db, data]);
    
   
    
  };

  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
   
    
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );

    if (isDelete) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    
    } else {
      return;
    }
  };

  const data = {
    db,
    createData,
    dataToEdit,
    setDataToEdit,
    updateData,
    deleteData,
  };

  return <CrudContext.Provider value={data}>{children}</CrudContext.Provider>;
};

export { CrudProvider };
export default CrudContext;
