import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Badge from '../components/Badge';

export default function ContactDetailPage() {
  // useParams() obtiene los parámetros de la URL
  // En este caso, obtiene el :id de la ruta /contact/:id
  const { id } = useParams();

  // Por ahora, datos hardcodeados (mismo array que HomePage)
  // En el futuro vendrán de una API o estado compartido
  const contacts = [
    { id: 1, name: "Christian", phone: "+1 (555) 123-4567", email: "christian@email.com", isFavorite: true, role: "Amigo" },
    { id: 2, name: "Carlos", phone: "+1 (555) 987-6543", email: "carlos@email.com", isFavorite: false, role: "Trabajo" },
    { id: 3, name: "Juan", phone: "+1 (555) 456-7890", email: "juan@email.com", isFavorite: true, role: "Trabajo" },
    { id: 4, name: "Nick", phone: "+1 (555) 456-7890", email: "nick@email.com", isFavorite: true, role: "Familia" }
  ];

  // Ordenamos los contactos por ID para tener un orden consistente
  const sortedContacts = [...contacts].sort(function(a, b) {
    return a.id - b.id;
  });

  // Buscamos el contacto que coincida con el ID de la URL
  // Number(id) convierte el string del parámetro a número
  const contact = sortedContacts.find(function(c) {
    return c.id === Number(id);
  });

  // Encontramos el índice del contacto actual en el array ordenado
  const currentIndex = sortedContacts.findIndex(function(c) {
    return c.id === Number(id);
  });

  // Obtenemos el contacto anterior (índice - 1)
  const previousContact = currentIndex > 0 ? sortedContacts[currentIndex - 1] : null;

  // Obtenemos el contacto siguiente (índice + 1)
  const nextContact = currentIndex < sortedContacts.length - 1 ? sortedContacts[currentIndex + 1] : null;

  const roleColors = {
    'Amigo': '#10B981',
    'Trabajo': '#3B82F6',
    'Familia': '#F472B6'
  };
  const badgeColor = roleColors[contact?.role] || '#9CA3AF';

  // Si no encontramos el contacto, mostramos un mensaje de error
  if (!contact) {
    return (
      <>
        <Header />
        <div className="mt-8 bg-white rounded-lg p-8 shadow-lg text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contacto no encontrado</h2>
          <p className="text-gray-600 mb-6">El contacto que buscas no existe.</p>
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

  return (
    <>
      <Header />
      <div className="mt-8 bg-white rounded-lg p-8 shadow-lg">
        <Link 
          to="/"
          className="text-blue-500 hover:text-blue-700 font-semibold mb-4 inline-block"
        >
          Volver
        </Link>
        <div className="mt-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-4xl font-bold text-gray-800">{contact.name}</h1>
            <span className="text-4xl">{contact.isFavorite ? '⭐' : '☆'}</span>
          </div>
          
          <div className="space-y-4 text-lg">
            <div>
              <p className="text-sm text-gray-500 font-semibold">Teléfono</p>
              <p className="text-gray-800">{contact.phone}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500 font-semibold">Email</p>
              <p className="text-gray-800">{contact.email}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500 font-semibold">Rol</p>
              <Badge text={contact.role} color={badgeColor} />
            </div>
            
            <div>
              <p className="text-sm text-gray-500 font-semibold">ID</p>
              <p className="text-gray-800">{contact.id}</p>
            </div>
          </div>

          {/* Botones de navegación Anterior/Siguiente */}
          <div className="mt-8 flex justify-between items-center pt-6 border-t border-gray-200">
            {previousContact ? (
              <Link
                to={`/contact/${previousContact.id}`}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors"
              >
                ← Anterior
              </Link>
            ) : (
              <button
                disabled
                className="bg-gray-300 text-gray-500 font-semibold py-2 px-4 rounded cursor-not-allowed"
              >
                ← Anterior
              </button>
            )}

            {nextContact ? (
              <Link
                to={`/contact/${nextContact.id}`}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors"
              >
                Siguiente →
              </Link>
            ) : (
              <button
                disabled
                className="bg-gray-300 text-gray-500 font-semibold py-2 px-4 rounded cursor-not-allowed"
              >
                Siguiente →
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

