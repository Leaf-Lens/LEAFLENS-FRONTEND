import React from 'react'
import styles from './Dialog1.module.css'
import Image from "next/image";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import XIcon from '@mui/icons-material/X';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';

const Dialog1 = () => {
    return (
        <>
            <div className={`${styles.dialog1}`}>
                <p>
                    Leaf Lens Business Services unlocks efficiency and creativity, our comprehensive suite of virtual
                    assistant services encompasses everything from expert graphic design to seamless project
                    management and beyond, ensuring your business thrives with unparalleled support and innovation.
                </p>
            </div>

            <div className={`${styles.dialog2}`}>
                <h1> We create solutions for your business</h1>
                <p>We stand out as one of the leading choices in the cannabis
                    industry. Our relentless pursuit of excellence and unmatched
                    knowledge make us the go-to option for businesses in this
                    dynamic field. With our commitment to surpassing expectations
                    and fostering success, we&apos;re the trusted ally you need in
                    navigating the ever-evolving cannabis business landscape.</p>

                <div className={`${styles.dialogImg}`}>
                    <div className={`${styles.dialogDeck}`}>
                        <Image
                            className={`${styles.dialogImg1}`}
                            src={`/circle.png`}
                            alt={'test'}
                            width="600"
                            height="600" />

                        <Image
                            className={`${styles.dialogImg2}`}
                            src={`/laptop.png`}
                            alt={'test'}
                            width="800"
                            height="800" />
                    </div>
                </div>
            </div>

            <div className={`${styles.dialog3}`}>
                <div className={`${styles.dialog3Deck}`}>
                    <CheckCircleIcon sx={{
                        fontSize: '90px',
                        color: '#475E58'
                    }} />
                    <p>Frees up your time</p>
                    <CheckCircleIcon sx={{
                        fontSize: '90px',
                        color: '#475E58'
                    }} />
                    <p>allows the company to focus on business</p>
                </div>
            </div>

            <div className={`${styles.dialogPlain}`}>
                <p>
                    &ldquo;Experience the transformative power of our services for your cannabis business. With tailored solutions and industry expertise,
                    we streamline opera-tions, boost efficiency, and drive growth. From compliance management to creative branding, trust us to elevate your
                    business to new heights in the flourishing cannabis market.&rdquo;
                </p>
            </div>

            <div className={`${styles.dialogIconDeck}`}>
                <div>
                    <button className="btn btn-circle">
                        <XIcon />
                    </button>
                    <button className="btn btn-circle">
                        <EmailIcon />
                    </button>
                    <button className="btn btn-circle">
                        <InstagramIcon />
                    </button>
                    <button className="btn btn-circle">
                        <LanguageIcon />
                    </button>
                </div>
                <p>Contact Us</p>
            </div>

        </>
    )
}

export default Dialog1