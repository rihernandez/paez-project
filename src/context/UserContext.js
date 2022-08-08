import { createContext, useEffect, useState } from "react";


const UserContext = createContext();

const initialDb = [
  {
    nombre: "whilmis",
    apellido: "Perez",
    gmail: "whilmis21@gmail.com",
    admin: true,
    contrasena:"1234", 
    id:11
},
{
  nombre: "paco",
  apellido: "Mendez",
  gmail: "Mendez@gmail.com",
  contrasena:"1234", 
  id:55
},
  
];



const UserProvider = ({ children }) => {
  const [dbU, setDbU] = useState(initialDb);
  const [dataToEditU, setDataToEditU] = useState(null);

 
  /*useEffect(() => {
    window.localStorage.setItem("db", JSON.stringify(db));
    window.localStorage.setItem("db", JSON.stringify(db));
  }, [db]);

  useEffect(() => {
    setDb(JSON.parse(window.localStorage.getItem("db")));
  }, []);

 */

  const createDataU = (data) => {
    data.id = Date.now();
    //console.log(data);
    setDbU([...dbU, data]);
    
   
    
  };

  const updateDataU = (data) => {
    let newData = dbU.map((el) => (el.id === data.id ? data : el));
    setDbU(newData);
   
    
  };

  const deleteDataU = (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );

    if (isDelete) {
      let newData = dbU.filter((el) => el.id !== id);
      setDbU(newData);
    
    } else {
      return;
    }
  };

  const data = {
    dbU,
    createDataU,
    dataToEditU,
    setDataToEditU,
    updateDataU,
    deleteDataU,
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export { UserProvider };
export default UserContext;
