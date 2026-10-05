<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Stockly — Stok & Penjualan</title>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

*{
    box-sizing:border-box;
    margin:0;
    padding:0;
}

:root{
    --bg:#f5f6f8;
    --card:#fff;
    --text:#17191c;
    --muted:#858b95;
    --border:#e7e9ed;
    --dark:#151719;
    --green:#168a55;
    --green-bg:#eaf7f0;
    --red:#d94b4b;
    --red-bg:#fff0f0;
    --yellow:#9b7200;
    --yellow-bg:#fff6da;
}

body{
    font-family:Inter,Arial,sans-serif;
    background:var(--bg);
    color:var(--text);
    min-height:100vh;
}

button,input,select{
    font-family:inherit;
}

button{
    cursor:pointer;
}

/* HEADER */

.header{
    background:#fff;
    border-bottom:1px solid var(--border);
    position:sticky;
    top:0;
    z-index:30;
}

.header-inner{
    max-width:1150px;
    margin:auto;
    padding:16px 22px;
    display:flex;
    justify-content:space-between;
    align-items:center;
}

.logo{
    display:flex;
    align-items:center;
    gap:10px;
}

.logo-icon{
    width:38px;
    height:38px;
    border-radius:11px;
    background:var(--dark);
    color:#fff;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:17px;
}

.logo-title{
    font-size:17px;
    font-weight:700;
}

.logo-sub{
    font-size:10px;
    color:var(--muted);
    margin-top:2px;
}

/* MAIN */

.container{
    max-width:1150px;
    margin:auto;
    padding:28px 22px 60px;
}

.welcome{
    margin-bottom:24px;
}

.welcome h2{
    font-size:25px;
    letter-spacing:-1px;
    margin-bottom:5px;
}

.welcome p{
    font-size:13px;
    color:var(--muted);
}

/* SUMMARY */

.summary{
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:12px;
    margin-bottom:25px;
}

.summary-card{
    background:#fff;
    border:1px solid var(--border);
    border-radius:15px;
    padding:17px;
}

.summary-top{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:12px;
}

.summary-label{
    color:var(--muted);
    font-size:11px;
}

.summary-icon{
    width:29px;
    height:29px;
    border-radius:8px;
    background:#f2f3f5;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:12px;
}

.summary-value{
    font-size:19px;
    font-weight:700;
}

/* TOOLBAR */

.toolbar{
    display:flex;
    gap:9px;
    margin-bottom:14px;
}

.search{
    position:relative;
    flex:1;
}

.search-icon{
    position:absolute;
    left:13px;
    top:50%;
    transform:translateY(-50%);
    color:#9da2aa;
}

.search input{
    width:100%;
    height:44px;
    border:1px solid var(--border);
    border-radius:10px;
    background:#fff;
    outline:none;
    padding:0 13px 0 37px;
    font-size:12px;
}

.search input:focus{
    border-color:#b9bdc4;
}

.add-btn{
    height:44px;
    padding:0 17px;
    border:0;
    border-radius:10px;
    background:var(--dark);
    color:#fff;
    font-size:12px;
    font-weight:600;
}

/* CATEGORY */

.categories{
    display:flex;
    gap:7px;
    overflow-x:auto;
    margin-bottom:17px;
    scrollbar-width:none;
}

.categories::-webkit-scrollbar{
    display:none;
}

.cat{
    flex:none;
    padding:8px 13px;
    border-radius:20px;
    border:1px solid var(--border);
    background:#fff;
    color:#6e747c;
    font-size:11px;
}

.cat.active{
    background:var(--dark);
    color:#fff;
    border-color:var(--dark);
}

/* PRODUCTS */

.panel{
    background:#fff;
    border:1px solid var(--border);
    border-radius:16px;
    overflow:hidden;
}

.panel-header{
    padding:16px 18px;
    border-bottom:1px solid var(--border);
    display:flex;
    justify-content:space-between;
    align-items:center;
}

