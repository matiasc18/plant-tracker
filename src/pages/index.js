import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import navStyles from '@/styles/Nav.module.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import ListElement from '@/components/listElement'
import SearchBar from '@/components/searchBar'
// import { motion } from 'framer-motion'

export default function Home() {
  const names = ['sussy plant', 'ginger\'s plant', 'corriander', 'poison ivy', 'green plant', 'cactus', 'fern', 'wild bush'];

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <nav className={navStyles.nav}>
        <GiHamburgerMenu className={navStyles.menu} />
      </nav>
      <main className={styles.main}>
        <div className={styles.landing}>
          <SearchBar />
          {names.map(item => (
            <div key={item}>
              <ListElement plantName={item} />
            </div>
          ))}
        </div>
      </main>
    </>
  )
}
