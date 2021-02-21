const sound = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *SOUND MENU* ]----- 🔰
Haiii,  ${pushname} 👋
  User Bot =  ${sender.split("@")[0]}
  
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ NAMA : ${pushname}
┃│➸ LEVEL : ${getLevelingLevel(sender)}
┃│➸ USER ${botName} : ${_registered.length}
┃╰───────────────────
┃╭───────────────────
┃│➸ *${prefix}iri*
┃│➸ *${prefix}pale*
┃│➸ *${prefix}sound*
┃│➸ *${prefix}sound1*
┃│➸ *${prefix}sound2*
┃│➸ *${prefix}sound3*
┃│➸ *${prefix}sound4*
┃│➸ *${prefix}sound5*
┃│➸ *${prefix}sound6*
┃│➸ *${prefix}sound7*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
Jika Anda Ingin Request Fiture Baru Untuk Bot Ini,
Silahkan Ketik ${prefix}Request  _Text Anda_`
}
exports.sound = sound