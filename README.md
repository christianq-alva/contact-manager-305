# Contact Manager

Aplicación React (Vite) para gestionar contactos con funcionalidades completas de CRUD (Crear, Leer, Actualizar, Eliminar), manejo de estado usando el hook `useState`, y navegación con React Router.

## 📋 Descripción

Proyecto educativo para aprender React, enfocado en:
- Composición de componentes
- Manejo de estado con `useState`
- Props y comunicación entre componentes
- Renderizado de listas con `map()`
- Operaciones CRUD en arrays
- Inmutabilidad en React
- Routing y navegación con React Router
- Rutas dinámicas y parámetros de URL
- Navegación programática con `useNavigate`

## 🚀 Ejecutar localmente

1. Instala dependencias:

```bash
npm install
```

2. Inicia el servidor de desarrollo:

```bash
npm run dev
```

3. Abre el navegador en `http://localhost:5173`.

## 📁 Estructura del Proyecto

### Componente Raíz

- **`src/App.jsx`**: Componente raíz que configura las rutas de la aplicación usando `Routes` y `Route` de react-router-dom. Define todas las rutas disponibles.

### Páginas

- **`src/pages/HomePage.jsx`**: Página principal que muestra la lista de contactos. Maneja el estado de los contactos usando `useState` y contiene todas las funciones de gestión (agregar, eliminar, limpiar, toggle favorito).

- **`src/pages/ContactDetailPage.jsx`**: Página de detalle de un contacto específico. Usa `useParams()` para obtener el ID del contacto desde la URL. Incluye botones de navegación "Anterior" y "Siguiente" para navegar entre contactos.

- **`src/pages/AboutPage.jsx`**: Página "Acerca de" con información sobre la aplicación.

- **`src/pages/NotFoundPage.jsx`**: Página 404 que se muestra cuando la ruta no existe.

### Componentes

- **`src/components/Navbar.jsx`**: Barra de navegación con enlaces a las diferentes páginas. Usa `NavLink` para resaltar el link activo.

- **`src/components/Header.jsx`**: Título y subtítulo de la aplicación.

- **`src/components/ContactList.jsx`**: Recibe `contacts` y funciones de callback como props. Renderiza una lista de `ContactCard` usando `map()`. Muestra mensaje cuando no hay contactos.

- **`src/components/ContactCard.jsx`**: Presenta un contacto individual con toda su información. Incluye botón para cambiar estado de favorito y botón "Ver más" que usa `useNavigate()` para navegar a la página de detalle. Firma: `ContactCard({ id, name, phone, email, isFavorite, role, onToggleFavorite })`.

- **`src/components/Badge.jsx`**: Componente simple que muestra texto sobre un fondo de color personalizado (recibe `text` y `color`).

- **`src/components/Copyright.jsx`**: Pie de página con el nombre y el año actual (usa `new Date().getFullYear()`).

## ✨ Funcionalidades Implementadas

### 1. **Mostrar Contactos desde el Estado**
- Los contactos se almacenan en el estado usando `useState`
- El estado inicial contiene 4 contactos de ejemplo
- Los contactos se renderizan dinámicamente usando `map()`

### 2. **Agregar Nuevos Contactos**
- Botón "Agregar Contacto" que crea un nuevo contacto
- El nuevo contacto tiene un ID único generado con `Date.now()`
- El nombre se genera automáticamente con formato "Contacto N" (incremental)
- Usa el spread operator `[...contacts, newContact]` para mantener la inmutabilidad

### 3. **Eliminar Contactos Individuales**
- Cada contacto tiene un botón "Eliminar"
- Usa `filter()` para crear un nuevo array sin el contacto eliminado
- La función `handleDeleteContact(contactId)` recibe el ID del contacto a eliminar

### 4. **Limpiar Todos los Contactos**
- Botón "Limpiar Todo" que elimina todos los contactos de una vez
- Solo se muestra cuando hay contactos (renderizado condicional)
- Establece el estado a un array vacío `[]`

### 5. **Toggle de Favorito**
- Botón de estrella (⭐/☆) en cada tarjeta de contacto
- Permite agregar o quitar contactos de favoritos
- Usa `map()` para crear un nuevo array modificando solo el contacto específico
- El estilo visual cambia (fondo amarillo) cuando es favorito
- El contador de favoritos se actualiza automáticamente

### 6. **Contador de Contactos y Favoritos**
- Muestra el total de contactos y la cantidad de favoritos
- Se actualiza automáticamente cuando cambia el estado

### 7. **Sistema de Rutas con React Router**
- Navegación entre páginas sin recargar la aplicación
- Rutas definidas: `/` (Home), `/contact/:id` (Detalle), `/about` (Acerca de)
- Ruta 404 (`*`) para páginas no encontradas
- Navegación programática con `useNavigate()`

### 8. **Página de Detalle de Contacto**
- Vista detallada de cada contacto accesible desde `/contact/:id`
- Usa `useParams()` para obtener el ID del contacto desde la URL
- Botones de navegación "Anterior" y "Siguiente" para navegar entre contactos
- Los botones se desactivan cuando no hay contacto anterior/siguiente

