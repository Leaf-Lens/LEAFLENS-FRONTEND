"use client"

import React from "react"
import NavMenu from "@/components/NavMenu/NavMenu"
import Subscriptions from "@/components/Subscriptions/Subscriptions"
import styles from "./dashboard.module.css"
import { useSession } from "next-auth/react"
import NewProductModal from "@/components/Modal/InquiryModal"
import DashboardTabs from "@/components/VerticalTabs/VerticalTabs"

const DashboardPage = () => {

    const { data: session } = useSession();

    return (
        <div>
            <NavMenu />

            <div className="w-4/5 mx-auto mt-8">

                <h1 className={`${styles.nameStyle}`}>Hello!
                    <span className="font-bold ms-2">{session?.user?.name}</span>,
                </h1>
                <p className="text-black mt-2 mb-7">Manage your subscription here</p>

                <Subscriptions />

                <DashboardTabs />

                <NewProductModal />
            </div>
        </div>
    )
}

export default DashboardPage