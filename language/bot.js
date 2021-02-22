const bot = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
exports.wait = () => {
	return`[ WAIT ] Sedang di proses...\n*Loading ██████━━━]67%*`
}

exports.succes = () => {
	return`*「 Succes 」*`
}

exports.lvlon = () => {
	return`*「❗」 ENABLE LEVELING*`
}

exports.lvloff = () => {
	return`*「❗」 DISABLE LEVELING*`
}

exports.lvlnul = () => {
	return`💤 *Your Level Is Still Empty*\n[❗] _Levelmu Masih Kosong_`
}

exports.lvlnoon = () => {
	return`💤 *The Level In The Group Has Not Been Activated*\n[❗] _Level Dalam Group Belum Di Aktifkan_`
}

exports.noregis = () => {
	return`*[ ANDA BELUM TERDAFTAR ]*\n_Silahkan Daftar Terlebih Dahulu_\n\n*Cara Daftar ${prefix}Daftar Nama|Umur*\n*Contoh ${prefix}Daftar Ilham|17*`
}

exports.baned = () => {
	return`*[❗] Anda Saat Ini Tidak Bisa Mengendalikan Bot, Karena Telah Terbaned Silahkan Hub Owner Untuk Memakai Bot Kembali*`
}

exports.rediregis = () => {
	return`*「 TERDAFTAR 」*\n*_Kamu Sudah Terdaftar Boss_* >_<`
}

exports.stikga = () => {
	return`*「 GAGAL 」 Coba Ulangi Beberapa Saat Lagi...*`
}

exports.linkga = () => {
	return`*「❗」 Maaf Link Yang Anda Kirim Tidak Valid*`
}

exports.groupo = () => {
	return`*「❗」 GROUP ONLY*`
}

exports.ownerb = () => {
	return`*「❗」 OWNER BOT ONLY*`
}

exports.ownerg = () => {
	return`*「❗」 OWNER GROUP ONLY*`
}

exports.admin = () => {
	return`*「❗」 ADMIN GROUP ONLY*`
}

exports.badmin = () => {
	return`💤 *BOT HARUS JADI ADMIN*`
}

exports.nsfwoff = () => {
	return`*「❗」 NSFW GAK AKTIF*`
}

exports.bug = () => {
	return`*_Masalah Telah Di Laporkan Ke Owner BOT, Laporan Palsu/Main2 Tidak Akan Ditanggapi_*`
}

exports.wrongf = () => {
	return`💤 *Teks nya mana Boss?*`
}

exports.clears = () => {
	return`🚮 *Clear All Success*`
}

exports.pc = () => {
	return`*「❗」 REGISTRASI*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender, botName) => {
	return`*「 REGISTRASI BERHASIL 」*\nUntuk User Info :\n\n*➸ Nama : ${namaUser}*\n*➸ Nomor : wa.me/${sender.split("@")[0]}*\n*➸ Umur : ${umurUser}*\n*➸ Waktu Pendaftaran : ${time}*\n\n*「 SN 」: ${serialUser}*\n_NOTE : Pergunakan Bot Dengan Cinta_ 🍁`
}

exports.cmdnf = (prefix, command) => {
	return`Command *${prefix}${command}* Tidak Di Temukan\nCoba tulis *${prefix}Menu*`
}

exports.owneresce = (pushname) => {
	return`*Maaf Tapi ${pushname} Bukan Owner Script*`
}
exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 𝐒𝐄𝐋𝐀𝐌𝐀𝐓 」*
➸ *Nama* : _${pushname}_
➸ *Nomor* : _wa.me/${sender.split("@")[0]}_
➸ *Xp* : _${getLevelingXp(sender)}_
➸ *Level* : _${getLevel} ➸ ${getLevelingLevel(sender)}_
`}
exports.satukos = () => {
	return`💤 *Add Parameters [ 1 ] Enable Or [ 0 ] Disable*\n${prefix}${command} [❗] _Tambah Parameter [ 1 ] Aktifkan atau [ 0 ] Nonaktifkan`
}
