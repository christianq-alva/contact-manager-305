import { useState } from 'react';
import CopyrightFullYear from '../components/Copyright'
import Header from '../components/Header'
import ContactList from '../components/ContactList';

export default function HomePage() {
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

  function handleClearAll() {
    setContacts([]);
  }

  function handleToggleFavorite(contactId) {
    // Usamos map() para crear un nuevo array modificando solo el contacto específico
    const updatedContacts = contacts.map(function (contact) {
      // Si este es el contacto que queremos modificar
      if (contact.id === contactId) {
        // Retornamos una copia del contacto con isFavorite invertido
        // Si era true, ahora es false. Si era false, ahora es true
        return { ...contact, isFavorite: !contact.isFavorite };
      }
      return contact;
    });

    // Actualizamos el estado con el nuevo array
    setContacts(updatedContacts);
  }

  const favoriteCount = contacts.filter(function (c) {
    return c.isFavorite;
  }).length;

  return (
    <>
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
        <ContactList
          contacts={contacts}
          onDeleteContact={handleDeleteContact}
          onToggleFavorite={handleToggleFavorite}
        />
      </main>
      <footer className="mt-16 pt-8 border-t border-gray-700">
        <CopyrightFullYear />
      </footer>
    </>
  )
}

