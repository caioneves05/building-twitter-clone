/* eslint-disable react/no-unescaped-entities */
"use client"

import { useLoginModal } from "@/hooks/useLoginModal"
import { useCallback, useState } from "react"
import { Input } from "../Input"
import { Modal } from "../Modal"
import { useRegisterModal } from "@/hooks/useRegisterModal"

export const LoginModal = () => {

    const loginModal = useLoginModal()
    const registerModal = useRegisterModal()

    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[isLoading, setIsLoading] = useState(false)

    const onToggle = useCallback(() => {
        if(isLoading) {
            return
        }

        loginModal.onClose()
        registerModal.onOpen()
    }, [isLoading, registerModal, loginModal])

    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true)

            // TO DO ADD LOGIN FUNC TIONALITIES

            loginModal.onClose()
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }, [loginModal])

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input placeholder="Email" onChange={(event) => setEmail(event.target.value)} value={email} disabled={isLoading} />

            <Input placeholder="Password" onChange={(event) => setPassword(event.target.value)} value=
            {password} disabled={isLoading} />

        </div>
    )

    const footerContent = (
        <div className="text-neutral-400 text-center mt-4">
            <p>
                Don't have an account?
                <span onClick={onToggle} className="text-white cursor-pointer hover:underline ml-1">
                    Register
                </span>
            </p>
        </div>
    )

    return(
        <Modal 
        disabled={isLoading} 
        isOpen={loginModal.isOpen} 
        title="Login" 
        actionLabel="Sign In" 
        onClose={loginModal.onClose} 
        onSubmit={onSubmit} 
        body={bodyContent} 
        footer={footerContent}
        />
    )
}