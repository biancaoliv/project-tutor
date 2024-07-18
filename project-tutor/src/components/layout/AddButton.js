import { Link } from 'react-router-dom'
import styles from './AddButton.module.css'


function AddButton({to, text}) {
    return(
        <Link to={to} className={styles.btn}>
            {text}
        </Link>
    )
}

export default AddButton