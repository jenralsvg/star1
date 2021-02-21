const download = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *DOWNLOAD MENU* ]----- 🔰
Hallo, ${pushname} 👋
Semoga harimu Menyenangkan User, ${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ NAMA : ${pushname}
┃│➸ LEVEL : ${getLevelingLevel(sender)}
┃│➸ USER ${botName} : ${_registered.length}
┃╰───────────────────
┃╭───────────────────
┃│➸ *${prefix}Play*
┃│➸ *${prefix}Lirik*
┃│➸ *${prefix}Joox
┃│➸ *${prefix}Yutubdl*
┃│➸ *${prefix}Hidetag5*
┃│➸ *${prefix}Hidetag10*
┃│➸ *${prefix}Moddroid*
┃│➸ *${prefix}Happymod*
┃│➸ *${prefix}Tiktod*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
Jika Anda Ingin Request Fiture Baru Untuk Bot Ini,
Silahkan Ketik ${prefix}Request  _Text Anda_`
}
exports.download = download