.panel-title{
    font-size:13px;
    font-weight:600;
}

.panel-count{
    font-size:10px;
    color:var(--muted);
}

.table-wrap{
    overflow-x:auto;
}

table{
    width:100%;
    min-width:980px;
    border-collapse:collapse;
}

th{
    text-align:left;
    padding:11px 17px;
    background:#fafafa;
    color:#9a9fa7;
    font-size:9px;
    font-weight:600;
    text-transform:uppercase;
    letter-spacing:.4px;
    border-bottom:1px solid var(--border);
}

td{
    padding:13px 17px;
    border-bottom:1px solid #f0f1f3;
    font-size:11px;
}

tr:last-child td{
    border-bottom:0;
}

.product-name{
    font-size:12px;
    font-weight:600;
}

.product-category{
    margin-top:3px;
    color:var(--muted);
    font-size:9px;
}

.price{
    font-weight:600;
}

.green{
    color:var(--green);
    font-weight:600;
}

.stock{
    display:inline-flex;
    padding:5px 8px;
    border-radius:6px;
    background:var(--green-bg);
    color:var(--green);
    font-size:9px;
    font-weight:600;
}

.stock.low{
    background:var(--yellow-bg);
    color:var(--yellow);
}

.stock.out{
    background:var(--red-bg);
    color:var(--red);
}

.sell-buttons{
    display:flex;
    gap:4px;
}

.sell-buttons button{
    border:1px solid #dfe2e6;
    background:#fff;
    padding:6px 8px;
    border-radius:7px;
    font-size:9px;
    font-weight:600;
}

.sell-buttons button:hover{
    background:#f4f5f6;
}

.sell-buttons button:disabled{
    opacity:.4;
    cursor:not-allowed;
}

.actions{
    display:flex;
    gap:5px;
}

.action-btn{
    width:29px;
    height:29px;
    border:0;
    border-radius:7px;
    background:#f1f2f4;
    font-size:12px;
}

/* EMPTY */

.empty{
    display:none;
    padding:55px 20px;
    text-align:center;
}

.empty-icon{
    font-size:28px;
    margin-bottom:10px;
}

.empty h3{
    font-size:13px;
    margin-bottom:5px;
}

.empty p{
    font-size:11px;
    color:var(--muted);
}

/* HISTORY */

.history{
    margin-top:22px;
}

.history-header{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:16px 18px;
    border-bottom:1px solid var(--border);
}

.history-header h3{
    font-size:13px;
}

.clear-history{
    border:0;
    background:none;
    color:var(--red);
    font-size:10px;
    font-weight:600;
}

.history-list{
    max-height:370px;
    overflow-y:auto;
}

.history-item{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:13px 18px;
    border-bottom:1px solid #f0f1f3;
}

.history-item:last-child{
    border-bottom:0;
}

.history-left{
    display:flex;
    align-items:center;
    gap:10px;
}

.history-icon{
    width:31px;
    height:31px;
    border-radius:8px;
    background:var(--green-bg);
    color:var(--green);
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:12px;
}

.history-name{
    font-size:11px;
    font-weight:600;
}

.history-time{
    color:var(--muted);
    font-size:9px;
    margin-top:3px;
}

.history-right{
    text-align:right;
}

.history-qty{
    font-size:11px;
    font-weight:600;
}

.history-money{
    color:var(--green);
    font-size:10px;
    margin-top:3px;
}

.no-history{
    padding:35px 20px;
    text-align:center;
    color:var(--muted);
    font-size:11px;
}

/* MODALS */

.modal-bg{
    position:fixed;
    inset:0;
    background:rgba(15,17,20,.45);
    backdrop-filter:blur(4px);
    display:none;
    align-items:center;
    justify-content:center;
    padding:18px;
    z-index:100;
}

.modal-bg.show{
    display:flex;
}

.modal{
    width:100%;
    max-width:440px;
    background:#fff;
    border-radius:18px;
    padding:22px;
    box-shadow:0 20px 60px rgba(0,0,0,.18);
}

