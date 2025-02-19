/* eslint-disable react/prop-types */
import styles from './Qalma.module.css';

export default function Qalma({ qalma }) {
  return <div className={styles.qalma}>{qalma?.qalma}</div>;
}
