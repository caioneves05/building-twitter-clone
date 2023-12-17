"use client"

import { useLoginModal } from "@/hooks/useLoginModal"
import { useCallback, useState } from "react";
import { Input } from "../Input";
import { Modal } from "../Modal";

export const LoginModal = () => {

    const loginModal = useLoginModal();

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[isLoading, setIsLoading] = useState(false);

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

    return(
        <Modal 
        disabled={isLoading} 
        isOpen={loginModal.isOpen} 
        title="Login" 
        actionLabel="Sign In" 
        onClose={loginModal.onClose} 
        onSubmit={onSubmit} 
        body={bodyContent} />
    )
}