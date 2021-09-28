import styles from '../styles/Home.module.scss'
import Image from 'next/image'

const Footer = () => {
    return (
      <footer className={styles.footer}>
       <span className={styles.logo}> 
       <h4> Powered by{' '} LyQueen</h4>
        </span>
    </footer>
    )
}

export default Footer;