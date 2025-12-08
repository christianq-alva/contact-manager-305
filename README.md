
# Contact Manager

Aplicación React (Vite) que muestra una lista de contactos y tarjetas individuales.

Descripción: proyecto simple para practicar la composición de componentes en React, manejo de props y renderizado de listas (ContactList → ContactCard). 

## Ejecutar localmente

1. Instala dependencias:

```bash
npm install
```

2. Inicia el servidor de desarrollo:

```bash
npm run dev
```

3. Abre el navegador en `http://localhost:5173`.

## Archivos y componentes relevantes (estado actual)

- `src/App.jsx`: componente raíz que renderiza el `Header`, la lista de contactos y el footer.
- `src/components/ContactList.jsx`: recibe `contacts` y renderiza un `ContactCard` por contacto. Hay una variante que filtra favoritos con `contacts.filter(c => c.isFavorite)` antes de `.map()`.
- `src/components/ContactCard.jsx`: presenta un contacto individual. Firma: `ContactCard({ id, name, phone, email, isFavorite, role })`.
- `src/components/Badge.jsx`: componente simple que muestra `text` sobre un fondo de color (recibe `text` y `color`).
- `src/components/Header.jsx`: título y subtítulo de la app.
- `src/components/Copyright.jsx`: pie con el nombre y el año (usa `new Date().getFullYear()`).

## Detalles importantes sobre el comportamiento actual

- `ContactList` debe recibir un prop `contacts` (array). Si no se le pasa, no renderizará tarjetas.
- En el `map` de `ContactList` usa `key={contact.id}` para React; si el `ContactCard` necesita el identificador dentro del componente, pásalo también como `id={contact.id}` porque `key` no aparece dentro de `props`.
- Para mostrar solo los favoritos, usa `contacts.filter(c => c.isFavorite)` antes de `.map()`.

## Estado de estilos

- El proyecto usa CSS en `src/index.css` y `src/App.css`. Algunas sugerencias para responsive (flexbox) fueron discutidas, pero actualmente el proyecto mantiene estilos simples.

## Cambios fáciles que ya existen en el repo

- `Badge.jsx` (componente simple) y el mapeo de 3 colores para roles (`Amigo`, `Trabajo`, `Familia`).
- Filtrado por favoritos en `ContactList` (implementado mediante `.filter`).
