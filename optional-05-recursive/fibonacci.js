function fibonacci(n) {

}
function fibonacci(n) {
  // Basis: jika n adalah 0, kembalikan 0, jika n adalah 1, kembalikan 1
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  // Rekursi: jumlah dari dua elemen sebelumnya
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Jangan hapus kode di bawah ini!
export default fibonacci;