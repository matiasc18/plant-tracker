import navStyles from '@/styles/Nav.module.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoIosArrowBack } from 'react-icons/io'

export default function Nav({ isOpen, plantName, handleDetails }) {

  function handleClick() {
    handleDetails(null);
  }

  return (
    <>
      {!isOpen ?
        <nav className={navStyles.nav}>
          <GiHamburgerMenu className={navStyles.menu} />
        </nav>
        :
        <nav className={navStyles.nav} onClick={handleClick}>
          <IoIosArrowBack className={navStyles.menu} />
          <h2>{plantName}</h2>
        </nav>
      }
    </>
  )
}