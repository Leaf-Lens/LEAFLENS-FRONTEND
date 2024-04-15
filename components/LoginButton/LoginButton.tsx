'use client'
import React from 'react'
import { signIn, useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

const AuthButton = () => {

    const { data: session } = useSession();

    if (session) {
        redirect('/dashboard')
    }

    return <button onClick={() => signIn()}
        className={`btn btn-outline glass absolute right-5 top-5 z-50`}>Log In</button>
}

export default AuthButton