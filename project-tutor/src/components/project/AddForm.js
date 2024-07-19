import React from "react";
import { useState } from "react";
import styles from "./AddForm.module.css";
import Input from "../form/Input";
import TextArea from "../form/TextArea";
import Date from "../form/Date";
import SubmitButton from "../form/SubmitButton";

const AddForm = ({btnText}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Tutorial added:", { title, description, startDate, endDate });
    setTitle("");
    setDescription("");
    setStartDate("");
    setEndDate("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input
          type="text"
          text="Title:"
          name="title"
          placeholder="Insert title"
          handleOnChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <TextArea
          type="text"
          text="Description:"
          name="description"
          placeholder="Insert description"
          handleOnChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <Date
          type="date"
          text="Start date:"
          name="startDate"
          placeholder="Insert date"
          handleOnChange={(e) => setStartDate(e.target.value)}
          value={startDate}
        />
        <Date
          type="date"
          text="End date:"
          name="endDate"
          placeholder="Insert date"
          handleOnChange={(e) => setEndDate(e.target.value)}
          value={endDate}
        />
        <SubmitButton text={btnText}/>
      </form>
    </div>
  );
};
export default AddForm;