.modal-head{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:20px;
}

.modal-head h2{
    font-size:16px;
}

.close{
    width:31px;
    height:31px;
    border:0;
    background:#f1f2f4;
    border-radius:8px;
    font-size:17px;
}

.form-group{
    margin-bottom:13px;
}

.form-group label{
    display:block;
    font-size:10px;
    font-weight:600;
    margin-bottom:6px;
}

.form-input{
    width:100%;
    height:42px;
    border:1px solid var(--border);
    border-radius:9px;
    outline:none;
    padding:0 11px;
    font-size:12px;
    background:#fff;
}

.form-row{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:10px;
}

.modal-actions{
    display:flex;
    gap:8px;
    margin-top:19px;
}

.modal-actions button{
    flex:1;
    height:42px;
    border-radius:9px;
    font-size:11px;
    font-weight:600;
}

.cancel{
    background:#fff;
    border:1px solid var(--border);
}

.confirm{
    background:var(--dark);
    color:#fff;
    border:0;
}

/* SALE CONFIRMATION */

.sale-info{
    text-align:center;
    padding:5px 0 12px;
}

.sale-product{
    font-size:17px;
    font-weight:700;
    margin-bottom:5px;
}

.sale-question{
    color:var(--muted);
    font-size:11px;
}

.sale-quantity{
    margin:17px 0;
    background:#f6f7f8;
    border-radius:11px;
    padding:15px;
    text-align:center;
}

.sale-quantity strong{
    font-size:25px;
}

.sale-details{
    display:flex;
    justify-content:space-between;
    font-size:11px;
    padding:0 4px;
}

.sale-details span:last-child{
    font-weight:600;
}

/* MOBILE */

@media(max-width:800px){

    .container{
        padding:22px 14px 45px;
    }

    .header-inner{
        padding:14px;
    }

    .summary{
        grid-template-columns:1fr 1fr;
        gap:9px;
    }

    .summary-card{
        padding:14px;
        border-radius:13px;
    }

    .summary-value{
        font-size:16px;
    }

    .summary-label{
        font-size:10px;
    }

    .toolbar{
        flex-direction:column;
    }

    .add-btn{
        width:100%;
    }

    .panel{
        border-radius:14px;
    }

}

@media(max-width:480px){

    .welcome h2{
        font-size:22px;
    }

    .welcome p{
        font-size:11px;
    }

    .form-row{
        grid-template-columns:1fr;
    }

    .modal{
        padding:19px;
    }

}
</style>
</head>


<body>

<header class="header">

    <div class="header-inner">

        <div class="logo">

            <div class="logo-icon">▦</div>

            <div>
                <div class="logo-title">Stockly</div>
                <div class="logo-sub">Stok & Penjualan</div>
            </div>

        </div>

    </div>

</header>


