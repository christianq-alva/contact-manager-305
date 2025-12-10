import ContactCard from "./ContactCard";

export default function ContactList({ contacts }) {
    if (contacts.length === 0) {
        return <p className="text-center text-gray-400 text-lg">No hay contactos</p>
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {contacts.map(function (contact) {
                return (
                    <ContactCard
                        key={contact.id}
                        id={contact.id}
                        name={contact.name}
                        phone={contact.phone}
                        email={contact.email}
                        isFavorite={contact.isFavorite}
                        role={contact.role}
                    />
                );
            })}
        </div>
    );
}