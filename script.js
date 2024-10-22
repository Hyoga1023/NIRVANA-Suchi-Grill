window.onload = function() {
    // Poblar el selector de días
    let diaSelect = document.getElementById('dia');
    for (let i = 1; i <= 31; i++) {
        let option = document.createElement('option');
        option.value = i;
        option.text = i;
        diaSelect.appendChild(option);
    }

    // Poblar el selector de años
    let anoSelect = document.getElementById('ano');
    let currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= 1900; i--) {
        let option = document.createElement('option');
        option.value = i;
        option.text = i;
        anoSelect.appendChild(option);
    }
};