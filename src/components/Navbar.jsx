import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex gap-5 p-4 bg-gray-100 mb-6 rounded-lg">
      <NavLink 
        to="/" 
        className={function({ isActive }) {
          // Si el link está activo, aplica estilos de resaltado
          // Si no está activo, aplica estilos normales
          return isActive 
            ? "text-blue-600 font-bold underline transition-colors" 
            : "text-gray-800 hover:text-blue-600 transition-colors font-medium";
        }}
      >
        Home
      </NavLink>
      <NavLink 
        to="/about" 
        className={function({ isActive }) {
          // Si el link está activo, aplica estilos de resaltado
          // Si no está activo, aplica estilos normales
          return isActive 
            ? "text-blue-600 font-bold underline transition-colors" 
            : "text-gray-800 hover:text-blue-600 transition-colors font-medium";
        }}
      >
        About
      </NavLink>
    </nav>
  );
}

