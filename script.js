let total = 0;
const listaPedido = document.getElementById('lista-pedido');
const precioPantalla = document.getElementById('total-precio');

// Función para agregar productos al pedido
document.querySelectorAll('.btn-agregar').forEach(boton => {
    boton.addEventListener('click', (e) => {
        const tarjeta = e.target.closest('.producto');
        const nombre = tarjeta.getAttribute('data-nombre');
        const precio = parseFloat(tarjeta.getAttribute('data-precio'));

        // Crear el elemento de la lista
        const item = document.createElement('li');
        item.style.display = "flex";
        item.style.justifyContent = "space-between";
        item.style.alignItems = "center";
        item.style.padding = "8px 0";
        item.style.borderBottom = "1px solid #ccc";

        // Añadir texto y el botón de eliminar (X)
        item.innerHTML = `
            <span>${nombre} - $${precio.toFixed(2)}</span>
            <button class="btn-eliminar" style="background:#e74c3c; color:white; border:none; border-radius:3px; cursor:pointer; padding:2px 8px; font-weight:bold;">X</button>
        `;

        // Lógica para el botón de eliminar de esta tarjeta específica
        item.querySelector('.btn-eliminar').addEventListener('click', () => {
            total -= precio;
            if (total < 0) total = 0;
            precioPantalla.innerText = total.toFixed(2);
            item.remove();
        });

        listaPedido.appendChild(item);

        // Sumar al total general
        total += precio;
        precioPantalla.innerText = total.toFixed(2);
    });
});

// Botón de confirmar pedido
const botonConfirmar = document.getElementById('btn-confirmar');
if (botonConfirmar) {
    botonConfirmar.addEventListener('click', () => {
        if (total > 0) {
            alert(`¡Pedido confirmado! Total a pagar: $${total.toFixed(2)}. ¡Gracias por tu compra!`);
            // Limpiar todo para el siguiente pedido
            total = 0;
            precioPantalla.innerText = "0.00";
            listaPedido.innerHTML = "";
        } else {
            alert("Tu pedido está vacío.");
        }
    });
}