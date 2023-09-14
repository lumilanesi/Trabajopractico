import Link from 'next/link'
import './globals.css'
import Counter from './componentes/Counter';
import Formulario from './componentes/Formulario';
import Contacto from './contacto/page';

export const metadata = { 
  title: 'Trabajito 1',
  description: 'trabajo practico de nawe',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <section>
        <Counter />
        </section>
    
      <Contacto />
  
      <Formulario />
        {children}

      </body>
    </html>
  )
}
