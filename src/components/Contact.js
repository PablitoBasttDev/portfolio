import './Contact.css'
import React from 'react'
import { useState } from 'react';


const Contact = () => {

    const formInitialData = {
      name: '',
      email: '',
      phone: '',
      message: '',
    }


    const [formData, setFormData] = useState(formInitialData);
    const [buttonText, setButtonText] = useState('Enviar');

      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = async (e) => {
       setButtonText('Enviado')
       setFormData(formInitialData);
      };

    return(
        <div className="container" id='contact'>
            <h3>CONTACTO</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nombre</label>
                    <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    placeholder='Nombre'
                    />
                </div>
                <div className="form-group">
                    <label>Correo Electrónico</label>
                    <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder='Dirección de Correo Electrónico'
                    />
                </div>
                <div className="form-group">
                    <label>Teléfono</label>
                    <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-control"
                    placeholder='Teléfono'
                    />
                </div>
                <div className="form-group">
                    <label>Mensaje</label>
                    <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control"
                    placeholder='Escriba su mensaje...'
                    />
                </div>
                <button type="submit" className="btn btn-primary">{buttonText}</button>
            </form>
      </div>
    )
}

export default Contact