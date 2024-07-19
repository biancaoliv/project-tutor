import styles from "./AddTutorial.module.css";
import AddForm from "../project/AddForm";

function AddTutorial() {
  return <div className={styles.add_container}>
    <h1>Add Tutorial</h1>
    <AddForm btnText= "Add Tutorial"/>
  </div>;
}
export default AddTutorial;
