'use client'

import React from 'react'
import Image from 'next/image';
import styles from './Banner.module.css'

import { useDispatch } from 'react-redux';
import { setInquiryModalIsShown } from '@/app/globalredux/features/app/appSlice';

const Banner = () => {

    const dispatch = useDispatch();

    const BANNERHEADS = {
        header1: `We are here to help.`,
        header2: `Your Success, Our Passion: Where Excellence Meets Assistance!`,
        headerMain: `LEAF LENS`,
        headerSubHeader: `BUSINESS SERVICES`,
        headerSubDescription: `The Best Virtual Assistant Services for your business exclusively for the cannabis industry.`,
    }

    const handleClickInquiry = () => {
        dispatch(setInquiryModalIsShown(true))
    }

    return (
        <section className={`${styles.mainContent}`}>
            <div className={`${styles.mainHeaders}`}>
                <p className={`${styles.header1}`}>{BANNERHEADS.header1}</p>
                <p className={`${styles.header1}`}>{BANNERHEADS.header2}</p>
            </div>

            <div className={`${styles.divHeaderMain}`}>
                <div className={`${styles.divHeaders}`}>
                    <p className={`${styles.headerMain}`}>{BANNERHEADS.headerMain}</p>
                    <p className={`${styles.subHeaderMain}`}>{BANNERHEADS.headerSubHeader}</p>
                    <p className={`${styles.subDescription}`}>{BANNERHEADS.headerSubDescription}</p>
                    <button className={`${styles.inquiryBtn} sm:block md:hidden`} onClick={handleClickInquiry}>
                        INQUIRE
                    </button>
                    <button className={`${styles.inquiryBtn} btn btn-outline sm:hidden md:block`} onClick={handleClickInquiry}>
                        CLICK HERE TO INQUIRE
                    </button>
                </div>
                <div className={`${styles.bannerCannabisMan}`}>
                    <Image className={`${styles.headerImg}`}
                        src={`/cannabis.png`}
                        alt={'test'}
                        width="500"
                        height="500" />

                    <Image className={`${styles.headerImg2}`}
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