import ContactCard from "./ContactCard";

// ============================================
// COMPONENTE ContactList
// ============================================
// Ahora recibe dos props:
// - contacts: el array de contactos a mostrar
// - onDeleteContact: la función para eliminar un contacto (viene de App.jsx)
export default function ContactList({ contacts, onDeleteContact }) {
    // Si no hay contactos, mostramos un mensaje
    if (contacts.length === 0) {
        return <p className="text-center text-gray-400 text-lg">No hay contactos</p>
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {contacts.map(function (contact) {
                return (
                    // Cada contacto está envuelto en un div para poder agregar el botón
                    <div key={contact.id} className="relative">
                        {/* Mostramos la tarjeta del contacto */}
                        <ContactCard
                            id={contact.id}
                            name={contact.name}
                            phone={contact.phone}
                            email={contact.email}
                            isFavorite={contact.isFavorite}
                            role={contact.role}
                        />
                        {/* 
                          Botón para eliminar el contacto
                          onClick ejecuta una función anónima que llama a onDeleteContact
                          Pasamos contact.id para que sepa qué contacto eliminar
                        */}
                        <button
                            onClick={function() { 
                                // Cuando hacen clic, llamamos a onDeleteContact con el ID del contacto
                                onDeleteContact(contact.id); 
                            }}
                            className="mt-2 w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition-colors"
                        >
                            Eliminar
                        </button>
                    </div>
                );
            })}
        </div>
    );
}