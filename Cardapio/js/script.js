// Função para mostrar o submenu correspondente ao botão clicado
function mostrarSubmenu(sectionId) {
    // Oculta todas as seções de submenu
    const sections = document.querySelectorAll('.submenu-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Mostra apenas a seção de submenu selecionada
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

// Função para finalizar o pedido de prato
function finalizarPedido() {
    const retirarItem = document.getElementById('retirar-item').checked;
    const retirarMolho = document.getElementById('retirar-molho').checked;
    const acrescentarPimenta = document.getElementById('acrescentar-pimenta').checked;
    const consumo = document.querySelector('input[name="consumo"]:checked').value;

    alert(`Pedido finalizado!\nRetirar item: ${retirarItem}\nRetirar molho: ${retirarMolho}\nAcrescentar pimenta: ${acrescentarPimenta}\nConsumo: ${consumo}`);
}

// Função para finalizar o pedido de bebida
function finalizarPedidoBebida(semGelo, poucoGas, consumo) {
    const semGeloChecked = document.getElementById(semGelo).checked;
    const poucoGasChecked = document.getElementById(poucoGas).checked;
    const consumoValue = document.querySelector(`input[name="${consumo}"]:checked`).value;

    alert(`Pedido de bebida finalizado!\nSem Gelo: ${semGeloChecked}\nPouco Gás: ${poucoGasChecked}\nConsumo: ${consumoValue}`);
}

// Função para finalizar o pedido de sobremesa
function finalizarPedidoSobremesa(semCalda, consumo) {
    const semCaldaChecked = document.getElementById(semCalda).checked;
    const consumoValue = document.querySelector(`input[name="${consumo}"]:checked`).value;

    alert(`Pedido de sobremesa finalizado!\nSem Calda: ${semCaldaChecked}\nConsumo: ${consumoValue}`);
}
