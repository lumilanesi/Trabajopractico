"use client";
import React, { useState } from 'react';

export default function Formulario() {
  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 

  
    console.log('Email:', email);
    console.log('Nombre:', nombre);
    console.log('Mensaje:', mensaje);


    setEmail('');
    setNombre('');
    setMensaje('');
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Holi</h1>

        <p className="mt-4 text-gray-500">
          ¿Quieres recibir descuentos exclusivos? Deja tus datos y te los haremos llegar.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Ingresa tu correo"
            />
         
          </div>
        </div>

        <div>
          <label htmlFor="nombre" className="sr-only">
            Nombre
          </label>
          <div className="relative">
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Ingresa tu nombre completo"
            />
      
          </div>
        </div>

        <div>
          <label htmlFor="mensaje" className="sr-only">
            Mensaje
          </label>
          <div className="relative">
            <input
              type="text"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Deja tu mensaje aquí"
            />
       
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}