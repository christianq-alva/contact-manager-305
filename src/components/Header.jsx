import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-6 shadow-lg">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold m-0">📱 Contact Manager</h1>
                    <p className="mt-2 text-blue-100 text-sm">
                        Gestiona tus contactos de forma sencilla
                    </p>
                </div>
                <nav className="flex gap-4">
                    <Link
                        to="/"
                        className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded transition-colors"
                    >
                        Inicio
                    </Link>
                    <Link
                        to="/about"
                        className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded transition-colors"
                    >
                        Acerca de
                    </Link>
                </nav>
            </div>
        </header>
    );
}