const gabut = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *HEPPY MENU* ]----- 🔰
Haiii,  ${pushname} 👋
  User Bot =  ${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ NAMA : ${pushname}
┃│➸ LEVEL : ${getLevelingLevel(sender)}
┃│➸ USER ${botName} : ${_registered.length}
┃╰───────────────────
┃╭───────────────────
┃│➸ *${prefix}Apakah*
┃│➸ *${prefix}Bisakah*
┃│➸ *${prefix}Kapan*
┃│➸ *${prefix}Hobby*
┃│➸ *${prefix}Rate*
┃│➸ *${prefix}Seberapagay*
┃│➸ *${prefix}Truth*
┃│➸ *${prefix}Dare*
┃│➸ *${prefix}Tebakin*
┃│➸ *${prefix}Caklontong*
┃│➸ *${prefix}Timer*
┃│➸ *${prefix}Simi*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
Jika Anda Ingin Request Fiture Baru Untuk Bot Ini,
Silahkan Ketik ${prefix}Request  _Text Anda_`
}
exports.gabut = gabut
