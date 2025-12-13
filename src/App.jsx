import ContactCard from './components/ContactCard'
import CopyrightFullYear from './components/Copyright'
import Header from './components/Header'
import ContactList from './components/ContactList';
import { useState } from 'react';

const contacts = [
  { id: 1, name: "Christian", phone: "+1 (555) 123-4567", email: "christian@email.com", isFavorite: true, role: "Amigo" },
  { id: 2, name: "Carlos", phone: "+1 (555) 987-6543", email: "carlos@email.com", isFavorite: false, role: "Trabajo" },
  { id: 3, name: "Juan", phone: "+1 (555) 456-7890", email: "juan@email.com", isFavorite: true, role: "Trabajo" },
  { id: 4, name: "Nick", phone: "+1 (555) 456-7890", email: "nick@email.com", isFavorite: true, role: "Familia" }
];

const newContactsToAdd = [
  { id: 5, name: "María", phone: "+1 (555) 111-2222", email: "maria@email.com", isFavorite: false, role: "Amigo" },
  { id: 6, name: "Pedro", phone: "+1 (555) 333-4444", email: "pedro@email.com", isFavorite: true, role: "Trabajo" }
];

export default function App() {
  const [statecontacts, setContacts] = useState(contacts);

  function addContact() {
    // Agregar un contacto individual desde el array diferente
    const newContact = newContactsToAdd[0]; // Puedes cambiar el índice o iterar
    setContacts([...statecontacts, newContact]); // ✅ Crea array nuevo
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
        <button
          onClick={addContact}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-2"
        >
          Agregar Contacto
        </button>
        <main className="mt-8">
          <ContactList contacts={contacts} />
        </main>
        <footer className="mt-16 pt-8 border-t border-gray-700">
          <CopyrightFullYear />
        </footer>
      </div>
    </div>
  )
}


