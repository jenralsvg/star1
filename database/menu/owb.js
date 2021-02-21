const owb = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *OWNER MENU* ]----- 🔰
Haiii,  ${pushname} 👋
  User Bot =  ${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ NAMA : ${pushname}
┃│➸ LEVEL : ${getLevelingLevel(sender)}
┃│➸ USER ${botName} : ${_registered.length}
┃╰───────────────────
┃╭───────────────────
┃│➸ *${prefix}Bc*
┃│➸ *${prefix}Bcgc*
┃│➸ *${prefix}Clearall*
┃│➸ *${prefix}Block*
┃│➸ *${prefix}Unblock*
┃│➸ *${prefix}Clone*
┃│➸ *${prefix}Setppbot*
┃│➸ *${prefix}Setreply*
┃│➸ *${prefix}Setprefix*
┃│➸ *${prefix}Ban*
┃│➸ *${prefix}Unban*
┃│➸ *${prefix}Event* 「1/0」
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
Jika Anda Ingin Request Fiture Baru Untuk Bot Ini,
Silahkan Ketik ${prefix}Request  _Text Anda_`
}
exports.owb = owb