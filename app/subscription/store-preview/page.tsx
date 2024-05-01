'use client'
import React from 'react'
import styles from './styles.module.css'
import { useRouter } from 'next/navigation'
import Image from 'next/image'



const Store = () => {

    const router = useRouter()

    return (


        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <Image className={`${styles.headerImg} ms-auto`}
                    src={`/smoker.png`}
                    alt={'smoker'}
                    width="500"
                    height="500" />

                <div>
                    <h1 className="text-5xl font-bold">Store will open soon!</h1>
                    <p className="py-6">This page is currently undergoing construction, with efforts underway to enhance its functionality and content. Stay tuned as we work diligently to provide you with a more enriching and comprehensive experience. We apologize for any inconvenience this may cause and appreciate your patience as we strive to deliver an improved platform tailored to your needs.</p>
                    <button className="btn btn-primary" onClick={() => { router.push('/') }}>Back to Dashboard</button>
                </div>
            </div>
        </div>
    )
}


export default Store