<main class="container">

    <section class="welcome">

        <h2>Ringkasan toko</h2>

        <p>
            Kelola stok, penjualan, dan keuntungan dengan mudah.
        </p>

    </section>


    <!-- SUMMARY -->

    <section class="summary">

        <div class="summary-card">

            <div class="summary-top">
                <span class="summary-label">Total Produk</span>
                <span class="summary-icon">▦</span>
            </div>

            <div class="summary-value" id="totalProduk">
                0
            </div>

        </div>


        <div class="summary-card">

            <div class="summary-top">
                <span class="summary-label">Stok Tersisa</span>
                <span class="summary-icon">📦</span>
            </div>

            <div class="summary-value" id="totalStok">
                0
            </div>

        </div>


        <div class="summary-card">

            <div class="summary-top">
                <span class="summary-label">Omzet</span>
                <span class="summary-icon">Rp</span>
            </div>

            <div class="summary-value" id="totalOmzet">
                Rp0
            </div>

        </div>


        <div class="summary-card">

            <div class="summary-top">
                <span class="summary-label">Keuntungan</span>
                <span class="summary-icon">↗</span>
            </div>

            <div class="summary-value" id="totalUntung">
                Rp0
            </div>

        </div>

    </section>


    <!-- SEARCH -->

    <div class="toolbar">

        <div class="search">

            <span class="search-icon">⌕</span>

            <input
                id="search"
                type="text"
                placeholder="Cari produk..."
                oninput="render()"
            >

        </div>


        <button
            class="add-btn"
            onclick="openProductModal()"
        >
            + Tambah Produk
        </button>

    </div>


    <!-- CATEGORY -->

    <div class="categories">

        <button
            class="cat active"
            onclick="setCategory('Semua',this)"
        >
            Semua
        </button>

        <button
            class="cat"
            onclick="setCategory('Chiki',this)"
        >
            Chiki
        </button>

        <button
            class="cat"
            onclick="setCategory('Minuman',this)"
        >
            Minuman
        </button>

        <button
            class="cat"
            onclick="setCategory('Rokok',this)"
        >
            Rokok
        </button>

        <button
            class="cat"
            onclick="setCategory('Lainnya',this)"
        >
            Lainnya
        </button>

    </div>


    <!-- PRODUCT TABLE -->

    <section class="panel">

        <div class="panel-header">

            <span class="panel-title">
                Daftar Produk
            </span>

            <span
                class="panel-count"
                id="productCount"
            >
                0 produk
            </span>

        </div>


        <div class="table-wrap">

            <table>

                <thead>

                    <tr>

                        <th>Produk</th>

                        <th>Modal</th>

                        <th>Harga Jual</th>

                        <th>Stok</th>

                        <th>Penjualan</th>

                        <th>Keuntungan</th>

                        <th>Aksi</th>

                    </tr>

                </thead>


                <tbody id="productList"></tbody>

            </table>

        </div>


        <div class="empty" id="empty">

            <div class="empty-icon">
                📦
            </div>

            <h3>
                Belum ada produk
            </h3>

            <p>
                Tambahkan produk untuk mulai mencatat stok.
            </p>

        </div>

    </section>


    <!-- HISTORY -->

    <section class="panel history">

        <div class="history-header">

            <h3>
                Riwayat Penjualan
            </h3>

            <button
                class="clear-history"
                onclick="clearHistory()"
            >
                Hapus Riwayat
            </button>

        </div>


        <div
            class="history-list"
            id="historyList"
        ></div>

    </section>

</main>


<!-- PRODUCT MODAL -->

<div
    class="modal-bg"
    id="productModal"
>

    <div class="modal">

        <div class="modal-head">

            <h2 id="productModalTitle">
                Tambah Produk
            </h2>

            <button
                class="close"
                onclick="closeProductModal()"
            >
                ×
            </button>

        </div>


        <div class="form-group">

            <label>Nama Produk</label>

            <input
                class="form-input"
                id="nama"
                placeholder="Contoh: Power F"
            >

        </div>


        <div class="form-group">

            <label>Kategori</label>

            <select
                class="form-input"
                id="kategori"
            >

                <option value="Chiki">Chiki</option>
                <option value="Minuman">Minuman</option>
                <option value="Rokok">Rokok</option>
                <option value="Lainnya">Lainnya</option>

            </select>

        </div>


        <div class="form-row">

            <div class="form-group">

                <label>Harga Modal</label>

                <input
                    class="form-input"
                    type="number"
                    id="modalHarga"
                    placeholder="800"
                >

            </div>


            <div class="form-group">

                <label>Harga Jual</label>

                <input
                    class="form-input"
                    type="number"
                    id="jualHarga"
                    placeholder="1000"
                >

            </div>

        </div>


        <div class="form-group">

            <label>Jumlah Stok</label>

            <input
                class="form-input"
                type="number"
                id="stok"
                placeholder="50"
            >

        </div>


        <div class="modal-actions">

            <button
                class="cancel"
                onclick="closeProductModal()"
            >
                Batal
            </button>

            <button
                class="confirm"
                onclick="saveProduct()"
            >
                Simpan Produk
            </button>

        </div>

    </div>

