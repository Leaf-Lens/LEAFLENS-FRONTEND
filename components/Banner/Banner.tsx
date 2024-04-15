'use client'

import React from 'react'
import Image from 'next/image';
import styles from './Banner.module.css'

const Banner = () => {

    const BANNERHEADS = {
        header1: `We are here to help.`,
        header2: `Your Success, Our Passion: Where Excellence Meets Assistance!`,
        headerMain: `LEAF LENS`,
        headerSubHeader: `BUSINESS SERVICES`,
        headerSubDescription1: `The Best Virtual Assistant Services for your business`,
        headerSubDescription2: `exclusively for the cannabis industry.`
    }

    return (
        <section className={`${styles.mainContent}`}>

            <div className={`p-20`}>

                <div>
                    <p className={`${styles.header1}`}>{BANNERHEADS.header1}</p>
                    <p className={`${styles.header2}`}>{BANNERHEADS.header2}</p>
                </div>

                <div className={`${styles.divHeaderMain}`}>
                    <p className={`${styles.headerMain}`}>{BANNERHEADS.headerMain}</p>
                    <p className={`${styles.subHeaderMain}`}>{BANNERHEADS.headerSubHeader}</p>
                    <p className={`${styles.subDescription}`}>{BANNERHEADS.headerSubDescription1}<br />{BANNERHEADS.headerSubDescription2}</p>

                    <button className={`${styles.inquiryBtn} btn btn-outline mt-5 me-5 `}>CLICK HERE FOR INQUIRIES</button>

                    <Image className={`${styles.headerImg} ms-auto`}
                        src={`/cannabis.png`}
                        alt={'test'}
                        width="500"
                        height="500" />

                    <Image className={`${styles.headerImg2} ms-auto`}
                        src={`/businessman.png`}
                        alt={'test'}
                        width="900"
                        height="900" />
                </div>
            </div>

        </section>
    )
}

export default Banner