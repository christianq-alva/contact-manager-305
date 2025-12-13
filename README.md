# Contact Manager

Aplicación React (Vite) para gestionar contactos con funcionalidades completas de CRUD (Crear, Leer, Actualizar, Eliminar) y manejo de estado usando el hook `useState`.

## 📋 Descripción

Proyecto educativo para aprender React, enfocado en:
- Composición de componentes
- Manejo de estado con `useState`
- Props y comunicación entre componentes
- Renderizado de listas con `map()`
- Operaciones CRUD en arrays
- Inmutabilidad en React

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

### Componentes Principales

- **`src/App.jsx`**: Componente raíz que maneja el estado global de los contactos usando `useState`. Contiene todas las funciones de gestión (agregar, eliminar, limpiar, toggle favorito).

- **`src/components/ContactList.jsx`**: Recibe `contacts` y funciones de callback como props. Renderiza una lista de `ContactCard` usando `map()`. Muestra mensaje cuando no hay contactos.

- **`src/components/ContactCard.jsx`**: Presenta un contacto individual con toda su información. Incluye botón para cambiar estado de favorito. Firma: `ContactCard({ id, name, phone, email, isFavorite, role, onToggleFavorite })`.

- **`src/components/Badge.jsx`**: Componente simple que muestra texto sobre un fondo de color personalizado (recibe `text` y `color`).

- **`src/components/Header.jsx`**: Título y subtítulo de la aplicación.

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

1. **Estado en App.jsx**: El estado `contacts` vive en el componente `App`
2. **Props hacia abajo**: Se pasa `contacts` y funciones a `ContactList`
3. **Eventos hacia arriba**: `ContactList` y `ContactCard` llaman a las funciones recibidas como props
4. **Actualización del estado**: Las funciones en `App` actualizan el estado usando `setContacts`
5. **Re-renderizado**: React detecta el cambio y vuelve a renderizar los componentes afectados

---

## 📚 Recursos de Aprendizaje

- [React useState Hook](https://react.dev/reference/react/useState)
- [Inmutabilidad en React](https://react.dev/learn/updating-arrays-in-state)
- [Listas y Keys en React](https://react.dev/learn/rendering-lists)

---

## 👨‍💻 Autor

Proyecto educativo para aprender React y manejo de estado.
