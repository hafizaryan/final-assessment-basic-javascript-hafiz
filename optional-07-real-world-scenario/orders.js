// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// Array untuk menyimpan data pesanan
let orders = [];

// Fungsi untuk menambahkan pesanan baru
function addOrder(customerName, items) {
  const id = generateUniqueId();
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
  const newOrder = {
    id: id,
    customerName: customerName,
    items: items,
    totalPrice: totalPrice,
    status: "Menunggu",
  };
  orders.push(newOrder);
}

// Fungsi untuk mengupdate status pesanan berdasarkan ID pesanan
function updateOrderStatus(orderId, status) {
  const order = orders.find((order) => order.id === orderId);
  if (order) {
    order.status = status;
  }
}

// Fungsi untuk menghitung total pendapatan dari pesanan yang sudah selesai
function calculateTotalRevenue() {
  return orders
    .filter((order) => order.status === "Selesai")
    .reduce((total, order) => total + order.totalPrice, 0);
}

// Fungsi untuk menghapus pesanan berdasarkan ID
function deleteOrder(orderId) {
  orders = orders.filter((order) => order.id !== orderId);
}

// Fungsi untuk menghasilkan ID unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

export {
  orders,
  addOrder,
  updateOrderStatus,
  calculateTotalRevenue,
  deleteOrder,
};
