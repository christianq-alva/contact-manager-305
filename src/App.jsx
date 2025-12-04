import ContactCard from './components/ContactCard'
import CopyrightFullYear from './components/Copyright'
import Header from './components/Header'
export default function App() {
  return (

    <main style={{justifyContent: "center"}}>
        <Header />
        <ContactCard />
        <ContactCard />
    
      <CopyrightFullYear />
    </main>

  )
}


