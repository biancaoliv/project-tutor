import React from "react";
import { Link } from "react-router-dom";
import styles from './TutorialList.module.css'

const TutorialList = () => {
  const watchedTutorials = [
    {
      id: 1,
      title: "Aprenda Go",
      description: "Fundamentos da programação - 6. Sistemas numéricos",
      startDate: "2024-07-16",
      endDate: "2024-07-17",
    },
    {
      id: 2,
      title: "Criando a home",
      description: "Criando a home com react",
      startDate: "2024-06-10",
      endDate: "2024-06-12",
    },
    {
      id: 3,
      title: "Estruturando o projeto",
      description: "Criando estrutura do projeto com react",
      startDate: "2024-06-14",
      endDate: "2024-06-15",
    },
    {
      id: 4,
      title: "Criando interfaces com NextJs",
      description: "NextJs na prática",
      startDate: "2024-05-15",
      endDate: "2024-05-18",
    },
    {
      id: 5,
      title: "Aprenda Go",
      description: "Fundamentos da programação - 7. Sistemas numéricos",
      startDate: "2024-07-18",
      endDate: "2024-07-18",
    },
  ];
  return (
    <div className={styles.tutor_list}>
      <h2>Tutorials List</h2>
      <ul>
        {watchedTutorials.map(tutorial => (
          <li key={tutorial.id}>
            <Link to={`/tutorials/${tutorial.id}`}>
              {tutorial.title} - {tutorial.description} (Start: {tutorial.startDate} - End: {tutorial.endDate})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TutorialList;
