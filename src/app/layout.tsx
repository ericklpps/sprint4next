// src/app/layout.tsx
import Header from '@/Componentes/header';
import Footer from '@/Componentes/footer';
import { ReactNode } from 'react';
import Daltonismo from '@/Componentes/Daltonismo';

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'Sprint4',
  description: 'Projeto Salesforce',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
