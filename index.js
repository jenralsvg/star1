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
const { exec } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const tiktod = require('tiktok-scraper')
const speed = require('performance-now')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const cd = 4.32e+7
const { removeBackgroundFromImageFile } = require('remove.bg')
const { bot } = require('./language')
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:JRL Svg\n' // GANTI NAMA MU
            + 'ORG:Owner Bot;\n'
            + 'TEL;type=CELL;type=VOICE;waid=6285559240360:+62 855-5924-0360\n' // GANTI NOMOR MU
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
const ban = JSON.parse(fs.readFileSync('./database/user/banned.json'))
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
const { vip } = require('./database/menu/premium')
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
const baby = new WAConnection()
baby.logger.level = 'warn'
console.log(banner.string)
   baby.on('qr', qr => {
   qrcode.generate(qr, { small: true })
	console.log(color('[','white'), color('!','red'), color(']','white'), color('Scan Code QR Nya Bos'))
})

	baby.on('credentials-updated', () => {
		fs.writeFileSync('./Ilham.json', JSON.stringify(baby.base64EncodedAuthInfo(), null, '\t'))
		info('2', 'Login Info Updated...')
	})
	fs.existsSync('./Ilham.json') && baby.loadAuthInfo('./Ilham.json')
	baby.on('connecting', () => {
		start('2', 'JRL Svg Connecting...')
	})
	baby.on('open', () => {
		success('2', 'JRL Svg Connected')
	})
	baby.connect({timeoutMs: 30*1000})

baby.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await baby.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await baby.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Selamat Bergabung Di Grup\n*${mdata.subject}*\nHai@${num.split('@')[0]}\nKetik ${prefix}Help Untuk Menampilkan Fiture\n *Dari Bot JRL Svg*\n\n _Terimah Kasih Telah Join_`
				let buff = await getBuffer(ppimg)
				baby.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await baby.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Selamat Tinggal Kawan\n @${num.split('@')[0]}\n\n  *Terimah Kasih Telah Join*`
				let buff = await getBuffer(ppimg)
				baby.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	baby.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	baby.on('message-new', async (mek) => {
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
			const botNumber = baby.user.jid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = baby.contacts[sender] != undefined ? baby.contacts[sender].vname || baby.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await baby.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
            const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            
/*
]=====> MOHAMAD ILHAM <=====[
*/
            const isEventon = isGroup ? event.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            const isBanned = ban.includes(sender)
            const isPrem = premium.includes(sender)
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
				baby.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				baby.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? baby.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : baby.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    baby.sendMessage(from, teks, image, {quoted:mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			baby.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		    const sendPtt = (teks) => {
		    baby.sendMessage(from, audio, mp3, {quoted:mek})
		    }
			
/*
]=====> LEVELING <=====[
*/
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                    await reply(bot.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel))
                }
            } catch (err) {
                console.error(err)
            }
        }

