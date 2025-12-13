import Header from '../components/Header';
import CopyrightFullYear from '../components/Copyright';

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="mt-8 bg-white rounded-lg p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Acerca de</h2>
        <p className="text-gray-700 mb-4">
          Esta es una aplicación de gestión de contactos desarrollada con React.
        </p>
        <p className="text-gray-700 mb-4">
          Permite agregar, eliminar y gestionar tus contactos de manera sencilla.
        </p>
      </div>
      <footer className="mt-16 pt-8 border-t border-gray-700">
        <CopyrightFullYear />
      </footer>
    </>
  )
}

