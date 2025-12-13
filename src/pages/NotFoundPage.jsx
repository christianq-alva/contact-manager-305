import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default function NotFoundPage() {
  return (
    <>
      <Header />
      <div className="mt-8 bg-white rounded-lg p-8 shadow-lg text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">Página no encontrada</p>
        <p className="text-gray-500 mb-8">
          La página que buscas no existe o ha sido movida.
        </p>
        <Link 
          to="/"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors inline-block"
        >
          Volver al inicio
        </Link>
      </div>
    </>
  );
}

