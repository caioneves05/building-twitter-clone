import { LoginModal } from "@/components/modals/LoginModal";
import { Header } from "@/components/Header";



export default function Home() {
  return (
    <>
      <LoginModal />
      <Header showBackArrow label="Home" />
    </>
  )
}
