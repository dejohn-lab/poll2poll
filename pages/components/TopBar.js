

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import styles from '../../styles/Home.module.css'
const TopBar = () =>{
    return(
        <div className={styles.p2p}>
                <h3 className={styles.p2p1}>Poll2Poll <br />: City</h3>
                <div className={[styles.fontW, styles.p2p2].join(" ")}>
                    <Link href="/">
                        <a><FontAwesomeIcon icon={faHome} /></a>
                    </Link>

                </div>
            </div>
    )

}
export default TopBar