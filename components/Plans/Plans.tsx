import React from 'react'
import styles from './Plans.module.css'
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';

const Plans = () => {
    return (
        <div>
            <div className={`${styles.divPlans}`}>
                <div className={styles.plans}>
                    <div className={styles.plansDeck}>
                        <div className={styles.plansCardLeft}>
                            <p className={styles.plansCardTitle}>80 Hours Monthly</p>
                            <div className={`${styles.plansCardBadge} badge badge-ghost`}>TIER 1</div>
                            <p className={styles.plansCardDescription}>
                                Perfect for just getting started
                                and exploring our services
                            </p>
                        </div>

                        <div className={styles.plansCardDark}>
                            <p className={styles.plansHeader}>SEE PLANS</p>
                            <p className={styles.plansCardTitle}>Unlimited and Custom Plans</p>
                            <div className={`${styles.plansCardBadge} ${styles.plansCardBadgeShadow} badge badge-ghost`}>TIER 3</div>
                            <p className={styles.plansCardDescriptionDark}>
                                Unlimited and custom plans
                                for the most serious companies
                                and comittments.
                            </p>
                        </div>

                        <div className={styles.plansCardRight}>
                            <p className={styles.plansCardTitle}>200 Hours Monthly</p>
                            <div className={`${styles.plansCardBadge} badge badge-ghost`}>TIER 2</div>
                            <p className={styles.plansCardDescription}>
                                For the small to mid-sized
                                company that needs
                                occasional help to cut costs
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <p className={`${styles.plansMotto}`}>
                &ldquo;Experience top-tier support at unbeatable prices,
                saving you from payroll taxes and the hassle of managing a large team.&rdquo;
            </p>

            <p className={`${styles.plansHeader2}`}>WE PROVIDE THE BEST SERVICES</p>

            <div className={`${styles.servicesDeck} grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:gap-4`}>
                <div className={`${styles.servicesCard}`}>
                    <SpeakerNotesIcon />
                    <h1 className={`${styles.serviceHeader}`}>Support</h1>
                    <ul className={`${styles.serviceList}`}>
                        <li>Sales Support</li>
                        <li>Tech Support</li>
                        <li>Admin Services</li>
                        <li>and more...</li>
                    </ul>
                </div>
                <div className={`${styles.servicesCard}`}>
                    <SpeakerNotesIcon />
                    <h1 className={`${styles.serviceHeader}`}>Marketing</h1>
                    <ul className={`${styles.serviceList}`}>
                        <li>SMM</li>
                        <li>CRM</li>
                        <li>SEO</li>
                        <li>and more...</li>
                    </ul>
                </div>
                <div className={`${styles.servicesCard}`}>
                    <SpeakerNotesIcon />
                    <h1 className={`${styles.serviceHeader}`}>Design</h1>
                    <ul className={`${styles.serviceList}`}>
                        <li>Web Design</li>
                        <li>Print Collaterals</li>
                        <li>Packaging Design</li>
                        <li>and more...</li>
                    </ul>
                </div>
                <div className={`${styles.servicesCard}`}>
                    <SpeakerNotesIcon />
                    <h1 className={`${styles.serviceHeader}`}>Others</h1>
                    <ul className={`${styles.serviceList}`}>
                        <li>Book keeping</li>
                        <li>and more...</li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Plans