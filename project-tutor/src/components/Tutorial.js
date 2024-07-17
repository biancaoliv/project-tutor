import React from "react";
import { useParams } from "react-router-dom";

const Tutorial = () => {
  const { id } = useParams();

  const tutorials = [
    { id: 1, title: 'Aprenda Go', description: 'Fundamentos da programação - 6. Sistemas numéricos', startDate: '2024-07-16', endDate: '2024-07-17' },
    { id: 2, title: 'Criando a home', description: 'Criando a home com react', startDate: '2024-06-10', endDate: '2024-06-12' },
    { id: 3, title: 'Estruturando o projeto', description: 'Criando estrutura do projeto com react', startDate: '2024-06-14', endDate: '2024-06-15' },
    { id: 4, title: 'Criando interfaces com NextJs', description: 'NextJs na prática', startDate: '2024-05-15', endDate: '2024-05-18' },
    { id: 5, title: 'Aprenda Go', description: 'Fundamentos da programação - 7. Sistemas numéricos', startDate: '2024-07-18', endDate: '2024-07-18' }
  ];

  const tutorial = tutorials.find(tutorial => tutorial.id === parseInt(id)); //encontrar o tutorial com base no id

  return (
    <div>
      <h2>{tutorial.title}</h2>
      <p>
        <strong>Description: </strong> {tutorial.description}
      </p>
      <p>
        <strong>Start date: </strong> {tutorial.startDate}
      </p>
      <p>
        <strong>End date: </strong> {tutorial.endDate}
      </p>
    </div>
  );
};

export default Tutorial;
