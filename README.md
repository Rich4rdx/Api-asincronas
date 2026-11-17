# ⚡ JavaScript asíncrono y consumo de APIs

Ejercicios en Node.js para practicar promesas, `async/await` y el consumo de APIs externas, incluido una conversación con **Google Gemini** que conserva el historial.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Gemini](https://img.shields.io/badge/Google_Gemini-8E75B2?style=flat&logo=googlegemini&logoColor=white)

## Contenido

| Archivo | Qué hace | Concepto |
|---|---|---|
| `chat.js` | Envía un mensaje a Gemini 2.5 Flash con el historial previo y guarda la respuesta en un JSON. Incluye un ejemplo comentado de *prompt chaining* | API de IA, `async/await`, archivos |
| `climaApi.js` | Consulta la temperatura de Armenia (Quindío) en tres APIs del clima y usa la que responda primero | `Promise.race` |
| `llamadaApi.js` | Hace varias peticiones a PokéAPI en paralelo y espera todas | `Promise.all` |
| `placeholder.js` | Genera y consulta un rango de publicaciones en JSONPlaceholder | Peticiones en lote |

## Cómo ejecutarlo

```bash
npm install
```

Para el chat, crea un archivo `.env` con tu clave de Gemini:

```
GEMINI_API_KEY=tu-clave
```

Luego ejecuta cualquiera de los archivos, por ejemplo:

```bash
node climaApi.js
```

## Autor

**Richard**: [github.com/Rich4rdx](https://github.com/Rich4rdx)
