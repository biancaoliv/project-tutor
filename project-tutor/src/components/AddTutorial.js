import React from "react";
import { useState } from "react";

const AddTutorial = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (e) => {
    //registra os valores
    e.preventDefault(); //página ñ recarrega
    console.log("Tutorial added:", { title, description, startDate, endDate });
    setTitle("");
    setDescription("");
    setStartDate("");
    setEndDate("");
  };
  //atualiza o valor da variavel (quando usuário add)
  return (
    <div>
      <h2>Add Tutorial</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Start date:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div>
          <label>End date:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
export default AddTutorial;
