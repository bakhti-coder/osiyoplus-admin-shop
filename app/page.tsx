'use client'
import ECommerce from "@/components/Dashboard/E-commerce";
import Login from "./(auth)/login/page";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Tokenni olish
    const token = localStorage.getItem("token");

    // Token mavjudligini tekshirish
    if (!token) {
      // Agar token mavjud bo'lmasa, login sahifasiga qaytish
      window.location.href = '/login'
    }
  }, []);

  return <ECommerce />;
}
