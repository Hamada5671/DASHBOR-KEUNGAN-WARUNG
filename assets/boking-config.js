/*
 * PENGATURAN HALAMAN BOKING PUBLIK (boking.html)
 * File ini satu-satunya yang perlu diubah kalau nomor WA, harga, atau daftar PC ganti.
 *
 * wa       : nomor WhatsApp yang dipakai staff. Format 628xxxxxxxxxx,
 *            tanpa tanda +, tanpa 0 di depan, tanpa spasi atau strip.
 *            CONTOH: "6281234567890"
 *            Kalau masih kosong, tombol kirim di halaman boking otomatis dikunci
 *            biar customer nggak kirim ke nomor yang salah.
 * harga    : nominal per jam, angka saja tanpa titik.
 * pc       : daftar nama PC tiap klas, nampil jadi tombol di halaman boking.
 */
window.ARENA_BOKING = {
    nama: "Arena 27 Net",
    wa: "",
    alamat: "",

    jam: { buka: 10, tutup: 22 },

    kelas: {
        REGULER: { harga: 4000, pc: ["REG 01", "REG 02", "REG 03", "REG 04", "REG 05", "REG 06"] },
        VIP:     { harga: 5000, pc: ["VIP 01", "VIP 02", "VIP 03", "VIP 04"] },
        VVIP:    { harga: 6000, pc: ["VVIP 01", "VVIP 02"] }
    },

    durasi: [1, 2, 3, 4, 6, 8, 12],

    /* pertanyaan yang bisa diklik langsung di card chat */
    topik: [
        "PC-nya masih kosong?",
        "Bisa boking buat berapa orang sekaligus?",
        "Ada promo paket malam?",
        "Cara bayarnya bisa QRIS nggak?"
    ]
};
