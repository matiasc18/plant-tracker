import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FiSearch } from 'react-icons/fi'
import ListElement from '@/components/listElement'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <nav className={styles.nav}>
        <GiHamburgerMenu className={styles.menu} />
      </nav>
      <main className={styles.main}>
        <div className={styles.landing}>
          <section className={styles.searchbar}>
            <input type="text" placeholder="Search..." className={styles.searchinput} />
            <FiSearch className={styles.searchicon} />
          </section>
          <ListElement />
          <ListElement />
          <ListElement />
          <ListElement />
          <ListElement />
          <ListElement />
          <ListElement />
          <ListElement />
          <ListElement />
        </div>
      </main>
    </>
  )
}
