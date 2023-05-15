import '../../public/css/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; 

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mundo Cripto',
  description: 'Mundo Cripto Platform es una aplicacion en la que se pretende crear una comunidad para el intercambio de criptomonedas de forma segura y confiable por medio de la verificacion de perfiles y la posibilidad de conocer un poco mas a la otra persona con la que se hace una transaccion P2P',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
