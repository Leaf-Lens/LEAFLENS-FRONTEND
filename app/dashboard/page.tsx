'use client'
import React from 'react'
import NavMenu from '@/components/NavMenu/NavMenu'
import Subscriptions from '@/components/Subscriptions/Subscriptions'
import styles from './dashboard.module.css'
import { useSession } from 'next-auth/react'
import ProductsTable from '@/components/ProductsTable/ProductsTable'
import { SalesChart } from '@/components/SalesChart/SalesChart'
import NewProductModal from '@/components/Modal/NewProductModal'

const page = () => {
    const { data: session } = useSession();
    const subscription = 'Tier 2'

    return (
        <div>
            <NavMenu />

            <div className='w-4/5 mx-auto mt-8'>

                <h1 className={`${styles.nameStyle}`}>Hello!
                    <span className='font-bold ms-2'>{session?.user?.name}</span>,
                </h1>
                <p className='text-black mt-2 mb-7'>Manage your subscription here</p>

                <Subscriptions />

                <ProductsTable />

                <SalesChart />

                <NewProductModal />
            </div>
        </div>
    )
}

export default page