import styles from '../styles/Toast.module.css'; 
const Toast = ({message}) => {
  return (
    <div className={styles.toast_container}>
        <h1>{message}</h1>
    </div>
  )
}

export default Toast