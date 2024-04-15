'use client'

import React from 'react'
import Image from 'next/image';
import { redirect } from 'next/navigation'
import { useSession, signOut } from 'next-auth/react'
import styles from './NavMenu.module.css'

const NavMenu = () => {

    const { data: session } = useSession();

    if (!session) {
        redirect('/')
    }

    const handleSignOut = () => {
        signOut()
        redirect('/')
    }

    return (
        <div className={`${styles.navBar} navbar bg-base-100`}>
            <div className='flex-1'>
                <a className='btn btn-ghost text-xl'>
                    <Image className={`ms-auto`}
                        src={`/cannabis.png`}
                        alt={'test'}
                        width="30"
                        height="30" />Leaf Lens</a>
            </div>
            <div className='flex-none gap-2'>
                <div className='form-control'>
                    <input type='text' placeholder='Search'
                        className='input input-bordered w-24 md:w-auto' />
                </div>
                <div className='dropdown dropdown-end'>
                    <div tabIndex={0} role='button' className='btn btn-ghost btn-circle avatar'>
                        <div className='w-10 rounded-full'>
                            <img alt='Tailwind CSS Navbar component' src={session?.user?.image as string} />
                        </div>
                    </div>
                    <ul tabIndex={0} className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'>
                        <li>
                            <a>
                                Subscriptions
                            </a>
                        </li>
                        <li>
                            <a>
                                Maintenance
                            </a>
                        </li>
                        <li><a onClick={handleSignOut}>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavMenu