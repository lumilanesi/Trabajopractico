"use client"
import React, { useState } from 'react';



export default function BotonConContador() {
  const [contador, setContador] = useState(0);

  const aumentarContador = () => {
    setContador(contador + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl mb-4">Contador: {contador}</h1>
      <div className="relative">
        <button onClick={aumentarContador} className="focus:outline-none">
          <a
            className="group inline-block text-sm font-medium text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          >
            <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-indigo-600 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>
            <span className="relative block border border-current bg-white px-8 py-3">
              Hace click aca para ganar $$
            </span>
          </a>
        </button>
      </div>
    </div>
  );
}
