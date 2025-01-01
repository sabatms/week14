import styles from './Header.module.css';
function Header() {
  return (
    <div className={styles.container}>
        <h1> Contact App </h1>
        <p>
         <a href="https://www.linkedin.com/in/sabatahmasebinezhad/?originalSubdomain=ir">Linkedin</a> | React.js Full course
        </p>
    </div>
  )
}

export default Header