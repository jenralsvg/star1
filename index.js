/*
   ]=====> Muhamad Ilham <=====[
]=====> Youtubeku KilL4Life <=====[ 
    ]=====> 085757196481 <=====[
*/
// KALO INGIN DI UBAH
// UBAH AJA YA YANG PENTING HEPPY
const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs") 
const crypto = require('crypto')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const { color, bgcolor } = require('./lib/color')
const { donasi } = require('./lib/donasi')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { cara } = require('./src/cara')
const { bot } = require('./language/index.js')
const { exec } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const tiktod = require('tiktok-scraper')
const speed = require('performance-now')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const cd = 4.32e+7
const { removeBackgroundFromImageFile } = require('remove.bg')
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:𝐄𝐧𝐳𝐞𝐭 𝐁𝐎𝐓\n' // GANTI NAMA MU
            + 'ORG:Owner Bot;\n'
            + 'TEL;type=CELL;type=VOICE;waid=6281253534285:+62 812-5353-4285\n' // GANTI NOMOR MU
            + 'END:VCARD'
// MAU GANTI DI BAWAH PUN GANTILAH, INTINYA JANGAN SAMPAI EROR
const ngonsol = JSON.parse(fs.readFileSync('./settings/Ilham.json'))
const {
    botName,
    ownerName,
    BarBarKey,
    XteamKey,
    VhtearKey,
    TobzKey,
    WAWVf9pfqjBod0gZCF,
    itsmeiky633,
    ownerNumber,
    botPrefix,
    CeerTod
} = ngonsol
// POWERED BY MOHAMAD ILHAM
prefix = botPrefix
blocked = []   
cr = CeerTod

