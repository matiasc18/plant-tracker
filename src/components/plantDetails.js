import navStyles from '@/styles/Nav.module.css'
import plantStyles from '@/styles/PlantDetail.module.css'
import { IoIosArrowBack } from 'react-icons/io'
import Link from 'next/link'
import { useRef, useEffect } from 'react'

export default function PlantDetails({ plantName, isOpen, plantDetailsRef }) {

  useEffect(() => {
    const fixedDiv = plantDetailsRef.current;

    function handleScroll(event) {
      const { scrollTop, scrollHeight, clientHeight } = event.target;

      if (scrollHeight - scrollTop === clientHeight) {
        // User has scrolled to the bottom
        event.preventDefault();
      }
    }
    fixedDiv.addEventListener('scroll', handleScroll);

    return () => {
      fixedDiv.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={plantDetailsRef} className={`${plantStyles.plantDetail} ${isOpen ? plantStyles.plantDetailOpen : ""}`}>
      <div className={plantStyles.photoBox}>
        <h2 style={{ color: 'white' }}>Image</h2>
      </div>
      <h2 className={plantStyles.transect}>Group</h2>
      <hr />
      <p className={plantStyles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus placeat deleniti quam inventore facilis accusantium delectus incidunt facere quidem dolores consequatur, quo, veritatis assumenda similique ducimus autem dolorem magni sunt! Vero quia incidunt magni eius libero! Voluptatum ipsa itaque temporibus dicta, nam quasi, natus cum aut iure optio enim culpa atque necessitatibus deserunt repudiandae repellendus quaerat? Reiciendis, iusto quos quod quae vero, amet voluptas corrupti natus illum sint sunt suscipit. Pariatur reprehenderit, eos, repudiandae magnam dignissimos fugiat quo rem amet perferendis assumenda, consequatur nobis? Libero eos praesentium fuga quidem fugiat possimus, dolores hic similique sint. Sequi ad hic unde quidem tempora sint, maxime distinctio. Dolorem perspiciatis quasi beatae atque odit possimus enim hic. Dolor voluptatem hic similique voluptatibus rerum sapiente labore blanditiis architecto modi expedita. Nihil veritatis error ab tempora dignissimos sunt obcaecati eaque. Saepe nisi delectus quasi, ea beatae voluptates magni! Itaque sapiente amet dolores rem, adipisci ad nemo deserunt voluptas ut dolorum laboriosam neque esse obcaecati qui earum expedita quos, quibusdam veniam dolorem architecto temporibus, ipsum laudantium. Ut, odit culpa. Quis hic deserunt quod voluptate? Quo, quam sapiente sunt, quaerat obcaecati officiis ad, magni at ipsam consequatur unde. Quisquam suscipit nesciunt et vitae facere assumenda quis earum esse officia repellat pariatur reiciendis alias minima nemo sint, vero deleniti iusto, in ab praesentium? Voluptatibus distinctio ex totam eius! Labore exercitationem veritatis accusantium animi soluta eveniet ab rem nobis assumenda consequuntur. Rem, voluptatibus! Modi veniam mollitia voluptatum deleniti nam nihil sapiente expedita consequuntur, repudiandae eum sequi excepturi odit. Molestias placeat minus ipsa blanditiis repellat, perspiciatis autem adipisci reiciendis ut facere officiis optio mollitia et sit libero distinctio temporibus eum, consequuntur ea labore? Atque aliquid, cum voluptate animi qui consequuntur perspiciatis. Fugiat dolore, dolor quas enim iusto dicta eaque neque ducimus adipisci non reprehenderit corporis maxime ipsum excepturi, inventore, ratione nisi!</p>
      <a href="https://en.wikipedia.org/wiki/Example" target="_blank" rel="noopener noreferrer" className={plantStyles.learnMore}>Learn more</a>
    </section>
  )
}
