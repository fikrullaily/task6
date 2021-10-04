import Link from 'next/link';
import styles from '../styles/Home.module.scss'


const Header = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
          <h1>Shoe.so</h1>
      </div>

      <div className={styles.li}>
      <Link href="/"><a> Product </a></Link>
      <Link href="//"><a> Chart </a></Link>
      <input className={styles.search} type="text" placeholder="Search..." name="search"  />
      
      </div>
      
    </nav>
  );
}

        
export default Header;

