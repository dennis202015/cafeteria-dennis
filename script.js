// Configuración de tu proyecto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBRuSKUuMJMgoCP0DVDG5lQzEsBjd8AUsk",
  authDomain: "cafeteria-dennis.firebaseapp.com",
  projectId: "cafeteria-dennis",
  storageBucket: "cafeteria-dennis.firebasestorage.app",
  messagingSenderId: "623002195726",
  appId: "1:623002195726:web:675b5ab0d0df0b8878e95f"
};

// Inicializar Firebase y Firestore
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Escuchar el clic en el botón de "Confirmar Pedido"
document.getElementById('btn-confirmar').addEventListener('click', async () => {
    
    // Capturar la lista de productos y el total desde el HTML
    const listaProductos = document.getElementById('lista-pedido').innerText;
    const totalTexto = document.getElementById('total-precio').innerText;

    // Validación: Si el total es 0, no enviar nada
    if (totalTexto === "0.00" || listaProductos.trim() === "") {
        alert("Tu carrito está vacío. Agrega algo antes de confirmar.");
        return;
    }

    try {
        // Enviar los datos reales a la colección "pedidos"
        await db.collection("pedidos").add({
            cliente: "Dennis",
            productos: listaProductos,
            total: totalTexto,
            fecha: new Date(),
            estado: "Pendiente"
        });

        // Aviso de éxito
        alert("¡PEDIDO REAL ENVIADO! Ya puedes verlo en la pestaña Data de Firebase.");
        
        // Opcional: Limpiar el carrito después de enviar (si tienes esa función)
        // carrito = [];
        // actualizarInterfaz();

    } catch (error) {
        console.error("Error al enviar a Firebase:", error);
        alert("Hubo un error al conectar con Firebase. Revisa la consola.");
    }
});

