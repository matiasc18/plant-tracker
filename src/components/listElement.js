import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function ListElement({ plantName }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <Link href="/plants/[plantName]" as={`/plants/${plantName}`} className={`${styles.listItem} ${isActive ? styles.active : ''}`} onClick={() => setIsActive(true)}>
      <Image
        src="/plant-image.jpeg"
        alt="My Image"
        width={50}
        height={50}
        className={styles.image}
      />
      <p>{plantName}</p>
    </Link>
  )
};