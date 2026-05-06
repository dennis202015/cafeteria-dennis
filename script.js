// Configuración extraída de tus capturas
const firebaseConfig = {
  apiKey: "AIzaSyBRuSKUuMJMgoCP0DVDG5lQzEsBjd8AUsk",
  authDomain: "cafeteria-dennis.firebaseapp.com",
  projectId: "cafeteria-dennis",
  storageBucket: "cafeteria-dennis.firebasestorage.app",
  messagingSenderId: "623002195726",
  appId: "1:623002195726:web:675b5ab0d0df0b8878e95f"
};

// Inicializar conexión
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Escuchar el clic en el botón verde
document.getElementById('btn-confirmar').addEventListener('click', async () => {
    try {
        // Enviar un pedido de prueba directo
        await db.collection("pedidos").add({
            cliente: "Dennis",
            fecha: new Date(),
            mensaje: "Prueba desde la consola abierta"
        });
        alert("¡PEDIDO ENVIADO! Revisa la pestaña Data de Firebase.");
    } catch (error) {
        console.error("Error detectado:", error);
        alert("Hubo un error de permisos o conexión.");
    }
});