### 9. **Navegación con Navbar**
- Barra de navegación visible en todas las páginas
- Usa `NavLink` para resaltar automáticamente el link activo
- Navegación sin recargar la página

## 🔑 Conceptos Clave Aprendidos

### useState Hook
```jsx
const [contacts, setContacts] = useState([...]);
```
- `contacts`: valor actual del estado
- `setContacts`: función para actualizar el estado
- El valor inicial se pasa como argumento a `useState()`

### Inmutabilidad
- **NUNCA** modificar el estado directamente
- Siempre crear nuevos arrays/objetos al actualizar el estado
- Usar spread operator `[...]` para copiar arrays
- Usar spread operator `{...}` para copiar objetos

### Métodos de Array

**filter()**: Crea un nuevo array con elementos que cumplen una condición
```jsx
const updatedContacts = contacts.filter(contact => contact.id !== contactId);
```

**map()**: Crea un nuevo array transformando cada elemento
```jsx
const updatedContacts = contacts.map(contact => {
  if (contact.id === contactId) {
    return { ...contact, isFavorite: !contact.isFavorite };
  }
  return contact;
});
```

### Pasar Funciones como Props
- Permite que componentes hijos actualicen el estado del padre
- Flujo: App → ContactList → ContactCard
- Las funciones se pasan sin paréntesis: `onClick={handleFunction}`

### Renderizado Condicional
```jsx
{contacts.length > 0 && <button>Limpiar Todo</button>}
{isFavorite ? '⭐' : '☆'}
```

### React Router

**Rutas y Navegación**:
```jsx
// Configuración de rutas en App.jsx
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/contact/:id" element={<ContactDetailPage />} />
  <Route path="/about" element={<AboutPage />} />
  <Route path="*" element={<NotFoundPage />} />
</Routes>
```

**useParams()**: Obtiene parámetros de la URL
```jsx
const { id } = useParams(); // Obtiene el :id de /contact/:id
```

**useNavigate()**: Navegación programática desde código
```jsx
const navigate = useNavigate();
navigate(`/contact/${contactId}`); // Navega a una ruta específica
```

**NavLink**: Link que resalta cuando está activo
```jsx
<NavLink 
  to="/" 
  className={({ isActive }) => 
    isActive ? "active-style" : "normal-style"
  }
>
  Home
</NavLink>
```

**Link vs useNavigate**:
- `Link`: Para navegación directa desde el JSX (enlaces clicables)
- `useNavigate`: Para navegación programática desde funciones (después de validaciones, acciones, etc.)

## 🎨 Estilos

- El proyecto usa **Tailwind CSS** para estilos
- Diseño responsive con grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- Efectos de hover y transiciones
- Estilos condicionales basados en el estado (favoritos con fondo amarillo)

## 📝 Detalles Técnicos Importantes

- **Keys en map()**: Siempre usar `key={contact.id}` en el `map()` para ayudar a React a identificar elementos únicos
- **Props vs Key**: `key` no está disponible dentro del componente, si necesitas el ID, pásalo también como prop `id={contact.id}`
- **Funciones en onClick**: Usar funciones anónimas cuando necesitas pasar parámetros: `onClick={() => handleFunction(id)}`

## 🔄 Flujo de Datos

1. **Estado en HomePage.jsx**: El estado `contacts` vive en el componente `HomePage`
2. **Props hacia abajo**: Se pasa `contacts` y funciones a `ContactList`
3. **Eventos hacia arriba**: `ContactList` y `ContactCard` llaman a las funciones recibidas como props
4. **Actualización del estado**: Las funciones en `HomePage` actualizan el estado usando `setContacts`
5. **Re-renderizado**: React detecta el cambio y vuelve a renderizar los componentes afectados

## 🧭 Sistema de Navegación

### Rutas Disponibles

- **`/`**: Página principal con lista de contactos
- **`/contact/:id`**: Página de detalle de un contacto específico (ej: `/contact/1`)
- **`/about`**: Página "Acerca de"
- **`*`**: Cualquier otra ruta muestra la página 404

### Navegación entre Contactos

En la página de detalle (`ContactDetailPage`):
- Botón "Anterior": Navega al contacto con ID menor (se desactiva en el primer contacto)
- Botón "Siguiente": Navega al contacto con ID mayor (se desactiva en el último contacto)
- Los contactos se ordenan por ID para mantener un orden consistente

---

## 📚 Recursos de Aprendizaje

- [React useState Hook](https://react.dev/reference/react/useState)
- [Inmutabilidad en React](https://react.dev/learn/updating-arrays-in-state)
- [Listas y Keys en React](https://react.dev/learn/rendering-lists)
- [React Router](https://reactrouter.com/)
- [useParams Hook](https://reactrouter.com/en/main/hooks/use-params)
- [useNavigate Hook](https://reactrouter.com/en/main/hooks/use-navigate)

---

## 👨‍💻 Autor

Proyecto educativo para aprender React y manejo de estado.
