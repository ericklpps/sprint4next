import React from 'react';
import dynamic from 'next/dynamic';
import Footer from "@/Componentes/footer";
import Link from "next/link";
import LoginPage from './Login/page';
import Inicio from '../Componentes/Inicio';


export default function HomePage() {
    return (
      <section className="container mx-auto p-4">
        <Inicio/>
      </section>
    )
  }
