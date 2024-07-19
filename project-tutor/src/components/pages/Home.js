import styles from "./Home.module.css";
import stay from "../img/stay.png";
import AddButton from "../layout/AddButton";

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Welcome to <span>Tutor</span>
      </h1>
      <p>Start organizing your watched tutorials!</p>
        <AddButton to='/add' text="Add Tutorial"/>
      <img src={stay} alt="Tutor" />
    </section>
  );
}
export default Home;
