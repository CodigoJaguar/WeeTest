import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Records = () => {
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

 
  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await axios.get("https://localhost:7106/api/persona");
        setRecords(response.data);  
      } catch (error) {
        setError("Hubo un error al obtener los registros.");
      } finally {
        setIsLoading(false);  
      }
    };

    fetchRecords();
  }, []);

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Registros</h1>
      <table>
        <thead>
          <tr>
            <th>Compañía</th>
            <th>Contacto</th>
            <th>Correo</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index}>
              <td>{record.companyName}</td>
              <td>{record.name}</td>
              <td>{record.email}</td>
              <td>{record.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => navigate("/")}>Regresar</button> 
    </div>
  );
};

export default Records;