// LOAD JSON
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/user/registered.json'))
const welkom = JSON.parse(fs.readFileSync('./database/group/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/group/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./database/group/simi.json'))
const event = JSON.parse(fs.readFileSync('./database/group/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const ban = JSON.parse(fs.readFileSync('./database/user/banned.json'))
const premium = JSON.parse(fs.readFileSync('./database/user/premium.json'))
const antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
/*       
]=====> LOAD MENU <=====[
*/
const { help } = require('./lib/help')
const { simple } = require('./database/menu/simple')
const { gabut } = require('./database/menu/gabut')
const { groupm } = require('./database/menu/group')
const { download } = require('./database/menu/download')
const { random } = require('./database/menu/random')
const { other } = require('./database/menu/other')
const { owb } = require('./database/menu/owb')
const { maker } = require('./database/menu/maker')
const { sound } = require('./database/menu/sound')
const { muslim } = require('./database/menu/islam')
/*
]=====> FUNCTION <=====[
*/
       const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
              
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
/*
]=====> SCAN QR <=====[
*/

const enzet = new WAConnection()
enzet.logger.level = 'warn'
console.log(banner.string)
   enzet.on('qr', qr => {
   qrcode.generate(qr, { small: true })
	console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
})

	enzet.on('credentials-updated', () => {
		fs.writeFileSync('./Ilham.json', JSON.stringify(enzet.base64EncodedAuthInfo(), null, '\t'))
		info('2', 'Login Info Updated...')
	})
	fs.existsSync('./Ilham.json') && enzet.loadAuthInfo('./Ilham.json')
	enzet.on('connecting', () => {
		start('2', 'JRL Enzet Connecting...')
	})
	enzet.on('open', () => {
		success('2', 'JRL Enzet Connecting')
	})
	enzet.connect({timeoutMs: 30*1000})

enzet.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await enzet.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await enzet.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Selamat Bergabung Di Grup\n*${mdata.subject}*\nHai@${num.split('@')[0]}\nKetik ${prefix}Help Untuk Menampilkan Fiture\n *Dari Bot JRL Enzet*\n\n _Terimah Kasih Telah Join_`
				let buff = await getBuffer(ppimg)
				enzet.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			work = fs.readFileSync('./assets/bergabung.opus');
            enzet.sendMessage(from, work, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
               } else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await enzet.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Selamat Tinggal Kawan\n @${num.split('@')[0]}\n\n  *Terimah Kasih Telah Join*`
				let buff = await getBuffer(ppimg)
				enzet.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	enzet.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	enzet.on('message-new', async (mek) => {
		try {
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
            body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
            var tas = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const mesejAnti = tas.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const botNumber = enzet.user.jid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = enzet.contacts[sender] != undefined ? enzet.contacts[sender].vname || enzet.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await enzet.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
            const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            
/*
]=====> Mohamad Ilham <=====[
*/
            const isEventon = isGroup ? event.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            const isBanned = ban.includes(sender)
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isImage = type === 'imageMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				enzet.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				enzet.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? enzet.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : enzet.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    enzet.sendMessage(from, teks, image, {quoted:mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			enzet.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		    const sendPtt = (teks) => {
		    enzet.sendMessage(from, audio, mp3, {quoted:mek})
		    }
		
// ANTI LINK GRUP
                if (mesejAnti.includes("://chat.whatsapp.com/")){
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply('Atasan grup mah bebas yakan:v')
		        enzet.updatePresence(from, Presence.composing)
		        if (mesejAnti.includes("#izinbos")) return reply("Iya Boss jangan spam ya")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Boss ${sender.split("@")[0]} Grup ini anti link Hihi`)
		        setTimeout( () => {
			        enzet.groupRemove(from, [kic]).catch((e)=>{reply(`[ ❗] Bot Harus Menjadi Admin`)})
		        }, 3000)
		        setTimeout( () => {
			        enzet.updatePresence(from, Presence.composing)
			        reply("Hedsot :v")
		        }, 2000)
		        setTimeout( () => {
			        enzet.updatePresence(from, Presence.composing)
			        reply("Bismillah")
		        }, 1000)
		        setTimeout( () => {
			        enzet.updatePresence(from, Presence.composing)
			        reply("Ready?")
		        }, 0)
	        }               
			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))


switch(command) {
                case 'help':
				case 'menu':
				if (!isRegistered) return reply(`*[ ANDA BELUM TERDAFTAR ]*\n_Silahkan Daftar Terlebih Dahulu_\n\n*Cara Daftar ${prefix}Daftar Nama|Umur*\n*Contoh ${prefix}Daftar Ilham|17*`)
				const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
					await costum(help(pushname, prefix, botName, ownerName, reqXp, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break
				case 'donasi':
				case 'donate':
					enzet.sendMessage(from, donasi(pushname, prefix, botName, ownerName), text)
					break
				case 'panduan':
				if (!isRegistered) return reply(`*[ ANDA BELUM TERDAFTAR ]*\n_Silahkan Daftar Terlebih Dahulu_\n\n*Cara Daftar ${prefix}Daftar Nama|Umur*\n*Contoh ${prefix}Daftar Ilham|17*`)
					enzet.sendMessage(from, cara(pushname, prefix, botName, ownerName), text)
					break										
                case 'heppymenu':
				if (!isRegistered) return reply(`*[ ANDA BELUM TERDAFTAR ]*\n_Silahkan Daftar Terlebih Dahulu_\n\n*Cara Daftar ${prefix}Daftar Nama|Umur*\n*Contoh ${prefix}Daftar Ilham|17*`)
					await costum(gabut(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break
                case 'groupmenu':
                if (!isRegistered) return reply(`*[ ANDA BELUM TERDAFTAR ]*\n_Silahkan Daftar Terlebih Dahulu_\n\n*Cara Daftar ${prefix}Daftar Nama|Umur*\n*Contoh ${prefix}Daftar Ilham|17*`)
				if (!isGroup) return reply('*[] Perintah ini hanya bisa di gunakan dalam group!*')			
					await costum(groupm(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break
                case 'downloadmenu':
				if (!isRegistered) return reply(`*[ ANDA BELUM TERDAFTAR ]*\n_Silahkan Daftar Terlebih Dahulu_\n\n*Cara Daftar ${prefix}Daftar Nama|Umur*\n*Contoh ${prefix}Daftar Ilham|17*`)
					await costum(download(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break
                case 'randommenu':
			if (!isRegistered) return reply(`*[ ANDA BELUM TERDAFTAR ]*\n_Silahkan Daftar Terlebih Dahulu_\n\n*Cara Daftar ${prefix}Daftar Nama|Umur*\n*Contoh ${prefix}Daftar Ilham|17*`)
					await costum(random(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break
                case 'makermenu':
				if (!isRegistered) return reply(`*[ ANDA BELUM TERDAFTAR ]*\n_Silahkan Daftar Terlebih Dahulu_\n\n*Cara Daftar ${prefix}Daftar Nama|Umur\n*Contoh ${prefix}Daftar Ilham|17*`)
					await costum(maker(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break
                case 'othermenu':
				if (!isRegistered) return reply(`*[ ANDA BELUM TERDAFTAR ]*\n_Silahkan Daftar Terlebih Dahulu_\n\n*Cara Daftar ${prefix}Daftar Nama|Umur*\n*Contoh ${prefix}Daftar Ilham|17*`)
					await costum(other(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break
                case 'soundmenu':
				if (!isRegistered) return reply(`*[ ANDA BELUM TERDAFTAR ]*\n_Silahkan Daftar Terlebih Dahulu_\n\n*Cara Daftar ${prefix}Daftar Nama|Umur*\n*Contoh ${prefix}Daftar Ilham|17*`)
					await costum(sound(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break
                case 'islammenu':
				if (!isRegistered) return reply(`*[ ANDA BELUM TERDAFTAR ]*\n_Silahkan Daftar Terlebih Dahulu_\n\n*Cara Daftar ${prefix}Daftar Nama|Umur*\n*Contoh ${prefix}Daftar Ilham|17*`)
					await costum(muslim(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break																			
                case 'developermenu':	
						if (!isRegistered) return  reply(`*[ ANDA BELUM TERDAFTAR ]*\n_Silahkan Daftar Terlebih Dahulu_\n\n*Cara Daftar ${prefix}Daftar Nama|Umur*\n*Contoh ${prefix}Daftar Ilham|17*`)
					await costum(owb(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break		
/*
]=====> ISLAM MENU <=====[
*/
						case 'quran':     
	anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {method: 'get'})
quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`
	   enzet.sendMessage(from, quran, text, {quoted: mek})
			 break
			case 'jadwalsholat':
					case 'jsholat':     
					if (args.length < 1) return reply('Masukan nama daerah!!')
					sholat = body.slice(9)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/jadwalshalat?q=${sholat}`, {method: 'get'})
					reply(mess.wait)
					if (anu.error) return reply('[ ! ] Maaf, Daerah yang anda masukan salah!')
					jsol = `Jadwal sholat di ${sholat} hari ini adalah\n\n* Imsyak :* ${anu.result.imsak} WIB\n* Subuh :* ${anu.result.subuh} WIB\n* Dzuhur :* ${anu.result.dzuhur} WIB\n* Ashar :* ${anu.result.ashar} WIB\n* Maghrib :* ${anu.result.maghrib} WIB\n* Isya :* ${anu.result.isha} WIB\n* Tengah Malam :* ${anu.result.midnight} WIB`
					enzet.sendMessage(from, jsol, text, {quoted: mek})
					break
/*
]=====> HEPPY MENU <=====[
*/
				case 'stiker': 
				case 'sticker':
				case 'stickergif':    
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await enzet.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(`* GAGAL  Coba Ulangi Beberapa Saat Lagi...*`)
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								enzet.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await enzet.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(`[ WAIT ] Sedang di proses...\n*Loading ]67%*`)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`* GAGAL  Coba Ulangi Beberapa Saat Lagi...*`)
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								enzet.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar/video/gif dengan caption \n${prefix}sticker (durasi sticker video 1-9 detik)`)
					}
					break
				case 'nulis1':
				case 'tulis1':
				
				if (args.length < 1) return reply(`Teksnya Mana Boss? Contoh : ${prefix}Nulis1 Kata Ilham Enzet`)
				ilham = body.slice(8)
				reply('⏳ WAIT Boss, Tunggu Sebentar Lagi Loading...')
				buff = await getBuffer(`https://api.xteam.xyz/magernulis2?text=${ilham}&APIKEY=${XteamKey}`)
				enzet.sendMessage(from, buff, image, {quoted: mek, caption: 'Nii'})
				break
				case 'nulis2':
				case 'tulis2':
				
				if (args.length < 1) return reply(`Teksnya Mana Boss? Contoh : ${prefix}Nulis2 Kata Putra Enzet`)
				gabut = body.slice(8)
				reply('⏳ WAIT Boss, Tunggu Sebentar Lagi Loading...')
				buff = await getBuffer(`https://api.xteam.xyz/magernulis3?text=${gabut}&APIKEY=${XteamKey}`)
				enzet.sendMessage(from, buff, image, {quoted: mek, caption: 'Nii'})
				break
				case 'nulis':
				case 'tulis':
					if (args.length < 1) return reply('Yang Mau Di Tulis Apa Boss')
				
					teks = body.slice(7)
					reply('⏳ WAIT Boss, Tunggu Sebentar Lagi Loading...')
					buff = await getBuffer(`https://api.vhtear.com/write?text=${teks}&apikey=${VhtearKey}`)
					enzet.sendMessage(from, buff, image, {quoted: mek })
					break													
				case 'quotes':
				
				quotes = body.slice(1)
				const quo =['Lebih baik mengerti sedikit daripada salah mengerti.','Hampir semua pria memang mampu bertahan menghadapi kesulitan. Namun, jika Anda ingin menguji karakter sejati pria, beri dia kekuasaan.','Bila tekad seseorang kuat dan teguh, Tuhan akan bergabung dalam usahanya.','Penderitaan adalah pelajaran.','Ilmu pengetahuan tanpa agama adalah pincang.','Hidup itu seperti sebuah sepeda, agar tetap seimbang kita harus tetap bergerak.','Perbedaan masa lalu, sekarang, dan masa depan tak lebih dari ilusi yang keras kepala.','Sebuah meja, sebuah kursi, semangkuk buah, dan sebuah biola; apa lagi yang dibutuhkan agar seseorang bisa merasa bahagia?','Belas kasihanlah terhadap sesama, bersikap keraslah terhadap diri sendiri.','Cara paling baik untuk menggerakkan diri Anda ialah memberi tugas kepada diri sendiri.','Kita tidak boleh kehilangan semangat. Semangat adalah stimulan terkuat untuk mencintai, berkreasi dan berkeinginan untuk hidup lebih lama.','Manusia akan bahagia selama ia memilih untuk bahagia.','Saya tidak berharap menjadi segalanya bagi setiap orang. Saya hanya ingin menjadi sesuatu untuk seseorang.','Apabila sempurna akal seseorang, maka sedikit perkataannya.','Bahagialah orang yang dapat menjadi tuan untuk dirinya, menjadi kusir untuk nafsunya dan menjadi kapten untuk bahtera hidupnya.','Sahabat yang jujur lebih besar harganya daripada harta benda yang diwarisi dari nenek moyang.','Yang paling melelahkan dalam hidup adalah menjadi orang yang tidak tulus.','Terbuka untuk Anda, begitulah Tuhan memberi kita jalan untuk berusaha. Jangan pernah berfikir jalan sudah tertutup.','Penundaan adalah kuburan dimana peluang dikuburkan.','Cinta bukan saling menatap mata, namun melihat ke arah yang sama bersama-sama.','Kita adalah apa yang kita kerjakan berulang kali. Dengan demikian, kecemerlangan bukan tbotakan, tetapi kebiasaan.','Jangan pernah mencoba menjadikan putra atau putri Anda menjadi seperti Anda. Diri Anda hanya cukup satu saja.','Jika Anda bisa membuat orang lain tertawa, maka Anda akan mendapatkan semua cinta yang Anda inginkan.','Masalah akan datang cepat atau lambat. Jika masalah datang, sambut dengan sebaik mungkin. Semakin ramah Anda menyapanya, semakin cepat ia pergi.','Kita tak bisa melakukan apapun untuk mengubah masa lalu. Tapi apapun yang kita lakukan bisa mengubah masa depan.','Kesabaran adalah teman dari kebijaksanaan.','Orang-orang kreatif termotivasi oleh keinginan untuk maju, bukan oleh keinginan untuk mengalahkan orang lain.','Dimanapun engkau berada selalulah menjadi yang terbaik dan berikan yang terbaik dari yang bisa kita berikan.','Kebencian seperti halnya cinta, berkobar karena hal-hal kecil.','Anda tidak perlu harus berhasil pada kali pertama.','Satu jam yang intensif, jauh lebih baik dan menguntungkan daripada bertahun-tahun bermimpi dan merenung-renung.','Hal terbaik yang bisa Anda lakukan untuk orang lain bukanlah membagikan kekayaan Anda, tetapi membantu dia untuk memiliki kekayaannya sendiri.','Tidak ada jaminan keberhasilan, tetapi tidak berusaha adalah jaminan kegagalan.','Aku tidak tahu kunci sukses itu apa, tapi kunci menuju kegagalan adalah mencoba membuat semua orang senang.']
				const tes = quo[Math.floor(Math.random() * quo.length)]
				enzet.sendMessage(from, ''+tes+'\n\n_By : JRL Svg._', text, { quoted: mek })
				break				
				case 'ninjalogo':
				var gh = body.slice(11)
				var nin = gh.split("&")[0];
				var ja = gh.split("&")[1];
				if (args.length < 1) return reply(`「❗」 Contoh : ${prefix}ninjalogo JRL&Svg`)
				reply(`[ WAIT ] Sedang di proses...\n*Loading ]67%*`)
				buffer = await getBuffer(`https://api.xteam.xyz/textpro/ninjalogo?text=${nin}&text2=${ja}&APIKEY=${XteamKey}`)
				enzet.sendMessage(from, buffer, image, {quoted: mek})
				break				
		case 'halloweentext':
				if (args.length < 1) return reply(` *Teks nya mana Boss?*`)
				ween = body.slice(15)
				if (ween.length > 10) return reply('Teksnya kepanjangan, maksimal 9 karakter')
				reply(`[ WAIT ] Sedang di proses...\n*Loading ]67%*`)
				buffer = await getBuffer(`https://api.xteam.xyz/textpro/helloweenfire?text=${ween}&APIKEY=${XteamKey}`)
		    enzet.sendMessage(from, buffer, image, {quoted: mek})
		    break
				case 'pornhub':
                  
				
				var gh = body.slice(9)
				var porn = gh.split("|")[0];
				var hub = gh.split("|")[1];
				if (args.length < 1) return reply(`「❗」 Contoh : ${prefix}Pornhub Tobat|Hub`)
				reply(`[ WAIT ] Sedang di proses...\n*Loading ]67%*`)
				buffer = await getBuffer(`https://api.xteam.xyz/textpro/ph?text=${porn}&text2=${hub}&APIKEY=${XteamKey}`)
				enzet.sendMessage(from, buffer, image, {quoted: mek})
				break
case 'gemboktext':
				
				
					var gh = body.slice(12)
					var gem = gh.split("|")[0];
					var bok = gh.split("|")[1];
					if (args.length < 1) return reply(`「❗」 Contoh : ${prefix}Gemboktext 11 01 2021|Ilham Dan Putra`)
					reply(`[ WAIT ] Sedang di proses...\n*Loading ]67%*`)
					buffer = await getBuffer(`https://api.vhtear.com/padlock?text1=${gem}&text2=${bok}&apikey=${VhtearKey}`)
					enzet.sendMessage(from, buffer, image, {quoted: mek})
					break
case 'youtubetext':
					
				
                    if (args.length < 1) return reply('[ !] Kirim Perintah ${prefix}youtubetext Nama|Text\nContoh : ${prefix}youtubetext KilL4Life|Cinta Kalian')
                                         gh = body.slice(9)
                                         usnm = gh.split("|")[0];
                                         cmn = gh.split("|")[1];
                                         var imgbb = require('imgbb-uploader')
                                         ghost = mek.participant
                                         try {
                                         pp = await enzet.getProfilePicture(ghost)
                                         } catch {
                                         pp = 'https://i.ibb.co/64dN6bQ/IMG-20201220-WA0024.jpg'
                                         }
                                         media = await getBuffer(pp)
                                         datae = await imageToBase64(JSON.stringify(pp).replace(/\"/gi, ''))
                                           fs.writeFileSync('getpp.jpeg', datae, 'base64')
                                         res = await imgbb("727e7e43f6cda1dfb85d888522fd4ce1", 'getpp.jpeg')
                                         buffer99 = await getBuffer(`https://some-random-api.ml/canvas/youtube-comment?avatar=${res.display_url}&comment=${cmn}&username=${usnm}`)
                                         enzet.sendMessage(from, buffer99, image, {quoted: mek, caption: `*${usnm}* : ${cmn}`})
                                         break
case 'textpro':
                
				
				if (args.length < 1) return reply(`「❗」 Contoh : ${prefix}TextPro HamTraNzet`)
        teks = body.slice(9)
        reply(`[ WAIT ] Sedang di proses...\n*Loading ]67%*`)
        tek = await getBuffer(`https://mhankbarbar.tech/api/textpro=${teks}`)
        enzet.sendMessage(from, tek, image, {quoted: mek})
        break
case 'glitchtext':
                
				
					var gh = body.slice(12)
					var gli = gh.split("|")[0];
					var tch = gh.split("|")[1];
					if (args.length < 1) return reply(`「❗」 Contoh : ${prefix}Glitchtext Ilham|Putra`)
					reply(`[ WAIT ] Sedang di proses...\n*Loading ]67%*`)
					buffer = await getBuffer(`https://api.xteam.xyz/textpro/glitch?text=${gli}&text2=${tch}&APIKEY=${XteamKey}`)
					enzet.sendMessage(from, buffer, image, {quoted: mek})
					break
case 'gtawasted':
				
				var gh = body.slice(11)
				var wasted = gh.split("|")[0];
				var wasted2 = gh.split("|")[1];
				if (args.length < 1) return reply(`「❗」 Contoh : ${prefix}GtaWasted Ilham|Putra`)
            gta = await getBuffer(`https://naufalhoster.xyz/textmaker/gta_wasted?apikey=WAWVf9pfqjBod0gZCF&text1=${wasted}&text2=${wasted2}`)
                enzet.sendMessage(from, gta, image, {quoted: mek, caption: 'Nii Bos'})
                break
case 'text8bit':
                
				
					var gh = body.slice(10)
					var bit8 = gh.split("|")[0];
					var tobz = gh.split("|")[1];
					var ganz = gh.split("|")[2];
					if (args.length < 1) return reply(`「❗」 Contoh : ${prefix}Text8Bit Random|Enzet|BOT`)
					reply(`[ WAIT ] Sedang di proses...\n*Loading ]67%*`)
          buffer = await getBuffer(`https://tobz-api.herokuapp.com/api/photooxy?theme=${bit8}&text1=${tobz}&text2=${ganz}&apikey=${TobzKey}`)
          enzet.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nii Boss'})
          break
case 'nickepep':                
            hamenzet = await fetchJson(`https://api.zeks.xyz/api/nickepep?apikey=${TobzKey}`)
            reply(hamenzet.result)
case 'katailham':
                ilham = await fetchJson(`https://api-shizuka.herokuapp.com/bacotanilham?apikey=${itsmeiky633}`)
                reply(ilham.result)       
                break
case 'katahacker':                
                hacker = await fetchJson(`https://api-shizuka.herokuapp.com/bacotanhacker?apikey=${itsmeiky633}`)
                reply(hacker.result)
                break
case 'simi':
					if (args.length < 1) return reply(`Mau nanya apa? Contoh : Kau Lagi Dimana Simi`)
					teks = body.slice(5)
					anu = await fetchJson(`https://api.xteam.xyz/simsimi?kata=${teks}&APIKEY=${XteamKey}`)
					reply(anu.jawaban)
					break			
case 'attp':
				if (args.length < 1) return reply(`_Teksnya Mana Boss_\n*Contoh ${prefix}Attp Wajahku Ganteng*`)
				attp = await fetchJson(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
				attp2 = await getBuffer(attp.result)
				if (err) return reply(`* GAGAL  Coba Ulangi Beberapa Saat Lagi...*`)
				enzet.sendMessage(from, attp2, sticker, {quoted: mek})
				break
case 'tts':
				if (args.length < 1) return enzet.sendMessage(from, 'Kode Bahasanya Mana Boss? Contoh : ${prefix}Tts Id Halo Bot', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return enzet.sendMessage(from, `Teksnya mana kak | contoh : ${prefix}tts id ah yamate kudasai`, text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 300
					? reply('Teks nya terlalu panjang Boss')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply(`* GAGAL  Coba Ulangi Beberapa Saat Lagi...*`)
							enzet.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					break
case 'ttp':
				
				
				if (args.length < 1) return reply(`💤 *Yang Mau Dijadiin Text Sticker Apaan Bos*\n[❗] _Please Fill In The Text That You Want To Use As a Sticker_`)
					anu = await fetchJson(`https://st4rz.herokuapp.com/api/ttp?kata=${body.slice(5)}`)
					ilham = await getBuffer(anu.result)
						if (err) return reply(`* GAGAL  Coba Ulangi Beberapa Saat Lagi...*`)
						enzet.sendMessage(from, ilham, sticker, {quoted: mek})
					break
				case 'toimg':
				
				if (!isQuotedSticker) return reply('Reply Atau Tag Sticker Yang Mau Dijadiin Gambar Boss >_<')
					reply(`[ WAIT ] Sedang di proses...\n*Loading ]67%*`)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await enzet.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(`* GAGAL  Coba Ulangi Beberapa Saat Lagi...*`)
						buffer = fs.readFileSync(ran)
						enzet.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih Boss [(^.^)]'})
						fs.unlinkSync(ran)
						})
					break
                case 'speed':
                case 'ping':
                const timestamp = speed();
                const latensi = speed() - timestamp 
                enzet.sendMessage(from, `Speed: ${latensi.toFixed(4)} _ms_`, text, { quoted: mek})
                    break					
                case 'bikinquote':
                
                
                var gh = body.slice(12)
					var quote = gh.split("|")[0];
					var wm = gh.split("|")[1];
					const pref = `Yang Mau Dijadiin Quote Apaan, Boss?\n\nContoh : ${prefix}Bikinquote Hidup Ini Hanya Sementara|Kata HamTranzet`
					if (args.length < 1) return reply(pref)
					reply(`[ WAIT ] Sedang di proses...\n*Loading ]67%*`)
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=random`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					enzet.sendMessage(from, buffer, image, {caption: 'Nih Boss >_<', quoted: mek})
					break
                   case 'stalkig':                 
                   
                     teks = body.slice(9)
                     anu = await fetchJson(`https://api.vhtear.com/igprofile?query=${teks}&apikey=${VhtearKey}`, {method: 'get'})
                     reply('「❗」 Sabar Lagi Stalking IG nya kak')
                     buffer = await getBuffer(anu.result.picture)
                     hasil = `Telah DI Stalk BOS Ku Untuk USERNAME ${teks} \n\n *Username* : _${anu.result.username}_ \n *Nama*    : _${anu.result.full_name}_ \n *Jumlah Follower??﹦?* : _${anu.result.follower}_ \n *Jumlah Following* : _${anu.result.follow}_ \n *Jumlah Post* : _${anu.result.post_count}_ \n *Biografi*    : _${anu.result.biography}`
                    enzet.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
			       break
case 'daftar':
                if (!isRegistered) return  reply(`* TERDAFTAR *\n*_Kamu Sudah Terdaftar Boss_* �_�`)
                if (!q.includes('|')) return  reply(` *Teks nya mana Boss?*`)
                const namaUser = q.substring(0, q.botexOf('|') - 0)
                const umurUser = q.substring(q.lastbotexOf('|') + 1)
                const serialUser = createSerial(20)
                if (namaUser.length >= 30) return reply(`Namanya kepanjangan kak :)`)
                if (umurUser.length >= 3, umurUser.length <= 1) return reply(`Umur Min 10 Tahun Max 40 Tahun`)
                veri = sender
                if (isGroup) {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await reply(bot.registered(namaUser, umurUser, serialUser, time, sender))
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                } else {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await reply(bot.registered(namaUser, umurUser, serialUser, time, sender))
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                }
					break
case 'silktext':
				
				
				if (args.length < 1) return reply(` *Teks nya mana Boss?*`)
				silk = body.slice(10)
				if (silk.length > 7) return reply('Teksnya kepanjangan, maksimal 6 karakter')
				reply(`[ WAIT ] Sedang di proses...\n*Loading ]67%*`)
				buffer = await getBuffer(`https://api.vhtear.com/silktext?text=${silk}&apikey=${VhtearKey}`)
		    enzet.sendMessage(from, buffer, image, {quoted: mek})
		    break
// PREMIUM
				case 'bokep':
				enzet.updatePresence(from, Presence.composing) 
                  
				
				 data = fs.readFileSync('./src/18.js');
                 jsonData = JSON.parse(data);
                 randbotex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randbotex];
                 randBokep = await getBuffer(randKey.image)
                 reply('_NOTE : Di Harapkan Untuk Segera Bertaubat_')
                 randTeks = randKey.teks
                 enzet.sendMessage(from, randBokep, image, {quoted: mek, caption: randTeks})
				break
				case 'mutual':
                  
				
                if (isGroup) return  reply( '*Tidak Bisa Di Group Boss*')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Mencari Pasangan >_<')
                await reply(`wa.me/${anug}`)
                await reply( `Pasangan Ditemukan: 🐊\n*${prefix}next* — Temukan Pasangan Baru`)
            break
case 'next':
                  
				
                if (isGroup) return  reply( 'TIDAK BISA DI GRUP KAK')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Mencari Pasangan >_<')
                await reply(`wa.me/${anug}`)
                await reply( `Pasangan Ditemukan: 🐊\n*${prefix}next* — Temukan Pasangan Baru`)
                break
                case 'blowjob':
                  
				
					ranp = getRandom('.gif')
					hamz = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=${TobzKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${hamz}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(`* GAGAL  Coba Ulangi Beberapa Saat Lagi...*`)
						buffer = fs.readFileSync(hamz)
						enzet.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(hamz)
					})
					break
                case 'nangis':
                  
				
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/cry?apikey=${TobzKey}`, {method: 'get'})
					reply('「❗」 Di Harapkan Untuk Jeda 1 Menit Habis Ini Ya Bos')
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(`* GAGAL  Coba Ulangi Beberapa Saat Lagi...*`)
						buffer = fs.readFileSync(rano)
						enzet.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					case 'cium':
                  
				
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/kiss?apikey=${TobzKey}`, {method: 'get'})
					reply('「❗」 Di Harapkan Untuk Jeda 1 Menit Habis Ini Ya Bos')
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(`* GAGAL  Coba Ulangi Beberapa Saat Lagi...*`)
						buffer = fs.readFileSync(rano)
						enzet.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					case 'peluk':
                  
				
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hug?apikey=${TobzKey}`, {method: 'get'})
					reply('「❗」 Di Harapkan Untuk Jeda 1 Menit Habis Ini Ya Bos')
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(`* GAGAL  Coba Ulangi Beberapa Saat Lagi...*`)
						buffer = fs.readFileSync(rano)
						enzet.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
				case 'yutubdl':
					if (args.length < 1) return reply('Urlnya mana um?')
                  
				
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('URL NYA TIDAK VALID KAK')				
		anu = await fetchJson(`https://api.vhtear.com/ytdl?link=${args[0]}&apikey=${VhtearKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*➸ JUDUL* : ${anu.result.title}\n\n*[WAIT] Proses Dumlu Yakan*`
					thumb = await getBuffer(anu.result.imgUrl)
					enzet.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result.UrlVideo)
					enzet.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
					break
				case 'tiktod':
					if (args.length < 1) return reply('Urlnya mana um?')
                  
				
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('URL NYA TIDAK VALID KAK')
					anu = await fetchJson(`https://api.vhtear.com/tiktokdl?link=${args[0]}&apikey=${VhtearKey}`,)
					reply('[WAIT] Proses Dumlu Yakan')
					buffer = await getBuffer(anu.result.video)
					enzet.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
					break
					case 'hidetag5':
                  
				
					if (!isGroup) return reply(`*[] Perintah ini hanya bisa di gunakan dalam group!*`)			
					var value = body.slice(10)
					var group = await enzet.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					enzet.sendMessage(from, options, text)
	                .then(() => {enzet.sendMessage(from, options, text)})
	                .then(() => {enzet.sendMessage(from, options, text)})
	                .then(() => {enzet.sendMessage(from, options, text)})
	                .then(() => {enzet.sendMessage(from, options, text)})
					break
					case 'hidetag10':
                  
				
					if (!isGroup) return reply(`*[] Perintah ini hanya bisa di gunakan dalam group!*`)			
					var value = body.slice(11)
					var group = await enzet.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					enzet.sendMessage(from, options, text)
	                .then(() => {enzet.sendMessage(from, options, text)})
	                .then(() => {enzet.sendMessage(from, options, text)})
	                .then(() => {enzet.sendMessage(from, options, text)})
	                .then(() => {enzet.sendMessage(from, options, text)})
	                .then(() => {enzet.sendMessage(from, options, text)})
	                .then(() => {enzet.sendMessage(from, options, text)})
	                .then(() => {enzet.sendMessage(from, options, text)})
	                .then(() => {enzet.sendMessage(from, options, text)})
	                .then(() => {enzet.sendMessage(from, options, text)})	                	                
					break
                case 'randomhentong':
                  
				
					gatauda = body.slice(15)
					reply(`[ WAIT ] Sedang di proses...\n*Loading ]67%*`)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=${TobzKey}`)
					buffer = await getBuffer(anu.result)
					enzet.sendMessage(from, buffer, image, {quoted: mek})
					break																													               							
// PREMIUM		    								
/*
]=====> GABUTZ MENU <=====[
*/
				case 'caklontong':
				
				
					anu = await fetchJson(`https://api.vhtear.com/funkuis&apikey=${VhtearKey}`, {method: 'get'})
					caklontong = `*${anu.result.soal}*`
					lontong = `➸ Jawaban : *${anu.result.jawaban}* \n➸ Penjelasan : *${anu.result.desk}*`
					setTimeout( () => {
					enzet.sendMessage(from, lontong, text, {quoted: mek})					
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					enzet.sendMessage(from, '_10 Detik lagi…_', text)
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					enzet.sendMessage(from, '_20 Detik lagi..._', text)
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					enzet.sendMessage(from, '_30 Detik lagi..._', text)
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					enzet.sendMessage(from, caklontong, text, {quoted: mek})
					}, 0) // 1000 = 1s,
					break 
				case 'tebakin':
				
				
					anu = await fetchJson(`https://api.vhtear.com/tebakgambar&apikey=${VhtearKey}`, {method: 'get'})
					ngebuff = await getBuffer(anu.result.soalImg)
					tebak = `➸ Jawaban : *${anu.result.jawaban}*`
					setTimeout( () => {
					enzet.sendMessage(from, tebak, text, {quoted: mek})
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					enzet.sendMessage(from, '_10 Detik lagi..._', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					enzet.sendMessage(from, '_20 Detik lagi..._', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					enzet.sendMessage(from, '_30 Detik lagi..._', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					enzet.sendMessage(from, ngebuff, image, { caption: '_Tebak bro!!! gak bisa jawab donasi ya:v_', quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					break
				case 'bisakah':
				
				
					bisakah = body.slice(1)
					const bisa =['Tentu Saja Bisa! Kamu Adalah Orang Paling Homky','Gak Bisa Ajg Aowkwowk','Hmm Gua Gak Tau Yaa, tanya ama bapakau','Ulangi Tod Gua Ga Paham']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					enzet.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					break
				case 'kapankah':
				case 'kapan':
				
				
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					enzet.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					break
           case 'apakah':
           
           
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Ulangi bro gak paham']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					enzet.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					break
				case 'rate':
				
				
					rate = body.slice(1)
					const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					enzet.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
					break
           case 'hobby':
           
           
					hobby = body.slice(1)
					const hob =['Desah Di Game','Ngocokin Doi','Stalking sosmed nya mantan','Kau kan gak punya hobby awokawok','Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					enzet.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
					break
case 'neontext':
                  
				
if (args.length < 1) return reply(`「❗」Contoh : ${prefix}Neontext IlhamEnzet`)
neon = body.slice(10)
reply('「❗」 WAIT GANS')
anu = await getBuffer(`https://api.xteam.xyz/textpro/neon?text=$APIKEY=${XteamKey}`)
enzet.sendMessage(from, anu, image, {quoted: mek})
break					
           case 'seberapagay':
           
           
					gay = body.slice(13)
		   anu = await fetchJson(`https://arugaz.herokuapp.com/api/howgay`, {method: 'get'})
		   hasil = `Nih Liat Data Gay Si ${gay}\n\n\nPersentase Gay : ${anu.persen}%\nAlert!!! : ${anu.desc}`
		   reply(hasil)
					break	
                case 'truth':
                
                
					const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					enzet.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
					break
                case 'dare':
                
				      
					const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot 🤥 setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u enzet?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					enzet.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
					break
                  case 'timer':
                  
				
				if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam")}
				setTimeout( () => {
				reply("Waktu habis")
				}, timer)
				break						   
/*
]=====> MENU GRUP <=====[
*/		 
				case 'welcome':
                  				
					if (!isGroup) return reply(`*[] Perintah ini hanya bisa di gunakan dalam group!*`)			
					if (!isGroupAdmins) return reply(`* ADMIN GROUP ONLY*`)
					if (args.length < 1) return reply(bot.satukos())
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('*Fitur WELCOME Sudah AKTIF Boss*')
						welkom.push(from)
						fs.writeFileSync('./database/group/welkom.json', JSON.stringify(welkom))
						reply('*「SUKSES」 MENGAKTIFKAN FITUR WELCOME DI GROUP*')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/group/welkom.json', JSON.stringify(welkom))
						reply('*「SUKSES」 MEMATIKAN FITUR WELCOME DI GROUP*')
					} else {
						reply(bot.satukos())
					}
					break
case 'blackpink':
                  
				
if (args.length < 1) return reply(`「❗」 Contoh : ${prefix}BlackPink Text Anda`)
pink = body.slice(11)
reply('💤 *Format Yang Anda Masukan Salah*')
lol = await getBuffer(`https://api.xteam.xyz/textpro/blackpink?text=${pink}&APIKEY=${XteamKey}`)
enzet.sendMessage(from, lol, image, {quoted: mek})
break					
                 case 'event':
                                   
					if (!isGroup) return reply(`*[] Perintah ini hanya bisa di gunakan dalam group!*`)			
					
					if (args.length < 1) return reply(bot.satukos())
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*FITUR EVENT SUDAH AKTIF BOS*')
						event.push(from)
						fs.writeFileSync('./database/group/event.json', JSON.stringify(event))
						reply('*「SUKSES」 MENGAKTIFKAN EVENT DI GROUP*')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/group/event.json', JSON.stringify(event))
						reply('*「SUKSES」 MEMATIKAN EVENT DI GROUP*')
					} else {
						reply(bot.satukos())
					}
					break
                case 'leveling':
                if (!isGroup) return reply(`*[] Perintah ini hanya bisa di gunakan dalam group!*`)			
                if (!isGroupAdmins) return reply(`* ADMIN GROUP ONLY*`)
                if (args.length < 1) return reply(bot.satukos())
                if (args[0] === 1) {
                    if (isLevelingOn) return reply('*fitur level sudah aktif sebelum nya*')
                    _leveling.push(from)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(bot.lvlon())
                } else if (args[0] === 0) {
                    _leveling.splice(from, 1)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(bot.lvloff())
                } else {
                    reply(bot.satukos())
                }
					break
				case 'simih':
                  				
					if (!isGroup) return reply(`*[] Perintah ini hanya bisa di gunakan dalam group!*`)			
					if (args.length < 1) return reply(`*Add Parameters [ 1 ] Enable Or [ 0 ] Disable*\n[❗] _Tambah Parameter [ 1 ] Aktifkan atau [ 0 ] Nonaktifkan`)
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('🎭 *SUDAH AKTIF*')
						samih.push(from)
						fs.writeFileSync('./database/group/simi.json', JSON.stringify(samih))
						reply('*「 SUCCES 」 Mengaktifkan Fitur SIMI Di Group* 🥁')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./database/group/simi.json', JSON.stringify(samih))
						reply('*「 SUCCES 」 Mematikan Fitur SIMI Di Group* 👻')
					} else {
						reply(bot.satukos())
					}
					break
				case 'nsfw':
                  				
					if (!isGroup) return reply(`*[] Perintah ini hanya bisa di gunakan dalam group!*`)			
					if (!isGroupAdmins) return reply(`* ADMIN GROUP ONLY*`)
					if (args.length < 1) return reply(bot.satukos())
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply(' *sudah aktif*  !!')
						nsfw.push(from)
						fs.writeFileSync('./database/group/nsfw.json', JSON.stringify(nsfw))
						reply('*「SUKSES」 MENGAKTIFKAN FITUR NSFW DI GROUP*')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/group/nsfw.json', JSON.stringify(nsfw))
						reply('*「SUKSES」 MEMATIKAN FITUR NSWF DI GROUP*')
					} else {
						reply(bot.satukos())
					}
					break
                                case 'antilinkgrup':
                  				
					if (!isGroup) return reply(`*[] Perintah ini hanya bisa di gunakan dalam group!*`)			
					if (!isGroupAdmins) return reply(`* ADMIN GROUP ONLY*`)
					if (!isBotGroupAdmins) return reply(` ` *BOT HARUS JADI ADMIN*`)					
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('EMANG MATI?')
						antilink.push(from)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('「SUKSES」MENGAKTIFKAN ANTI LINK DI GROUP')
						enzet.sendMessage(from,`ALLERT!!! Jika bukan admin jangan kirim link grup`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('EMANG AKTIF?')
						var ini = anti.botLangsexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('「SUKSES」MEMATIKAN ANTI LINK DI GROUP')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break					
					
				case 'admin':
                  
				
					if (!isGroup) return reply(`*[] Perintah ini hanya bisa di gunakan dalam group!*`)			
					teks = `*DAFTAR ATASAN GROUP* _${groupMetadata.subject}_\n*TOTAL* : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
					case 'grup':
					case 'group':
                  					
					if (!isGroup) return reply(`*[] Perintah ini hanya bisa di gunakan dalam group!*`)			
					if (!isGroupAdmins) return reply(`* ADMIN GROUP ONLY*`)
					if (!isBotGroupAdmins) return reply(` *BOT HARUS JADI ADMIN*`)
					if (args[0] === 'buka') {
					    reply(`*BERHASIL MEMBUKA GROUP*`)
						enzet.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`*BERHASIL MENUTUP GROUP*`)
						enzet.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break
				case 'add':             
				
					if (!isGroup) return reply(`*[] Perintah ini hanya bisa di gunakan dalam group!*`)			
					if (!isGroupAdmins) return reply(`* ADMIN GROUP ONLY*`)
					if (!isBotGroupAdmins) return reply(` *BOT HARUS JADI ADMIN*`)
					if (args.length < 1) return reply('Yang mau di add siapa?')
					if (args[0].startsWith('08')) return reply('Gunakan kode bahasa kak')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						enzet.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Anjim yang mau di add di private, dahlah :)')
					}
					break
			     	case 'kick':
                  
				
					if (!isGroup) return reply(`*[] Perintah ini hanya bisa di gunakan dalam group!*`)			
					if (!isGroupAdmins) return reply(`* ADMIN GROUP ONLY*`)
					if (!isBotGroupAdmins) return reply(` *BOT HARUS JADI ADMIN*`)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('💤 𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 ??𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Assalamualaikum Atas Perintah Admin Grup Anda Akan Di Tendang🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						enzet.groupRemove(from, mentioned)
					} else {
						mentions(`Assalamualaikum Atas Perintah Admin Grup Anda Akan Di Tendang @${mentioned[0].split('@')[0]} 🏃`, mentioned, true)
						enzet.groupRemove(from, mentioned)
					}
					break
                case 'hidetag':
                                  
                
					if (!isGroup) return reply(`*[] Perintah ini hanya bisa di gunakan dalam group!*`)			
					if (!isGroupAdmins) return reply(`* ADMIN GROUP ONLY*`)
					var value = body.slice(9)
					var group = await enzet.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					enzet.sendMessage(from, options, text)
					break					
                case 'level':
                                  
                
                if (!isLevelingOn) return reply(`* ENABLE LEVELING*`)
                if (!isGroup) return reply(`*[] Perintah ini hanya bisa di gunakan dalam group!*`)			
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(bot.lvlnul())
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                resul = `┏━━━━━━♡ *LEVEL* ♡━━━━━━━┓\n┃╭───────────────────\n┃│➸ NAMA : ${pushname}\n┃│➸ NOMOR : wa.me/${sender.split("@")[0]}\n┃│➸ XP : ${userXp}/${requiredXp}\n┃│➸ LEVEL : ${userLevel}\n┃╰───────────────────\n┗━━━━━━━━━━━━━━━━━━━━┛`
               enzet.sendMessage(from, resul, text, { quoted: mek})
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
					break
                 case 'linkgrup':
                  
				               
				    if (!isGroup) return reply(`*[] Perintah ini hanya bisa di gunakan dalam group!*`)			
				    if (!isBotGroupAdmins) return reply(` *BOT HARUS JADI ADMIN*`)
				    linkgc = await enzet.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    enzet.sendMessage(from, yeh, text, {quoted: mek})
	
					break
				case 'tagall':       
				
					if (!isGroup) return reply(`*[] Perintah ini hanya bisa di gunakan dalam group!*`)			
					if (!isGroupAdmins) return reply(`* ADMIN GROUP ONLY*`)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `➸ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
           case 'setname':
                           
                if (!isGroup) return reply(`*[] Perintah ini hanya bisa di gunakan dalam group!*`)			
			    if (!isGroupAdmins) return reply(`* ADMIN GROUP ONLY*`)
				if (!isBotGroupAdmins) return reply(` *BOT HARUS JADI ADMIN*`)
                enzet.groupUpdateSubject(from, `${body.slice(9)}`)
                enzet.sendMessage(from, '⟪ SUKSES ⟫ Mengubah Nama Grup', text, {quoted: mek})
					break
                case 'setdesc':
                                
                if (!isGroup) return reply(`*[] Perintah ini hanya bisa di gunakan dalam group!*`)			
			    if (!isGroupAdmins) return reply(`* ADMIN GROUP ONLY*`)
				if (!isBotGroupAdmins) return reply(` *BOT HARUS JADI ADMIN*`)
                enzet.groupUpdateDescription(from, `${body.slice(9)}`)
                enzet.sendMessage(from, '⟪ SUKSES ⟫ Mengubah Desk Grup', text, {quoted: mek})
					break
           case 'demote':
                           
					if (!isGroup) return reply(`*[] Perintah ini hanya bisa di gunakan dalam group!*`)			
					if (!isGroupAdmins) return reply(`* ADMIN GROUP ONLY*`)
					if (!isBotGroupAdmins) return reply(` *BOT HARUS JADI ADMIN*`)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('💤 *𝗧ag 𝘁arget 𝘆ang 𝗶ngin 𝗱i Demote!*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*Jabatan Anda Di Copot*🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						enzet.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Atas Perintah Admin Grup\n@${mentioned[0].split('@')[0]} Jabatan Anda Sebagai Admin Di Grup Telah Di Copot🏃`, mentioned, true)
						enzet.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'promote':
                				
					if (!isGroup) return reply(`*[] Perintah ini hanya bisa di gunakan dalam group!*`)			
					if (!isGroupAdmins) return reply(`* ADMIN GROUP ONLY*`)
					if (!isBotGroupAdmins) return reply(` *BOT HARUS JADI ADMIN*`)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 ??𝗮??𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Atas Perintah Admin Grup Anda Naik Jabatan\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						enzet.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Atas Perintah Admin Grup\n@${mentioned[0].split('@')[0]} *Anda Naik Menjadi Admin Group*`, mentioned, true)
						enzet.groupMakeAdmin(from, mentioned)
					}
					break
				case 'delete':
                				
					if (!isGroup) return reply(`*[] Perintah ini hanya bisa di gunakan dalam group!*`)			
					if (!isGroupAdmins) return reply(`* ADMIN GROUP ONLY*`)
					if (!isBotGroupAdmins) return reply(` *BOT HARUS JADI ADMIN*`)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = '𝐏erintah 𝐃i 𝐓erima, 𝐇apus 𝐏esan :\n'
						for (let _ of mentioned) {
							teks += `@${_[0].split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						enzet.deleteMessage(from, mentioned)
					} else {
						mentions(`𝐏erintah 𝐃i 𝐓erima, 𝐇apus 𝐏esan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						enzet.deleteMessage(from, mentioned)
					}
					break
				case 'hedsot':
                				
					if (!isGroup) return reply(`*[] Perintah ini hanya bisa di gunakan dalam group!*`)			
					if (!isGroupAdmins) return reply(`* ADMIN GROUP ONLY*`)
					if (!isBotGroupAdmins) return reply(` *BOT HARUS JADI ADMIN*`)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('💤 Tag Target Yang Ingin Di Tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = '𝐁ismillah 𝐊epala𝐌u 𝐇edsot\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						enzet.groupRemove(from, mentioned)
						mentions(teks, mentioned, true)
						enzet.groupAdd(from, [num])
					} else {
						mentions(`𝐁erhasil 𝐌eng 𝐇edsot 𝐏ala𝐍ya  : @${mentioned[0].split('@')[0]}`, mentioned, true)
						enzet.groupRemove(from, mentioned)
						}
					break
                 case 'fitnah':
                  
				
					if (!isGroup) return reply(`*[] Perintah ini hanya bisa di gunakan dalam group!*`)			                 
				if (args.length < 1) return reply(`Gini Bos : ${prefix}Fitnah [ @tag|Pesan|Balasanbot ]\nContoh : ${prefix}Fitnah @tagmember|hai|hai juga`)
				var gh = body.slice(8)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("|")[0];
					var target = gh.split("|")[1];
					var bot = gh.split("|")[2];
					enzet.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					break
                      case 'leave':
                            
                                 
                      if (!isGroup) return reply(`*[] Perintah ini hanya bisa di gunakan dalam group!*`)			
                      if (!isGroupAdmins) return reply(`* ADMIN GROUP ONLY*`)
                      setTimeout( () => {
                      enzet.groupLeave (from) 
                      }, 2000)
                      setTimeout( () => {
                      enzet.updatePresence(from, Presence.composing) 
                      
                         
                      enzet.sendMessage(from, 'Aku pamit Boss', text)
                      }, 0)
                      break																									
/*
]=====> DOWNLOAD MENU <=====[
*/
                     case 'play':
                  
				
                reply(`[ WAIT ] Sedang di proses...\n*Loading ]67%*`)
                anu = await fetchJson(`https://api.vhtear.com/ytmp3?query=${body.slice(6)}&apikey=${VhtearKey}`)
               if (anu.error) return reply(anu.error)
                 infomp3 = `*「❗」 Lagu Ditemukan*\n➸ Judul : ${anu.result.title}\n➸ Durasi : ${anu.result.duration}\n➸ Size : ${anu.result.size}\n\n💤 *[ WAIT ] Lagi Memeroses Boss*`
                buffer = await getBuffer(anu.result.image)
                lagu = await getBuffer(anu.result.mp3)
                enzet.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                enzet.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', quoted: mek})
                break			
                case 'lirik':
					if (args.length < 1) return reply('Nama lagunya apa kak?')          
				
					tels = body.slice(7)
					anu = await fetchJson(`https://arugaz.my.id/api/lirik?judul=${tels}`, {method: 'get'})
					reply(anu.result)
					break
					case 'joox':
			tels = body.slice(6)
                data = await fetchJson(`https://tobz-api.herokuapp.com/api/joox?q=${tels}&apikey=${TobzKey}`, {method: 'get'})               
				
                 infomp3 = `*Lagu Ditemukan!!!*\nJudul : ${data.result.judul}\nAlbum : ${data.result.album}\nDipublikasi : ${data.result.dipublikasi}`
                buffer = await getBuffer(data.result.thumb)
                lagu = await getBuffer(data.result.mp3)
                enzet.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                enzet.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${data.result.title}.mp3`, quoted: mek})
                break
/*
]=====> RANDOM MENU <=====[
*/
                case 'pokemon':
                  
				
                   if (!isGroup) return reply(`*[] Perintah ini hanya bisa di gunakan dalam group!*`)			
                   if (!isNsfw) return reply(bot.nsfwoff())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=pokemon`, {method: 'get'})
					reply(`[ WAIT ] Sedang di proses...\n*Loading ]67%*`)
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					enzet.sendMessage(from, pok, image, { quoted: mek })
					break
                case 'anjing':
                  
				
                   if (!isGroup) return reply(`*[] Perintah ini hanya bisa di gunakan dalam group!*`)			
                   if (!isNsfw) return reply(bot.nsfwoff())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anjing`, {method: 'get'})
					reply(`[ WAIT ] Sedang di proses...\n*Loading ]67%*`)
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					enzet.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'neko':
                
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nekonime?apikey=${TobzKey}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						enzet.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih nekonime mu >_<'})
					break
                case 'nekonime':
                  
				
					gatauda = body.slice(10)
					reply(`[ WAIT ] Sedang di proses...\n*Loading ]67%*`)
					anu = await fetchJson(`https://api.vhtear.com/randomnekonime&apikey=${VhtearKey}`, {method: 'get'})
					buffer = await getBuffer(anu.result.result)
					enzet.sendMessage(from, buffer, image, {quoted: mek})
					break
                case 'kpop':
                  
				
                                        reply(`[ WAIT ] Sedang di proses...\n*Loading ]67%*`)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomkpop?apikey=${TobzKey}`, {method: 'get'})
                                        if (anu.error) return reply(anu.error)
                                        buffer = await getBuffer(anu.result)
                                        randomkpop = `*PLASTIQUE*`
                                        enzet.sendMessage(from, buffer, image, {quoted: mek, caption: randomkpop})
                                        break
                case 'husbu':
                  
				
                   if (!isGroup) return reply(`*[] Perintah ini hanya bisa di gunakan dalam group!*`)			
                   if (!isNsfw) return reply(bot.nsfwoff())
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/husbu?apikey=${TobzKey}`)
						buffer = await getBuffer(res.image)
						enzet.sendMessage(from, buffer, image, {quoted: mek, caption: '>_<'})
					break
                case 'loli':
                  
				
					gatauda = body.slice(6)
					reply(`[ WAIT ] Sedang di proses...\n*Loading ]67%*`)
					anu = await fetchJson(`https://api.vhtear.com/randomloli&apikey=${VhtearKey}`, {method: 'get'})
					buffer = await getBuffer(anu.result.result)
					enzet.sendMessage(from, buffer, image, {quoted: mek})
					break										
					case 'wibu':
                  
				
						data = await fetchJson(`https://api.vhtear.com/randomwibu&apikey=${VhtearKey}`)
						buffer = await getBuffer(data.result.foto)
						enzet.sendMessage(from, buffer, image, {quoted: mek, caption: '>_<'})
					break
                case 'darkjokes':
                  
				
				 data = fs.readFileSync('./src/darkjokes.js');
                 jsonData = JSON.parse(data);
                 randbotex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randbotex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, '*GELAP BOS :V*')
				break										
