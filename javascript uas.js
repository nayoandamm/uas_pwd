let cart = [];
let total = 0;
let currentUser = '';

function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function login() {
    const user = username.value;
    const pass = password.value;

    if ((user === 'user' && pass === 'pass') || (user === 'admin' && pass === 'admin')) {
        currentUser = user;
        showPage('menuPage');
    } else {
        alert('Login gagal!');
    }
}

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    renderCart();
}

function renderCart() {
    cartList.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - Rp ${item.price.toLocaleString()}`;
        cartList.appendChild(li);
    });
    totalHarga.textContent = `Rp ${total.toLocaleString()}`;
}

function goPayment() {
    if (cart.length === 0) {
        alert('Keranjang kosong');
        return;
    }
    totalBayar.textContent = `Rp ${total.toLocaleString()}`;
    showPage('paymentPage');
}

function finishPayment() {
    namaUser.textContent = currentUser;
    tanggal.textContent = new Date().toLocaleString();

    strukList.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - Rp ${item.price.toLocaleString()}`;
        strukList.appendChild(li);
    });

    strukTotal.textContent = `Rp ${total.toLocaleString()}`;
    showPage('receiptPage');
}

function backMenu() {
    cart = [];
    total = 0;
    renderCart();
    showPage('menuPage');
}

function printStruk() {
    window.print();
}
