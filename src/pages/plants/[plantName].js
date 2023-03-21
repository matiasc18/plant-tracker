import styles from '@/styles/Home.module.css'
import navStyles from '@/styles/Nav.module.css'
import plantStyles from '@/styles/PlantDetail.module.css'
import { useRouter } from 'next/router'
import { IoIosArrowBack } from 'react-icons/io'
import Link from 'next/link'
// import { motion } from 'framer-motion'

export default function PlantDetail() {
  const router = useRouter();
  const plantName = router.query.plantName;

  return (
    <>
      {/* <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
        transition={{ duration: 0.4 }}
      > */}
      <nav className={navStyles.nav}>
        <Link href="/">
          <IoIosArrowBack className={navStyles.menu} />
        </Link>
        <h2>{plantName}</h2>
      </nav>
      <main className={plantStyles.plantDetail}>
        <div className={plantStyles.photoBox}>
          <h2 style={{ color: 'white' }}>Image</h2>
        </div>
        <h2 className={plantStyles.transect}>Transect</h2>
        <hr />
        <p className={plantStyles.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus qui quidem quae, perferendis perspiciatis exercitationem nostrum ad quisquam dignissimos esse, culpa, aperiam aut non voluptas. Vel, autem earum, distinctio adipisci enim numquam neque reprehenderit dolorum necessitatibus alias quis! Mollitia dicta, doloribus, placeat ea quas aspernatur officiis ipsum temporibus praesentium similique quos commodi id dolor tenetur neque sequi, perspiciatis ut quibusdam laborum possimus vero numquam ipsa. Beatae in voluptate tempora accusantium quia! Omnis provident, voluptas dicta dolor numquam facilis at dignissimos deserunt voluptatum delectus blanditiis hic error? Ipsa delectus consectetur, aliquid eos iure eaque modi vel est, eveniet, nihil distinctio perspiciatis.</p>
        <a href="https://en.wikipedia.org/wiki/Example" target="_blank" rel="noopener noreferrer" className={plantStyles.learnMore}>Learn more</a>
      </main>
      {/* </motion.div> */}
    </>
  )
}
