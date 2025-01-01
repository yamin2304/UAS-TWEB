document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form

    const emailInput = document.getElementById('email');
    const errorMessage = document.getElementById('error-message');
    const emailValue = emailInput.value;

    // Regex untuk validasi format email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailValue)) {
        errorMessage.textContent = 'Format email tidak valid. Silakan masukkan email yang benar.';
    } else {
        errorMessage.textContent = ''; // Hapus pesan kesalahan jika valid
        alert('Email berhasil dikirim: ' + emailValue);
    }
});