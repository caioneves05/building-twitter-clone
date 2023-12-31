import { create } from "zustand"

interface ILoginModalStore {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

export const useLoginModal = create<ILoginModalStore>((set) => ({
    isOpen: true,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}))