// ANTI LINK GRUP
                if (mesejAnti.includes("://chat.whatsapp.com/")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply('Atasan grup mah bebas yakan:v')
		        baby.updatePresence(from, Presence.composing)
		        if (mesejAnti.includes("#izinbos")) return reply("Iya Boss jangan spam ya")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Boss ${sender.split("@")[0]} Grup ini anti link Hihi`)
		        setTimeout( () => {
			        baby.groupRemove(from, [kic]).catch((e)=>{reply(`[ ❗] Bot Harus Menjadi Admin`)})
		        }, 3000)
		        setTimeout( () => {
			        baby.updatePresence(from, Presence.composing)
			        reply("Hedsot :v")
		        }, 2000)
		        setTimeout( () => {
			        baby.updatePresence(from, Presence.composing)
			        reply("Bismillah")
		        }, 1000)
		        setTimeout( () => {
			        baby.updatePresence(from, Presence.composing)
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
				if (isBanned) return reply(bot.baned())
				if (!isRegistered) return reply(bot.noregis())
				    const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
					await costum(help(pushname, prefix, botName, ownerName, reqXp, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break
				case 'donasi':
				case 'donate':
					baby.sendMessage(from, donasi(pushname, prefix, botName, ownerName), text)
					break
				case 'panduan':
				if (isBanned) return reply(bot.baned())
				if (!isRegistered) return reply(bot.noregis())				
					baby.sendMessage(from, cara(pushname, prefix, botName, ownerName), text)
					break										
                case 'simplemenu':
				case 'simpelmenu':
				if (isBanned) return reply(bot.baned())
				if (!isRegistered) return reply(bot.noregis())			
					await costum(simple(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break
                case 'gabutmenu':
                if (isBanned) return reply(bot.baned())
				if (!isRegistered) return reply(bot.noregis())			
					await costum(gabut(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break
                case 'groupmenu':
                if (isBanned) return reply(bot.baned())
				if (!isRegistered) return reply(bot.noregis())
				if (!isGroup) return reply(bot.groupo())			
					await costum(groupm(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break
                case 'downloadmenu':
                if (isBanned) return reply(bot.baned())
				if (!isRegistered) return reply(bot.noregis())			
					await costum(download(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break
                case 'randommenu':
                if (isBanned) return reply(bot.baned())
				if (!isRegistered) return reply(bot.noregis())			
					await costum(random(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break
                case 'makermenu':
                if (isBanned) return reply(bot.baned())
				if (!isRegistered) return reply(bot.noregis())			
					await costum(maker(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break
                case 'othermenu':
                if (isBanned) return reply(bot.baned())
				if (!isRegistered) return reply(bot.noregis())					
					await costum(other(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break
                case 'soundmenu':
                if (isBanned) return reply(bot.baned())
				if (!isRegistered) return reply(bot.noregis())					
					await costum(sound(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break
                case 'premiummenu':
                if (isBanned) return reply(bot.baned())
				if (!isRegistered) return reply(bot.noregis())					
					await costum(vip(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break																			
                case 'ownermenu':
                if (isBanned) return reply(bot.baned())					
					await costum(owb(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break								
/*
]=====> SIMPLE MENU <=====[
*/
				case 'stiker': 
				case 'sticker':
				case 's':
				if (isBanned) return reply(bot.baned())
				    if (!isRegistered) return reply(bot.noregis())
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await baby.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(bot.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								baby.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await baby.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(bot.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(bot.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								baby.sendMessage(from, buffer, sticker, {quoted: mek})
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
                  if (isBanned) return reply(bot.baned())
				if (!isRegistered) return reply(bot.noregis())
				if (args.length < 1) return reply(`Teksnya mana Boss? Contoh : ${prefix}nulis1 Kata Ilham`)
				ilham = body.slice(8)
				reply('⏳ WAIT Boss, Tunggu Sebentar Lagi Loading...')
				buff = await getBuffer(`https://api.xteam.xyz/magernulis2?text=${ilham}&APIKEY=${XteamKey}`)
				baby.sendMessage(from, buff, image, {quoted: mek, caption: 'Nii'})
				break
				case 'nulis2':
				case 'tulis2':
                  if (isBanned) return reply(bot.baned())
				if (!isRegistered) return reply(bot.noregis())
				if (args.length < 1) return reply(`Teksnya mana Boss? Contoh : ${prefix}nulis2 Kamu Ganteng Kata Cewek`)
				gabut = body.slice(8)
				reply('⏳ WAIT Boss, Tunggu Sebentar Lagi Loading...')
				buff = await getBuffer(`https://api.xteam.xyz/magernulis3?text=${gabut}&APIKEY=${XteamKey}`)
				baby.sendMessage(from, buff, image, {quoted: mek, caption: 'Nii'})
				break
				case 'nulis':
				case 'tulis':
					if (args.length < 1) return reply('Yang Mau Di Tulis Apa Boss')
				if (isBanned) return reply(bot.baned())
				if (!isRegistered) return reply(bot.noregis())
					teks = body.slice(7)
					reply('⏳ WAIT Boss, Tunggu Sebentar Lagi Loading...')
					buff = await getBuffer(`https://api.vhtear.com/write?text=${teks}&apikey=${VhtearKey}`)
					baby.sendMessage(from, buff, image, {quoted: mek })
					break													
				case 'quotes':
				if (isBanned) return reply(bot.baned())
				if (!isRegistered) return reply(bot.noregis())
				quotes = body.slice(1)
				const quo =['Lebih baik mengerti sedikit daripada salah mengerti.','Hampir semua pria memang mampu bertahan menghadapi kesulitan. Namun, jika Anda ingin menguji karakter sejati pria, beri dia kekuasaan.','Bila tekad seseorang kuat dan teguh, Tuhan akan bergabung dalam usahanya.','Penderitaan adalah pelajaran.','Ilmu pengetahuan tanpa agama adalah pincang.','Hidup itu seperti sebuah sepeda, agar tetap seimbang kita harus tetap bergerak.','Perbedaan masa lalu, sekarang, dan masa depan tak lebih dari ilusi yang keras kepala.','Sebuah meja, sebuah kursi, semangkuk buah, dan sebuah biola; apa lagi yang dibutuhkan agar seseorang bisa merasa bahagia?','Belas kasihanlah terhadap sesama, bersikap keraslah terhadap diri sendiri.','Cara paling baik untuk menggerakkan diri Anda ialah memberi tugas kepada diri sendiri.','Kita tidak boleh kehilangan semangat. Semangat adalah stimulan terkuat untuk mencintai, berkreasi dan berkeinginan untuk hidup lebih lama.','Manusia akan bahagia selama ia memilih untuk bahagia.','Saya tidak berharap menjadi segalanya bagi setiap orang. Saya hanya ingin menjadi sesuatu untuk seseorang.','Apabila sempurna akal seseorang, maka sedikit perkataannya.','Bahagialah orang yang dapat menjadi tuan untuk dirinya, menjadi kusir untuk nafsunya dan menjadi kapten untuk bahtera hidupnya.','Sahabat yang jujur lebih besar harganya daripada harta benda yang diwarisi dari nenek moyang.','Yang paling melelahkan dalam hidup adalah menjadi orang yang tidak tulus.','Terbuka untuk Anda, begitulah Tuhan memberi kita jalan untuk berusaha. Jangan pernah berfikir jalan sudah tertutup.','Penundaan adalah kuburan dimana peluang dikuburkan.','Cinta bukan saling menatap mata, namun melihat ke arah yang sama bersama-sama.','Kita adalah apa yang kita kerjakan berulang kali. Dengan demikian, kecemerlangan bukan tindakan, tetapi kebiasaan.','Jangan pernah mencoba menjadikan putra atau putri Anda menjadi seperti Anda. Diri Anda hanya cukup satu saja.','Jika Anda bisa membuat orang lain tertawa, maka Anda akan mendapatkan semua cinta yang Anda inginkan.','Masalah akan datang cepat atau lambat. Jika masalah datang, sambut dengan sebaik mungkin. Semakin ramah Anda menyapanya, semakin cepat ia pergi.','Kita tak bisa melakukan apapun untuk mengubah masa lalu. Tapi apapun yang kita lakukan bisa mengubah masa depan.','Kesabaran adalah teman dari kebijaksanaan.','Orang-orang kreatif termotivasi oleh keinginan untuk maju, bukan oleh keinginan untuk mengalahkan orang lain.','Dimanapun engkau berada selalulah menjadi yang terbaik dan berikan yang terbaik dari yang bisa kita berikan.','Kebencian seperti halnya cinta, berkobar karena hal-hal kecil.','Anda tidak perlu harus berhasil pada kali pertama.','Satu jam yang intensif, jauh lebih baik dan menguntungkan daripada bertahun-tahun bermimpi dan merenung-renung.','Hal terbaik yang bisa Anda lakukan untuk orang lain bukanlah membagikan kekayaan Anda, tetapi membantu dia untuk memiliki kekayaannya sendiri.','Tidak ada jaminan keberhasilan, tetapi tidak berusaha adalah jaminan kegagalan.','Aku tidak tahu kunci sukses itu apa, tapi kunci menuju kegagalan adalah mencoba membuat semua orang senang.']
				const tes = quo[Math.floor(Math.random() * quo.length)]
				baby.sendMessage(from, ''+tes+'\n\n_By : JRL Svg._', text, { quoted: mek })
				break				
				case 'ninjalogo':
                  if (isBanned) return reply(bot.baned())
				if (!isRegistered) return reply(bot.noregis())
				var gh = body.slice(11)
				var nin = gh.split("&")[0];
				var ja = gh.split("&")[1];
				if (args.length < 1) return reply(`「❗」 Contoh : ${prefix}ninjalogo JRL & Svg`)
				reply(bot.wait())
				buffer = await getBuffer(`https://api.xteam.xyz/textpro/ninjalogo?text=${nin}&text2=${ja}&APIKEY=${XteamKey}`)
				baby.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break				
		case 'halloweentext':
                  if (isBanned) return reply(bot.baned())
				if (!isRegistered) return reply(bot.noregis())		
				if (args.length < 1) return reply(bot.wrongf())
				ween = body.slice(15)
				if (ween.length > 10) return reply('Teksnya kepanjangan, maksimal 9 karakter')
				reply(bot.wait())
				buffer = await getBuffer(`https://api.xteam.xyz/textpro/helloweenfire?text=${ween}&APIKEY=${XteamKey}`)
		    baby.sendMessage(from, buffer, image, {quoted: mek})
		    break
				case 'pornhub':
                  if (isBanned) return reply(bot.baned())
				if (!isRegistered) return reply(bot.noregis())
				var gh = body.slice(9)
				var porn = gh.split("&")[0];
				var hub = gh.split("&")[1];
				if (args.length < 1) return reply(`「❗」 Contoh : ${prefix}Pornhub Tobat & Hub`)
				reply(bot.wait())
				buffer = await getBuffer(`https://api.xteam.xyz/textpro/ph?text=${porn}&text2=${hub}&APIKEY=${XteamKey}`)
				baby.sendMessage(from, buffer, image, {quoted: mek})
				break
case 'gemboktext':
				if (isBanned) return reply(bot.baned())
				if (!isRegistered) return reply(bot.noregis())
					var gh = body.slice(12)
					var gem = gh.split("&")[0];
					var bok = gh.split("&")[1];
					if (args.length < 1) return reply(`「❗」 Contoh : ${prefix}Gemboktext 11 01 2021 & JRL Svg dan PJR Svg`)
					reply(bot.wait())
					buffer = await getBuffer(`https://api.vhtear.com/padlock?text1=${gem}&text2=${bok}&apikey=${VhtearKey}`)
					baby.sendMessage(from, buffer, image, {quoted: mek})
					break
case 'glitchtext':
                if (isBanned) return reply(bot.baned())
				if (!isRegistered) return reply(bot.noregis())
					var gh = body.slice(12)
					var gli = gh.split("&")[0];
					var tch = gh.split("&")[1];
					if (args.length < 1) return reply(`「❗」 Contoh : ${prefix}Glitchtext JRL & Svg`)
					reply(bot.wait())
					buffer = await getBuffer(`https://api.xteam.xyz/textpro/glitch?text=${gli}&text2=${tch}&APIKEY=${XteamKey}`)
					baby.sendMessage(from, buffer, image, {quoted: mek})
					break
case 'simi':
				if (isBanned) return reply(bot.baned())
				if (!isRegistered) return reply(bot.noregis())
					if (args.length < 1) return reply(`Mau nanya apa? Contoh : Kau Lagi Dimana Simi`)
					teks = body.slice(5)
					anu = await fetchJson(`https://api.xteam.xyz/simsimi?kata=${teks}&APIKEY=${XteamKey}`)
					reply(anu.jawaban)
					break					
case 'tts':
				if (isBanned) return reply(bot.baned())
				if (!isRegistered) return reply(bot.noregis())
				if (args.length < 1) return baby.sendMessage(from, 'Kode Bahasanya Mana Boss? Contoh : ${prefix}Tts Id Halo Bot', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return baby.sendMessage(from, `Teksnya mana kak | contoh : ${prefix}tts id ah yamate kudasai`, text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 300
					? reply('Teks nya terlalu panjang Boss')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply(bot.stikga())
							baby.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					break
case 'ttp':
				if (isBanned) return reply(bot.baned())
				if (!isRegistered) return reply(bot.noregis())
				if (args.length < 1) return reply(`💤 *Yang Mau Dijadiin Text Sticker Apaan Bos*\n[❗] _Please Fill In The Text That You Want To Use As a Sticker_`)
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(4).trim()
					anu = await fetchJson(`https://mhankbarbar.tech/api/text2image?text=${teks}&apiKey=${BarBarKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(bot.stikga())
						baby.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})              
					break
				case 'toimg':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isQuotedSticker) return reply('Reply Atau Tag Sticker Yang Mau Dijadiin Gambar Boss >_<')
					reply(bot.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await baby.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(bot.stikga())
						buffer = fs.readFileSync(ran)
						baby.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih Boss [(^.^)]'})
						fs.unlinkSync(ran)
					})
					break
                case 'speed':
                case 'ping':
                const timestamp = speed();
                const latensi = speed() - timestamp 
                baby.sendMessage(from, `Speed: ${latensi.toFixed(4)} _ms_`, text, { quoted: mek})
                    break					
                case 'bikinquote':
                if (isBanned) return reply(bot.baned())
                if (!isRegistered) return reply(bot.noregis())
                var gh = body.slice(12)
					var quote = gh.split("&")[0];
					var wm = gh.split("&")[1];
					const pref = `Yang Mau Dijadiin Quote Apaan, Boss?\n\nContoh : ${prefix}Bikinquote Hidup Ini Hanya Sementara & Kata Ilham`
					if (args.length < 1) return reply(pref)
					reply(bot.wait())
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=random`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					baby.sendMessage(from, buffer, image, {caption: 'Nih Boss >_<', quoted: mek})
					break
                   case 'stalkig':
                   if (isBanned) return reply(bot.baned())
                   if (!isRegistered) return reply(bot.noregis())
                     teks = body.slice(9)
                     anu = await fetchJson(`https://api.vhtear.com/igprofile?query=${teks}&apikey=${VhtearKey}`, {method: 'get'})
                     reply('「❗」 Sabar Lagi Stalking IG nya kak')
                     buffer = await getBuffer(anu.result.picture)
                     hasil = `Telah DI Stalk BOS Ku Untuk USERNAME ${teks} \n\n *Username* : _${anu.result.username}_ \n *Nama*    : _${anu.result.full_name}_ \n *Jumlah Follower??﹦?* : _${anu.result.follower}_ \n *Jumlah Following* : _${anu.result.follow}_ \n *Jumlah Post* : _${anu.result.post_count}_ \n *Biografi*    : _${anu.result.biography}`
                    baby.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
			       break
case 'daftar':
				if (isBanned) return reply(bot.baned())
                if (isRegistered) return  reply(bot.rediregis())
                if (!q.includes('|')) return  reply(bot.wrongf())
                const namaUser = q.substring(0, q.indexOf('|') - 0)
                const umurUser = q.substring(q.lastIndexOf('|') + 1)
                const serialUser = createSerial(20)
                if (namaUser.length >= 30) return reply(`Namanya kepanjangan kak :)`)
                if (umurUser.length >= 3, umurUser.length <= 1) return reply(`Umur min 10 tahun max 40 tahun`)
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
				if (isBanned) return reply(bot.baned())
				if (!isRegistered) return reply(bot.noregis())
				if (args.length < 1) return reply(bot.wrongf())
				silk = body.slice(10)
				if (silk.length > 7) return reply('Teksnya kepanjangan, maksimal 6 karakter')
				reply(bot.wait())
				buffer = await getBuffer(`https://api.vhtear.com/silktext?text=${silk}&apikey=${VhtearKey}`)
		    baby.sendMessage(from, buffer, image, {quoted: mek})
		    break
// PREMIUM
				case 'premiumlist':
					baby.updatePresence(from, Presence.composing) 
                    if (!isRegistered) return reply(bot.noregis())
					teks = `╭─「 *JUMLAH USER PREMIUM* 」─\n`
					no = 0
					for (let prem of premium) {
						no += 1
						teks += `│「${no.toString()}」 @${prem.split('@')[0]}\n`
					}
					teks += `│ Jumlah User Premium : ${premium.length}\n╰─────「 *${botName}* 」─────`
					baby.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": premium}})
					break
				case 'bokep':
				baby.updatePresence(from, Presence.composing) 
                  if (isBanned) return reply(bot.baned())
				if (!isRegistered) return reply(bot.noregis())
				if (!isPrem) return reply(bot.premium())
				 data = fs.readFileSync('./src/18.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 randBokep = await getBuffer(randKey.image)
                 reply('_NOTE : Di Harapkan Untuk Segera Bertaubat_')
                 randTeks = randKey.teks
                 baby.sendMessage(from, randBokep, image, {quoted: mek, caption: randTeks})
				break
				case 'mutual':
                  if (isBanned) return reply(bot.baned())
				if (!isRegistered) return reply(bot.noregis())
				if (!isPrem) return reply(bot.premium())
                if (isGroup) return  reply( '*Tidak Bisa Di Group Boss*')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Mencari Pasangan >_<')
                await reply(`wa.me/${anug}`)
                await reply( `Pasangan Ditemukan: 🐊\n*${prefix}next* — Temukan Pasangan Baru`)
            break