</div>


<!-- SALE CONFIRM MODAL -->

<div
    class="modal-bg"
    id="saleModal"
>

    <div class="modal">

        <div class="sale-info">

            <div
                class="sale-product"
                id="saleProductName"
            >
                Power F
            </div>

            <div class="sale-question">
                Konfirmasi barang yang terjual?
            </div>

        </div>


        <div class="sale-quantity">

            <strong id="saleQuantity">
                1
            </strong>

            <div style="font-size:10px;color:#858b95;margin-top:3px">
                barang terjual
            </div>

        </div>


        <div class="sale-details">

            <span>
                Total penjualan
            </span>

            <span id="saleTotal">
                Rp0
            </span>

        </div>


        <div class="sale-details" style="margin-top:9px">

            <span>
                Keuntungan
            </span>

            <span
                id="saleProfit"
                style="color:#168a55"
            >
                Rp0
            </span>

        </div>


        <div class="modal-actions">

            <button
                class="cancel"
                onclick="closeSaleModal()"
            >
                Batal
            </button>

            <button
                class="confirm"
                onclick="confirmSale()"
            >
                ✓ Konfirmasi
            </button>

        </div>

    </div>

</div>


<script>

/* DATA */

let products =
    JSON.parse(
        localStorage.getItem("stockly_products")
    ) || [];

let history =
    JSON.parse(
        localStorage.getItem("stockly_history")
    ) || [];

let currentCategory = "Semua";

let editIndex = -1;

let pendingSale = null;


/* RUPIAH */

function rupiah(value){

    return new Intl.NumberFormat("id-ID",{
        style:"currency",
        currency:"IDR",
        maximumFractionDigits:0
    }).format(value);

}


/* SAVE */

function saveData(){

    localStorage.setItem(
        "stockly_products",
        JSON.stringify(products)
    );

    localStorage.setItem(
        "stockly_history",
        JSON.stringify(history)
    );

}


/* PRODUCT MODAL */

function openProductModal(index=-1){

    editIndex = index;

    document
        .getElementById("productModal")
        .classList.add("show");


    if(index >= 0){

        const p = products[index];

        document.getElementById("productModalTitle")
            .textContent = "Edit Produk";

        document.getElementById("nama")
            .value = p.nama;

        document.getElementById("kategori")
            .value = p.kategori;

        document.getElementById("modalHarga")
            .value = p.modal;

        document.getElementById("jualHarga")
            .value = p.harga;

        document.getElementById("stok")
            .value = p.stok + p.terjual;

    }else{

        document.getElementById("productModalTitle")
            .textContent = "Tambah Produk";

        document.getElementById("nama").value = "";

        document.getElementById("kategori").value = "Chiki";

        document.getElementById("modalHarga").value = "";

        document.getElementById("jualHarga").value = "";

        document.getElementById("stok").value = "";

    }

}


function closeProductModal(){

    document
        .getElementById("productModal")
        .classList.remove("show");

}


/* SAVE PRODUCT */

function saveProduct(){

    const nama =
        document.getElementById("nama")
            .value.trim();

    const kategori =
        document.getElementById("kategori")
            .value;

    const modal =
        Number(
            document.getElementById("modalHarga")
                .value
        );

    const harga =
        Number(
            document.getElementById("jualHarga")
                .value
        );

    const totalStok =
        Number(
            document.getElementById("stok")
                .value
        );


    if(
        !nama ||
        modal <= 0 ||
        harga <= 0 ||
        totalStok < 0
    ){

        alert("Lengkapi data produk terlebih dahulu.");

        return;

    }


    if(editIndex >= 0){

        const terjual =
            products[editIndex].terjual;

        if(totalStok < terjual){

            alert(
                "Jumlah stok tidak boleh lebih kecil dari jumlah yang sudah terjual."
            );

            return;

        }


        products[editIndex] = {

            nama,
            kategori,
            modal,
            harga,

            stok:
                totalStok - terjual,

            terjual

        };

    }else{

        products.push({

            nama,
            kategori,
            modal,
            harga,
            stok:totalStok,
            terjual:0

        });

    }


    saveData();

    closeProductModal();

    render();

}


