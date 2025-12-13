import Header from '../components/Header';
import CopyrightFullYear from '../components/Copyright';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Header />
        <div className="mt-8 bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Acerca de</h2>
          <p className="text-gray-700 mb-4">
            Esta es una aplicación de gestión de contactos desarrollada con React.
          </p>
          <p className="text-gray-700 mb-4">
            Permite agregar, eliminar y gestionar tus contactos de manera sencilla.
          </p>
          <div className="mt-6">
            <Link
              to="/"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors inline-block"
            >
              ← Volver al Inicio
            </Link>
          </div>
        </div>
        <footer className="mt-16 pt-8 border-t border-gray-700">
          <CopyrightFullYear />
        </footer>
      </div>
    </div>
  )
}

