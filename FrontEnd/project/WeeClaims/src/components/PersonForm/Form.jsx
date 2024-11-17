import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";
import axios from "axios";

const Form = () => {
  const [isFilled, setButtonAvailable] = useState(true);
  const [formData, setFormData] = useState({
    companyName: "",
    name: "",
    email: "",
    phone: "",
  });
  const buttonClassName = isFilled ?  "form_submit--disabled" :"form_submit";
  const [registros, setRegistros] = useState([]); 
  const navigate = useNavigate();



  const handleChange = (e) => {
    if(formData.companyName != "" && formData.name != "" && formData.email != "" && formData.phone != "")
      setButtonAvailable(false)
    else
      setButtonAvailable(true)

    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };



  const createHandler = (e)=>{
    e.preventDefault();
    axios.post('https://localhost:7106/api/persona', {...formData,id:0,id_Company:0} )
    .then(function (response) {
      window.alert('Datos guardados correctamente');
    })
    .catch(function (error) {
      console.log(error.message);
    }).finally(navigate("/records"));

    setFormData({
    companyName: "",
    name: "",
    email: "",
    phone: "",
    })
  }


  const obtenerRegistros = async () => {
    console.log("obtener registros ejecutado")
    try {
      const response = await axios.get("https://localhost:7106/api/persona"); 
      setRegistros(response.data);
    } catch (error) {
      console.error("Error al obtener los registros:", error);
    }
  };

  return (
    <><h2>Registro presona</h2>
    <form className="form-container" onSubmit={createHandler}>
      
      <div className="form-group">
        
        <input
          type="text"
          id="companyName"
          name="companyName"
          placeholder="Nombre de la compañía"
          value={formData.companyName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        
        <input
          type="text"
          id="personName"
          name="name"
          placeholder="Nombre de la persona para contacto"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Teléfono"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div class="checkbox-container">
            <input type="checkbox" id="privacyNotice" name="privacyNotice" required />
            <label for="privacyNotice">He leído y acepto el <a href="#" target="_blank">Aviso de Privacidad/Términos y condiciones</a>.</label>
      </div>

      
      <button type="submit" className={buttonClassName} disabled={isFilled}>Continuar</button>
    </form>
    </>
  );
};

export default Form;
