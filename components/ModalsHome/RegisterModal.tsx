"use client"

import { useCallback, useState } from "react"
import { Input } from "../Input"
import { Modal } from "../Modal"
import { useRegisterModal } from "@/hooks/useRegisterModal"
import { useLoginModal } from "@/hooks/useLoginModal"
import axios from "axios"
import toast from "react-hot-toast"
import { signIn } from "next-auth/react"

export const RegisterModal = () => {

    const registerModal = useRegisterModal()
    const loginModal = useLoginModal()

    const[name, setName] = useState('')
    const[username, setUsername] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[isLoading, setIsLoading] = useState(false)

    const onToggle = useCallback(() => {
        if(isLoading) {
            return
        }

        registerModal.onClose()
        loginModal.onOpen()
    }, [isLoading, registerModal, loginModal])

    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true)

            await axios.post('api/register', {
                email,
                password,
                name,
                username
            })

            toast.success('Account created.')

            signIn('credentials', {
                email,
                password
            })

            registerModal.onClose()
        } catch (error) {
            console.log(error)

            toast.error('Something went wrong.')
        } finally {
            setIsLoading(false)
        }
    }, [registerModal, email, password, username, name])

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input placeholder="Name" onChange={(event) => setName(event.target.value)} value=
            {name} disabled={isLoading} />

            <Input placeholder="Username" onChange={(event) => setUsername(event.target.value)} value=
            {username} disabled={isLoading} />
            
            <Input placeholder="Email" onChange={(event) => setEmail(event.target.value)} value={email} disabled={isLoading} />

            <Input placeholder="Password" onChange={(event) => setPassword(event.target.value)} value=
            {password} disabled={isLoading} />
        </div>
    )

    const footerContent = (
        <div className="text-neutral-400 text-center mt-4">
            <p>
                Already have an account?
                <span onClick={onToggle} className="text-white cursor-pointer hover:underline ml-1">
                    Create an account
                </span>
            </p>
        </div>
    )

    return(
        <Modal 
        disabled={isLoading} 
        isOpen={registerModal.isOpen} 
        title="Create an Account" 
        actionLabel="Register" 
        onClose={registerModal.onClose} 
        onSubmit={onSubmit} 
        body={bodyContent} 
        footer={footerContent}
        />
    )
}