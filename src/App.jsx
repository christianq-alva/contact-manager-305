import { useState } from 'react';
import CopyrightFullYear from './components/Copyright'
import Header from './components/Header'
import ContactList from './components/ContactList';

export default function App() {
  // useState: El hook que maneja el estado de los contactos
  // contacts: El valor actual del estado (array de contactos)
  // setContacts: La función para actualizar el estado
  const [contacts, setContacts] = useState([
    { id: 1, name: "Christian", phone: "+1 (555) 123-4567", email: "christian@email.com", isFavorite: true, role: "Amigo" },
    { id: 2, name: "Carlos", phone: "+1 (555) 987-6543", email: "carlos@email.com", isFavorite: false, role: "Trabajo" },
    { id: 3, name: "Juan", phone: "+1 (555) 456-7890", email: "juan@email.com", isFavorite: true, role: "Trabajo" },
    { id: 4, name: "Nick", phone: "+1 (555) 456-7890", email: "nick@email.com", isFavorite: true, role: "Familia" }
  ]);


  function handleAddContact() {
    const newContact = {
      id: Date.now(),
      name: `Contacto ${contacts.length + 1}`,
      phone: "000-0000",
      email: `contacto${contacts.length + 1}@email.com`,
      isFavorite: false,
      role: "Amigo"
    };

    setContacts([...contacts, newContact]);
  }


  function handleDeleteContact(contactId) {
    const updatedContacts = contacts.filter(function (contact) {
      return contact.id !== contactId;
    });
    setContacts(updatedContacts);
  }

  // ============================================
  // FUNCIÓN PARA LIMPIAR TODOS LOS CONTACTOS
  // ============================================
  function handleClearAll() {
    // Establecemos el estado a un array vacío
    // Esto elimina todos los contactos de una vez
    setContacts([]);
  }

  // ============================================
  // FUNCIÓN PARA CAMBIAR EL ESTADO DE FAVORITO
  // ============================================
  // Esta función recibe el ID del contacto cuyo favorito queremos cambiar
  function handleToggleFavorite(contactId) {
    // Usamos map() para crear un nuevo array modificando solo el contacto específico
    const updatedContacts = contacts.map(function (contact) {
      // Si este es el contacto que queremos modificar
      if (contact.id === contactId) {
        // Retornamos una copia del contacto con isFavorite invertido
        // Si era true, ahora es false. Si era false, ahora es true
        return { ...contact, isFavorite: !contact.isFavorite };
      }
      // Si no es el contacto que buscamos, lo retornamos sin cambios
      return contact;
    });

    // Actualizamos el estado con el nuevo array
    setContacts(updatedContacts);
    
    // Ejemplo de cómo funciona:
    // Si tenemos un contacto con isFavorite: true
    // !contact.isFavorite cambia a false
    // { ...contact, isFavorite: false } crea una copia con el nuevo valor
  }

  const favoriteCount = contacts.filter(function (c) {
    return c.isFavorite;
  }).length;

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Header />
        <div className="mt-4 text-center text-gray-300 text-sm">
          <span className="font-semibold">Total:</span> {contacts.length} contactos | <span className="font-semibold">Favoritos:</span> {favoriteCount}
        </div>
        <div className="mt-4 text-center space-x-4">
          <button
            onClick={handleAddContact}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors"
          >
            + Agregar Contacto
          </button>
          {/* 
            Botón para eliminar todos los contactos
            Solo se muestra si hay contactos (contacts.length > 0)
          */}
          {contacts.length > 0 && (
            <button
              onClick={handleClearAll}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded transition-colors"
            >
              🗑️ Limpiar Todo
            </button>
          )}
        </div>
        <main className="mt-8">
          {/* 
            Pasamos la función handleToggleFavorite como prop
            Esto permite que ContactCard pueda cambiar el estado de favorito
          */}
          <ContactList
            contacts={contacts}
            onDeleteContact={handleDeleteContact}
            onToggleFavorite={handleToggleFavorite}
          />
        </main>
        <footer className="mt-16 pt-8 border-t border-gray-700">
          <CopyrightFullYear />
        </footer>
      </div>
    </div>
  )
}


