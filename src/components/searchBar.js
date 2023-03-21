import styles from '@/styles/SearchBar.module.css'
import { FiSearch } from 'react-icons/fi'

export default function SearchBar() {
  return (
    <section className={styles.searchbar}>
      <input type="text" placeholder="Search..." className={styles.searchinput} />
      <FiSearch className={styles.searchicon} />
    </section>
  )
};