/*
]=====> OTHER MENU <=====[
*/				
            	case 'mining':
                      
                      if (!isEventon) return reply(`Maaf ${pushname} Event Mining Tidak Di Aktifkan Sama Owner`)
                      if (isOwner) {
                      const one = 999999999
                      addLevelingXp(sender, one)
                      addLevelingLevel(sender, 99)
                      reply(`karena Bot memberikan ${one}Xp 💀`)
                      }else{
                      const mining = Math.ceil(Math.random() * 10000)
                      addLevelingXp(sender, mining)
                      await reply(`*selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
                      }
					break
                case 'moddroid':
                  
				
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(10)}&apikey=${TobzKey}`)
			hepi = data.result[0] 
			teks = `*➸ Nama*: ${data.result[0].title}\n*➸ publisher*: ${hepi.publisher}\n*➸ mod info:* ${hepi.mod_info}\n*➸ size*: ${hepi.size}\n*➸ latest version*: ${hepi.latest_version}\n*➸ genre*: ${hepi.genre}\n*➸ link:* ${hepi.link}\n*➸ download*: ${hepi.download}`
			buffer = await getBuffer(hepi.image)
			enzet.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			break
			case 'happymod':
                  
				
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${body.slice(10)}&apikey=${TobzKey}`)
			hupo = data.result[0] 
			teks = `*➸ Nama*: ${data.result[0].title}\n*➸ version*: ${hupo.version}\n*➸ size:* ${hupo.size}\n*➸ root*: ${hupo.root}\n*➸ purchase*: ${hupo.price}\n*➸ link*: ${hupo.link}\n*➸ download*: ${hupo.download}`
			buffer = await getBuffer(hupo.image)
			enzet.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			break
					case 'pinterest':
                  
				
					enzet.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${body.slice(11)}`, {method: 'get'})
					reply(`[ WAIT ] Sedang di proses...\n*Loading ]67%*`)
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					enzet.sendMessage(from, pok, image, { quoted: mek, caption: `*⟪ Pinterest ⟫*`})
					break 
                case 'beritahoax':
                  
				
                    enzet.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infohoax`, {method: 'get'})
					teks = '♡───────────♡\n'
					for (let i of data.result) {
						teks += `*➸ Gambar* : ${i.image}\n*➸ Title* : ${i.title}\n*➸ link* : ${i.link}\n*➸ tag* : ${i.tag}\n♡───────────♡\n`
					}
					reply(teks.trim())
					break
					case 'brainly':
	                  
				
                    brien = body.slice(9)
					brainly(`${brien}`).then(res => {
					teks = '♡───────────♡\n'
					for (let Y of res.data) {
						teks += `\n*「 BRAINLY 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n♡───────────♡\n`
					}
					enzet.sendMessage(from, teks, text, {quoted: mek, detectLinks: false})
                        console.log(res)
                    })
					break
				case 'info':
					me = enzet.user
					uptime = process.uptime()
					teks = `*➸ Nama bot* : _${me.name}_\n*➸ OWNER* : _ENZET BOT_\n*➸ AUTHOR* : _${ownerName}_\n*➸ Nomor Bot* : _@${me.jid.split('@')[0]}_\n*➸ Prefix* : ${prefix}\n*➸ Total Block Contact* : _${blocked.length}_\n*➸ The bot is active on* : _${kyun(uptime)}_`
					buffer = await getBuffer(me.imgUrl)
					enzet.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
            case 'admin':
            case 'owner':
            case 'creator':
                  enzet.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                  enzet.sendMessage(from, 'Owner Ni Boss:v',MessageType.text, { quoted: mek} )
					break
case 'tahta':

if (args.length < 1) return reply(`*「❗」Contoh : ${prefix}Tahta Enzet*`)
har = body.slice(12)
reply(`[ WAIT ] Sedang di proses...\n*Loading ]67%*`)
buffer = await getBuffer(`https://api.vhtear.com/hartatahta?text=${har}&apikey=${VhtearKey}`)
enzet.sendMessage(from, buffer, image, {quoted: mek})
break
case 'cloudtext':                 
				
