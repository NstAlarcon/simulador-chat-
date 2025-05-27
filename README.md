# 💬 Chat Público Simulado para Traccar

Este proyecto implementa un **chat público simulado** para mostrar comentarios positivos de usuarios dentro de una plataforma como **Traccar**, con capacidad para recibir mensajes reales y loguearlos en un servidor externo.

## 🚀 Características

- 💬 Comentarios simulados rotativos con estilo realista y chapinismos.
- 🔊 Sonido de notificación cada vez que aparece un nuevo comentario.
- ✅ Validación para evitar envío de números telefónicos, enlaces o correos.
- 🔐 Los mensajes reales se envían a un backend para ser logueados (modo privado).
- 👥 Simulación de usuarios conectados (entre 75 y 85, cambia dinámicamente).
- 📦 Compatible con Traccar sin necesidad de modificar el código base del sistema.
- 🧊 Botón flotante movible para abrir/cerrar el chat.

## 📁 Archivos incluidos

| Archivo             | Descripción |
|---------------------|-------------|
| `chat.html`         | Interfaz completa del chat con lógica de simulación y envío. |
| `ding.mp3`          | Sonido reproducido al recibir mensajes. |
| `chat-loader.js`    | Script externo para insertar el botón flotante en Traccar. |
| `guardar-comentario.php` | Script externo que recibe y guarda comentarios reales. (debe estar en tu servidor personal como `antilossgps.com`) |

## 🔧 Cómo usar

1. **Ubicación recomendada de archivos en Traccar:**

   Colocá estos archivos en `/opt/traccar/web/assets/`:

   - `chat.html`
   - `ding.mp3`
   - `chat-loader.js`

2. **Insertar el script en `index.html` de Traccar**:

   Editá el archivo `/opt/traccar/web/app/index.html` y agregá antes de `</body>`:

   ```html
   <script src="/assets/chat-loader.js"></script>
   ```

3. **Reiniciar Traccar** para aplicar los cambios:

   ```bash
   sudo systemctl restart traccar
   ```

## 🌐 Backend externo (opcional pero recomendado)

Debés tener activo en tu servidor un endpoint que capture los mensajes reales:

```php
// guardar-comentario.php (en https://antilossgps.com)
```

Guarda los mensajes en un archivo `comentarios.log`.

## 🔒 Seguridad

- Los mensajes reales no se muestran públicamente.
- Se prohíbe compartir correos, enlaces o números telefónicos.
- No se usan bases de datos ni cookies, solo `localStorage`.

## ✍️ Autor

Desarrollado por [Néstor Alarcón](https://antilossgps.com) para Antiloss GPS.  
Con soporte de ChatGPT 🤖.

## 📄 Licencia

MIT – ¡Usalo, modificalo y adaptalo a tu empresa!