/* SALE */

function openSale(index, quantity){

    const product = products[index];

    if(product.stok < quantity){

        alert(
            "Stok tidak cukup. Sisa stok: " +
            product.stok
        );

        return;

    }


    pendingSale = {
        index:index,
        quantity:quantity
    };


    document.getElementById("saleProductName")
        .textContent = product.nama;

    document.getElementById("saleQuantity")
        .textContent = quantity;

    document.getElementById("saleTotal")
        .textContent =
        rupiah(product.harga * quantity);

    document.getElementById("saleProfit")
        .textContent =
        rupiah(
            (product.harga - product.modal)
            * quantity
        );


    document
        .getElementById("saleModal")
        .classList.add("show");

}


function closeSaleModal(){

    document
        .getElementById("saleModal")
        .classList.remove("show");

    pendingSale = null;

}


/* CONFIRM SALE */

function confirmSale(){

    if(!pendingSale) return;


    const product =
        products[pendingSale.index];

    const quantity =
        pendingSale.quantity;


    if(product.stok < quantity){

        alert("Stok sudah tidak mencukupi.");

        closeSaleModal();

        return;

    }


    /* UPDATE STOCK */

    product.stok -= quantity;

    product.terjual += quantity;


    /* HISTORY */

    history.unshift({

        nama:product.nama,

        kategori:product.kategori,

        quantity:quantity,

        harga:product.harga,

        modal:product.modal,

        total:
            product.harga * quantity,

        profit:
            (product.harga - product.modal)
            * quantity,

        time:
            new Date().toLocaleString(
                "id-ID",
                {
                    day:"2-digit",
                    month:"short",
                    year:"numeric",
                    hour:"2-digit",
                    minute:"2-digit"
                }
            )

    });


    saveData();

    closeSaleModal();

    render();

}


/* DELETE PRODUCT */

function deleteProduct(index){

    if(
        confirm(
            "Hapus " +
            products[index].nama +
            "?"
        )
    ){

        products.splice(index,1);

        saveData();

        render();

    }

}


/* CATEGORY */

function setCategory(category, button){

    currentCategory = category;

    document
        .querySelectorAll(".cat")
        .forEach(
            b => b.classList.remove("active")
        );

    button.classList.add("active");

    render();

}


/* RENDER PRODUCTS */

