// Crear botón flotante
const botonChat = document.createElement('button');
botonChat.textContent = '💬 Chat Público';
botonChat.id = 'botonChatPublico';
botonChat.style = `
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  background: #0066cc;
  color: white;
  border: none;
  padding: 10px 14px;
  border-radius: 20px;
  box-shadow: 0 0 8px rgba(0,0,0,0.3);
  font-size: 14px;
  cursor: pointer;
`;

// Insertar botón al cuerpo
document.body.appendChild(botonChat);

// Manejar clic
botonChat.addEventListener('click', () => {
  let iframe = document.getElementById('iframeChat');
  
  if (!iframe) {
    iframe = document.createElement('iframe');
    iframe.id = 'iframeChat';
    iframe.src = '/assets/chat.html'; // <-- tu URL del chat
    iframe.style = `
      position: fixed;
      bottom: 70px;
      right: 20px;
      width: 380px;
      height: 530px;
      border: 1px solid #ccc;
      border-radius: 10px;
      z-index: 9999;
      background: white;
      box-shadow: 0 0 10px rgba(0,0,0,0.2);
    `;
    document.body.appendChild(iframe);
  } else {
    iframe.remove(); // Ocultar si ya está abierto
  }
});
