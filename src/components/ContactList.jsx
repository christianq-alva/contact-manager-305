import ContactCard from "./ContactCard";

export default function ContactList({ contacts }) {
    if (contacts.length === 0) {
        return <p style={{ color: '#999' }}>No hay contactos</p>
    }

    return (
        <div>
            {contacts.map(function (contact) {
                return (
                    <ContactCard
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