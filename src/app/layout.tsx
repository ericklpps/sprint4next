import './globals.css';

import Header from '@/Componentes/header';
import Footer from '@/Componentes/footer'

// Importa o tipo ReactNode do React para uso tipado de filho
import { ReactNode } from 'react';

interface RootLayoutProps{
    // Define a estrutura dos filhos do layout como `ReactNode`
     children:ReactNode
}

export const metadata={
    //DEFININDO TITULO DA PAGINA
    title: 'Sprint4',
    // DEFINIR A DESCRIÇÃO DA PAGINA
    description:'Projeto Salesforce',
}

export default function RootLayout({children}:RootLayoutProps){
    return(
        <html lang="pt-BR">
            <body className='bg-white'>
            {// Inclui o componente Header no topo do layout
            }
            <Header/>
            <main>
              
                {children}

            </main>

            <Footer/>

            </body>

        </html>
    )
}