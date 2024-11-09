// Função para carregar o estado da checklist do Local Storage
function loadChecklist() {
    const items = document.querySelectorAll("#checklist li input");
    items.forEach((item) => {
        const isChecked = localStorage.getItem(item.id) === "true";
        item.checked = isChecked;
        toggleChecked(item);
    });
}

// Função para salvar o estado da checklist no Local Storage
function saveChecklist(item) {
    localStorage.setItem(item.id, item.checked);
}

// Função para riscar o item marcado
function toggleChecked(item) {
    if (item.checked) {
        item.parentElement.classList.add("checked");
    } else {
        item.parentElement.classList.remove("checked");
    }
}

// Inicializar a checklist
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll("#checklist li input");
    loadChecklist();

    items.forEach((item) => {
        item.addEventListener("change", () => {
            toggleChecked(item);
            saveChecklist(item);
        });
    });
});