function render(){

    const list =
        document.getElementById("productList");

    const search =
        document.getElementById("search")
            .value.toLowerCase();


    list.innerHTML = "";


    const filtered =
        products.filter(p => {

            const categoryMatch =
                currentCategory === "Semua" ||
                p.kategori === currentCategory;

            const searchMatch =
                p.nama
                    .toLowerCase()
                    .includes(search);

            return categoryMatch && searchMatch;

        });


    filtered.forEach(product => {

        const index =
            products.indexOf(product);


        const profit =
            (product.harga - product.modal)
            * product.terjual;


        let stockClass = "";

        if(product.stok === 0){

            stockClass = "out";

        }else if(product.stok <= 5){

            stockClass = "low";

        }


        list.innerHTML += `

        <tr>

            <td>

                <div class="product-name">
                    ${escapeHTML(product.nama)}
                </div>

                <div class="product-category">
                    ${escapeHTML(product.kategori)}
                </div>

            </td>


            <td class="price">
                ${rupiah(product.modal)}
            </td>


            <td class="price">
                ${rupiah(product.harga)}
            </td>


            <td>

                <span class="stock ${stockClass}">
                    ${product.stok}
                </span>

            </td>


            <td>

                <div class="sell-buttons">

                    <button
                        onclick="openSale(${index},1)"
                        ${product.stok < 1 ? "disabled" : ""}
                    >
                        +1
                    </button>

                    <button
                        onclick="openSale(${index},2)"
                        ${product.stok < 2 ? "disabled" : ""}
                    >
                        +2
                    </button>

                    <button
                        onclick="openSale(${index},5)"
                        ${product.stok < 5 ? "disabled" : ""}
                    >
                        +5
                    </button>

                </div>

                <div
                    style="
                    margin-top:4px;
                    color:#999;
                    font-size:9px;
                    "
                >
                    ${product.terjual} terjual
                </div>

            </td>


            <td class="green">
                ${rupiah(profit)}
            </td>


            <td>

                <div class="actions">

                    <button
                        class="action-btn"
                        onclick="openProductModal(${index})"
                        title="Edit"
                    >
                        ✎
                    </button>

                    <button
                        class="action-btn"
                        onclick="deleteProduct(${index})"
                        title="Hapus"
                    >
                        ×
                    </button>

                </div>

            </td>

        </tr>

        `;

    });


    document.getElementById("empty")
        .style.display =
            filtered.length === 0
            ? "block"
            : "none";


    document.getElementById("productCount")
        .textContent =
            filtered.length + " produk";


    updateSummary();

    renderHistory();

}


/* SUMMARY */

function updateSummary(){

    let totalProduk = products.length;

    let totalStok = 0;

    let omzet = 0;

    let untung = 0;


    products.forEach(p => {

        totalStok += p.stok;

        omzet +=
            p.harga * p.terjual;

        untung +=
            (p.harga - p.modal)
            * p.terjual;

    });


    document.getElementById("totalProduk")
        .textContent = totalProduk;

    document.getElementById("totalStok")
        .textContent = totalStok;

    document.getElementById("totalOmzet")
        .textContent = rupiah(omzet);

    document.getElementById("totalUntung")
        .textContent = rupiah(untung);

}


/* HISTORY */

function renderHistory(){

    const list =
        document.getElementById("historyList");


    if(history.length === 0){

        list.innerHTML = `
            <div class="no-history">
                Belum ada transaksi penjualan.
            </div>
        `;

        return;

    }


    list.innerHTML = "";


    history.forEach(item => {

        list.innerHTML += `

        <div class="history-item">

            <div class="history-left">

                <div class="history-icon">
                    ✓
                </div>

                <div>

                    <div class="history-name">
                        ${escapeHTML(item.nama)}
                    </div>

                    <div class="history-time">
                        ${item.time}
                    </div>

                </div>

            </div>


            <div class="history-right">

                <div class="history-qty">
                    +${item.quantity} pcs
                </div>

                <div class="history-money">
                    ${rupiah(item.total)}
                </div>

            </div>

        </div>

        `;

    });

}


/* CLEAR HISTORY */

function clearHistory(){

    if(history.length === 0){

        alert("Riwayat masih kosong.");

        return;

    }


    if(
        confirm(
            "Hapus semua riwayat penjualan?"
        )
    ){

        history = [];

        saveData();

        renderHistory();

    }

}


/* ESCAPE HTML */

function escapeHTML(text){

    return String(text)
        .replaceAll("&","&amp;")
        .replaceAll("<","&lt;")
        .replaceAll(">","&gt;")
        .replaceAll('"',"&quot;")
        .replaceAll("'","&#039;");

}


/* CLOSE MODAL WHEN CLICK OUTSIDE */

document
    .getElementById("productModal")
    .addEventListener(
        "click",
        function(e){

            if(e.target === this){

                closeProductModal();

            }

        }
    );


document
    .getElementById("saleModal")
    .addEventListener(
        "click",
        function(e){

            if(e.target === this){

                closeSaleModal();

            }

        }
    );


/* START */

render();

</script>

</body>
</html>