if (args.length < 1) return reply(`「❗」Contoh : ${prefix}cloudtext Putra`)
cloud = body.slice(11)
reply(`[ WAIT ] Sedang di proses...\n*Loading ]67%*`)
buffer = await getBuffer(`https://api.xteam.xyz/textpro/cloudtext?text=${cloud}&APIKEY=${XteamKey}`)
enzet.sendMessage(from, buffer, image, {quoted: mek})
break

/*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
]=====> OWNER MENU <=====[
*/
					case 'setreply':
					
                    enzet.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					reply(`Reply Berhasil Di Ubah Menjadi : ${cr}`)
					break
				case 'setprefix':
					if (args.length < 1) return
					
					prefix = args[0]
					reply(`*「 SUCCES 」* _Prefix Telah Terganti Menjadi_ ➸ : ${prefix}`)
					break
				case 'clearall':
					
					anu = await enzet.chats.all()
					enzet.setMaxListeners(25)
					for (let _ of anu) {
						enzet.deleteChat(_.jid)
					}
					reply(' *Clear All Success*')
					break
			       case 'block':
				 enzet.updatePresence(from, Presence.composing) 
				 enzet.chatRead (from)
					if (!isGroup) return reply(`*[] Perintah ini hanya bisa di gunakan dalam group!*`)			
					
					enzet.blockUser (`${body.slice(7)}@c.us`, "add")
					enzet.sendMessage(from, `Perintah Diterima, Memblokir ${body.slice(7)}@c.us`, text)
					break
                    case 'unblock':
					if (!isGroup) return reply(`*[] Perintah ini hanya bisa di gunakan dalam group!*`)			
					
				    enzet.blockUser (`${body.slice(9)}@c.us`, "remove")
					enzet.sendMessage(from, `Perintah Diterima, Membuka ${body.slice(9)}@c.us`, text)
					break   				
					case 'setbotpp':
				    enzet.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`*Kirim Gambar Dengan Caption ${prefix}Setbotpp Atau Tag Gambar Yang Sudah Dikirim*`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await enzet.downloadAndSaveMediaMessage(enmedia)
					await enzet.updateProfilePicture(botNumber, media)
					reply('*Makasih Profil Barunya Bosku* 🦂')
					break
				case 'clone':
					if (!isGroup) return reply('*[] Perintah ini hanya bisa di gunakan dalam group!*')			
					if (!isOwner) return reply(` *BOT HARUS JADI ADMIN*`)
					if (args.length < 1) return reply('💤 *TAG Yang Mau Di CLONE*')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.fbot(x => x.jid === mentioned)
					try {
						pp = await enzet.getProfilePicture(id)
						buffer = await getBuffer(pp)
						enzet.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply(`* GAGAL  Coba Ulangi Beberapa Saat Lagi...*`)
					}
					break
                case 'ban':
					
					bnnd = body.slice(6)
					ban.push(`${bnnd}@s.whatsapp.net`)
					fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah dibanned !`)
					break
				case 'unban':
					
					bnnd = body.slice(8)
					ban.splice(`${bnnd}@s.whatsapp.net`, 1)
					fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah di unban!`)
					break
