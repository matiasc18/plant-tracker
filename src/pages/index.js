import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Nav from '@/components/nav'
import List from '@/components/list'
import { useEffect, useState, useRef } from 'react'
import PlantDetails from '@/components/plantDetails'

export default function Home() {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [plantName, setPlantName] = useState(null);
  const plantDetailsRef = useRef(null);

  useEffect(() => {
    if (isDetailsOpen)
      plantDetailsRef.current.scrollTop = 0;
  }, [isDetailsOpen]);

  function handleDetails(plantName) {
    if (plantName != null)
      setPlantName(plantName);
    setIsDetailsOpen(!isDetailsOpen);
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Nav isOpen={isDetailsOpen} handleDetails={handleDetails} plantName={plantName} />
      <main className={`${styles.main} ${isDetailsOpen ? styles.hideList : ''}`}>
        <List handleDetails={handleDetails} isOpen={isDetailsOpen} />
      </main>
      <PlantDetails ref={plantDetailsRef} plantName={plantName} isOpen={isDetailsOpen} plantDetailsRef={plantDetailsRef} />
    </>
  )
}
