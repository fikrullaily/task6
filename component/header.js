import Link from 'next/link';
import styles from '../styles/Home.module.scss'

const Header = () => {
    return (
      <nav class="container">
        {/* <div className="logo">
            <h1>Shoe.so</h1>
        </div> */}

        <div className={styles.navbar}>

        <Link href="/"><a> Dashboard </a></Link>
        <Link href="/"><a> Product </a></Link>
        <Link href="//"><a> Chart </a></Link>
      
        </div>
      </nav>
    );
}
        
export default Header;