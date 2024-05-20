import React from 'react';
import dynamic from 'next/dynamic';
import Footer from "@/Componentes/footer";
import Link from "next/link";
import LoginPage from './Login/page';
import Inicio from '../Componentes/Inicio';
import Daltonismo from '@/Componentes/Daltonismo';


export default function HomePage() {
    return (
      <section>
        <Inicio/>
        <Daltonismo/>
      </section>
    )
  }
