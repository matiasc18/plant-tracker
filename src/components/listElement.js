import styles from '@/styles/Home.module.css'
import Image from 'next/image'

export default function ListElement() {
  return (
    <div>
      <Image
        src="/plant-image.jpeg"
        alt="My Image"
        width={50}
        height={50}
        className={styles.image}
      />
      <p>Plant name</p>
    </div>
  )
};