case 'request':
            const bug = body.slice(5)
                      if (pesan.length > 300) return enzet.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
                        var nomor = mek.participant
                       teks1 = `*[ REQUEST FITUR BARU ]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`
                      var options = {
                         text: teks1,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    enzet.sendMessage(ownerNumber, options, text, {quoted: mek})
                    reply('Tambah Fiture Baru Yang Anda Beri Tau telah Sampai ke owner BOT,  Terimah Kasih')
                    break
case 'iri':
const irimp3 = fs.readFileSync('./assets/iri.mp3');
enzet.sendMessage(from, irimp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'pale':
const pa = fs.readFileSync('assets/pale.mp3')
enzet.sendMessage(from, pa, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound':
const soun = fs.readFileSync('assets/sound.mp3')
enzet.sendMessage(from, soun, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sound1':
satu = fs.readFileSync('./assets/sound1.mp3');
enzet.sendMessage(from, satu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound2':
dua = fs.readFileSync('./assets/sound2.mp3');
enzet.sendMessage(from, dua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound3':
tiga = fs.readFileSync('./assets/sound3.mp3');
enzet.sendMessage(from, tiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound4':
empat = fs.readFileSync('./assets/sound4.mp3');
enzet.sendMessage(from, empat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound5':
lima = fs.readFileSync('./assets/sound5.mp3');
enzet.sendMessage(from, lima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound6':
enam = fs.readFileSync('./assets/sound6.mp3');
enzet.sendMessage(from, enam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound7':
tujuh = fs.readFileSync('./assets/sound7.mp3');
enzet.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break				
/*
]=====> Thanks TO <=====[
> Ilham Enzet
> Putra Enzet
> Zeus Xz
> Ramlan ID
> Nazwa Cans
> Vhtear ID
> Tobz ID
> Xteam ID
> Mhankbarbar ID
> All Creator Bot WhatsApp
*/				
			if (isGroup && !isCmd && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
				//		reply(bot(prefix, command))
					} else {
						console.log(color('[ERROR]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
					}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})













