import styles from '@/styles/Home.module.css'
import ListElement from '@/components/listElement'
import SearchBar from '@/components/searchBar'

const names = ['sussy plant', 'ginger\'s plant', 'corriander', 'poison ivy', 'green plant', 'cactus', 'fern', 'wild bush', 'pooper\'s plant', 'maryjane', 'that zaza', 'shrooms bby'];

export default function List({ handleDetails, isOpen }) {
  return (
    <>
      <div className={styles.landing}>
        <SearchBar />
        {names.map(item => (
          <ListElement key={item} plantName={item} handleDetails={handleDetails} isOpen={isOpen}/>
        ))}
      </div>
    </>
  )
}
