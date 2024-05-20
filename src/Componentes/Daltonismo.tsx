// src/app/Componentes/Daltonismo.tsx
"use client"
import React from 'react';

const Daltonismo: React.FC = () => {
  const handleColorChange = (mode: string) => {
    document.body.className = ''; // Reset any existing classes
    if (mode === 'monocromatico') {
      document.body.classList.add('monocromatico');
    } else if (mode === 'dicromatico') {
      document.body.classList.add('dicromatico');
    } else if (mode === 'tricromatico') {
      document.body.classList.add('tricromatico');
    }
  };

  return (
    <div>
      <h1>Configurações de Daltonismo</h1>
      <button onClick={() => handleColorChange('monocromatico')}>
        Monocromático
      </button>
      <button onClick={() => handleColorChange('dicromatico')}>
        Dicromático
      </button>
      <button onClick={() => handleColorChange('tricromatico')}>
        Tricromático
      </button>
    </div>
  );
};

export default Daltonismo;
