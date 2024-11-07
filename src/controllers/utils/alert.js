// alert.js
export function showAlert(message, type) {
    // Buat elemen alert
    const alertBox = document.createElement('div');
    alertBox.textContent = message;
    alertBox.className = `alert alert-${type}`;
  
    // Tambahkan ke DOM
    document.body.appendChild(alertBox);
  
    // Hapus alert setelah beberapa detik
    setTimeout(() => {
      alertBox.remove();
    }, 3000);
  }