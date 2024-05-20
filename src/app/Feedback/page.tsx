// src/components/FeedbackForm.tsx
"use client"
import React, { useState } from 'react';
import Select from 'react-select'; // Importa o componente Select

const optionsDaltonismo = [
  { value: 'monocromatico', label: 'Monocromático' },
  { value: 'dicromatico', label: 'Dicromático' },
  { value: 'tricromatico', label: 'Tricromático' },
];

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [feedbackType, setFeedbackType] = useState('');
  const [colorBlindnessType, setColorBlindnessType] = useState(null);
  const [rating, setRating] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Aqui você faria a chamada API para enviar o feedback ao seu backend
    console.log({ name, feedbackType, colorBlindnessType, rating });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Tipo de Feedback:
        <input type="text" value={feedbackType} onChange={(e) => setFeedbackType(e.target.value)} required />
      </label>
      <label>
        Tipo de Daltonismo:
        <Select
          value={colorBlindnessType}
          onChange={(selectedOption) => setColorBlindnessType(selectedOption)}
          options={optionsDaltonismo}
        />
      </label>
      <label>
        Avaliação (0-10):
        <input type="number" min="0" max="10" value={rating} onChange={(e) => setRating(e.target.value)} required />
      </label>
      <button type="submit">Enviar Feedback</button>
    </form>
  );
};

export default FeedbackForm;
