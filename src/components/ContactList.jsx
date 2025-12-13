import ContactCard from "./ContactCard";

// Ahora recibe tres props:
// - contacts: el array de contactos a mostrar
// - onDeleteContact: la función para eliminar un contacto (viene de App.jsx)
// - onToggleFavorite: la función para cambiar el estado de favorito (viene de App.jsx)
export default function ContactList({ contacts, onDeleteContact, onToggleFavorite }) {
    if (contacts.length === 0) {
        return <p className="text-center text-gray-400 text-lg">No hay contactos</p>
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {contacts.map(function (contact) {
                return (
                    <div key={contact.id} className="relative">
                        <ContactCard
                            id={contact.id}
                            name={contact.name}
                            phone={contact.phone}
                            email={contact.email}
                            isFavorite={contact.isFavorite}
                            role={contact.role}
                            onToggleFavorite={onToggleFavorite}
                        />
                        <button
                            onClick={function () {
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