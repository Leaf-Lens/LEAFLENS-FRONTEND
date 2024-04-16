import React from 'react'
import NavMenu from '@/components/NavMenu/NavMenu'
import styles from './dashboard.module.css'

const page = () => {
    const subscription = "Tier 2"
    return (
        <div>
            <NavMenu />

            <div className='p-8'>

                <div>
                    <div className="text-sm breadcrumbs">
                        <ul>
                            <li><a>Subscriptions</a></li>
                        </ul>
                    </div>
                </div>

                <h1 className={`${styles.header1}`}>Subscription Type : <b>{subscription}</b></h1>
                <h1 className={`${styles.header1}`}>Date Subscribe : <b>04/16/2024</b></h1>
                <h1 className={`${styles.header1}`}>Date Expire : <b>05/16/2024</b></h1>
            </div>


        </div>
    )
}

export default page