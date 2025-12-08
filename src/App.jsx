import ContactCard from './components/ContactCard'
import CopyrightFullYear from './components/Copyright'
import Header from './components/Header'
import ContactList from './components/ContactList';

const contacts = [
  { id: 1, name: "Christian", phone: "+1 (555) 123-4567", email: "christian@email.com", isFavorite: true, role: "Amigo" },
  { id: 2, name: "Carlos", phone: "+1 (555) 987-6543", email: "carlos@email.com", isFavorite: false, role: "Trabajo" },
  { id: 3, name: "Juan", phone: "+1 (555) 456-7890", email: "juan@email.com", isFavorite: true, role: "Trabajos" },
  { id: 4, name: "Nick", phone: "+1 (555) 456-7890", email: "nick@email.com", isFavorite: true, role: "Familia" }
];

export default function App() {
  const favoriteCount = contacts.filter(function (c) {
    return c.isFavorite;
  }).length;

  return (
    <>
      <Header />
     <p style={{ color: '#ffffffff' }}>
        Total: {contacts.length} contactos | Favoritos: {favoriteCount}
      </p>
      <main style={{ justifyContent: "center" }}>
        <ContactList contacts={contacts} />
        <CopyrightFullYear />
      </main>
    </>


  )
}


