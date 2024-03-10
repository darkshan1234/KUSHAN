const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: ShanWASocket,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("@whiskeysockets/baileys"");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function DARK_SHAN() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState(__dirname + '/auth_info_baileys')
     try {
            let shan = ShanWASocket({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!shan.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await shan.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            shan.ev.on('creds.update', saveCreds)
            shan.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + '/auth_info_baileys/creds.json');
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await shan.sendMessage(shan.user.id, { text: 'DARKSHAN;;;' + b64data });

               let DARK_SHAN_MD = `┏┅┉⃝┅┅┅┅⃟┅◂ ◃ ◉ ▹ ▸┅⃟┅┅┅┅⃝┅┅┓

╟ ♤ 𝚃𝙷𝙰𝙽𝙺𝚂 𝙵𝙾𝚁 𝙲𝙷𝙾𝙾𝚂𝙴 𝙳𝙰𝚁𝙺 𝚂𝙷𝙰𝙽 ┋𝙼𝙳 

┋

╟ ♤ 𝙳𝙴𝚅𝙰𝙻𝙾𝙿𝙴𝚁 𝙱𝚈 𝙺𝚄𝚂𝙷𝙰𝙽 𝚂𝙴𝚆𝙼𝙸𝙽𝙰 

┋

╟ 𝚃𝚄𝚃𝙾𝚁𝙸𝙰𝙻 𝙱𝙾𝚃 𝙲𝚁𝙴𝙰𝚃𝙴 𝚅𝙸𝙳𝙴𝙾

┋https://youtube.com/@darkshanyt1

╟ ♤ 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝙲𝙷𝙰𝙽𝙽𝙴𝙻

┋https://whatsapp.com/channel/0029VaFLAgi90x2oD70Hwq1z

╟ ♤ 𝙽𝙾𝚃𝙴

┋𝙳𝙾𝙽'𝚃 𝙿𝚁𝙾𝚅𝙸𝙳𝙴 𝚈𝙾𝚄 𝚂𝙴𝚂𝚂𝙸𝙾𝙽_𝙸𝙳 ┋ 𝚃𝙾  𝙰𝙽𝚈𝙾𝙽𝙴 𝙾𝚃𝙷𝙴𝚁𝚆𝙸𝚂𝙴 𝚃𝙷𝙰𝚃 𝙲𝙰𝙽 ┋𝙰𝙲𝙲𝙴𝚂𝚂 𝙲𝙷𝙰𝚃𝚂

◎┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅◎

                         𝙳𝙰𝚁𝙺 𝚂𝙷𝙰𝙽 𝙼𝙳

◎┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅◎

┗┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┛`
 await shan.sendMessage(shan.user.id,{text:DARK_SHAN_MD},{quoted:session})
 

        await delay(100);
        await shan.ws.close();
        return await removeFile(__dirname+'/auth_info_baileys');
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    DARK_SHAN();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile(__dirname+'/auth_info_baileys');
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await DARK_SHAN()
});
module.exports = router
