import { LoginModal } from "@/components/ModalsHome/LoginModal";
import { Header } from "@/components/Header";
import { RegisterModal } from "@/components/ModalsHome/RegisterModal";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <SessionProvider>
      <Toaster />
      <Header showBackArrow label="Home" />
      <RegisterModal />
      <LoginModal />
    </SessionProvider>
  );
}