// Menghapus seluruh tampilan
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Menambahkan angka atau operator ke tampilan
function append(value) {
    document.getElementById('display').value += value;
}

// Menghapus satu karakter dari tampilan (backspace)
function backspace() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1); // Menghapus karakter terakhir
}

// Menghitung hasil operasi
function calculate() {
    try {
        let expression = document.getElementById('display').value;
        let result = eval(expression);
        document.getElementById('display').value = result;
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}
