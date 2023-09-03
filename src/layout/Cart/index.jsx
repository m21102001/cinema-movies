import home from './home.png';
import { FaPen } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import styles from './cart.module.css';

const index = () => {
  return (
    <div className={styles.home_cart}>
      <div className={styles.home_con}>
        <div className={styles.home_img}>
          <img src={home} alt="Error happened" />
        </div>
        <div className={styles.right_con}>
          <div className={styles.name}>
            <h1>Name</h1>
            <div className={styles.icon}>
              <FaTrash />
              <FaPen />
            </div>
          </div>
          <div className={styles.but}>
            <h1>Party Time</h1>
            <div className={styles.butGroup}>
              <button className={styles.colBut}>10AM-12PM</button>
              <button>10AM-12PM</button>
            </div>
            <div className={styles.butGroup}>
              <button>10AM-12PM</button>
              <button>10AM-12PM</button>
            </div>
            <div className={styles.butGroup}>
              <button>10AM-12PM</button>
              <button>10AM-12PM</button>
            </div>
            <div className={styles.butGroup}>
              <button>10AM-12PM</button>
              <button>10AM-12PM</button>
            </div>
          </div>
          <div className={styles.select}>
            <button>Select Your Chair</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
