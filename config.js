const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url herey 🫵,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/71ce7bc2c1af81cbc7df7.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ DUDUU_MENDEZ²²¹-ᴍᴅ" 


global.devs = "255749750707" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255621344755";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,255xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,255xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||"255621344755";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_43_10_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDcwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNixcbiAgICAgICAgODYsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDMwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDg5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDk0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2NCxcbiAgICAgICAgMjMxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjcsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNSxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjAxLFxuICAgICAgICA0OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDUyLFxuICAgICAgICAxODIsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjUyLFxuICAgICAgICA3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTA4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDY5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTksXG4gICAgICAgIDExLFxuICAgICAgICAxNDgsXG4gICAgICAgIDcsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTksXG4gICAgICAgIDIwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDcwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTcxLFxuICAgICAgICA0MixcbiAgICAgICAgMjAsXG4gICAgICAgIDYxLFxuICAgICAgICAyMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc1LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTIsXG4gICAgICAgIDcsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODMsXG4gICAgICAgIDEwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAzOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDM4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA2MixcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTA0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDMsXG4gICAgICAgIDU2LFxuICAgICAgICAyNSxcbiAgICAgICAgMjMwLFxuICAgICAgICA2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzgsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDgxLFxuICAgICAgICA3LFxuICAgICAgICAyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNSxcbiAgICAgICAgNixcbiAgICAgICAgMjM4LFxuICAgICAgICA4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzIsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAzMixcbiAgICAgICAgMjU0LFxuICAgICAgICAzNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDExLFxuICAgICAgICAxODAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMixcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidU5FcUZQS3ZPVGorNnkwOHBxMDl2NDgzaDdFcDVlMjRDNUNsOWNVU0orZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTU2MjEzNDQ3NTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjU2NDcxNkI1OEQ5NjY2QUU3NTRENDgyNDc4MDUyRkMxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyODQ4MTQzMlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIydVJnVVpYSFFSMlc2SllvNnFnWHN3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjE0ZWE0MmVkLWEwZGMtNDQ2OS1hOWU4LWM3MzAyNGNiY2FlY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTUsXG4gICAgICA2MixcbiAgICAgIDAsXG4gICAgICAxMDEsXG4gICAgICA5NixcbiAgICAgIDIzOCxcbiAgICAgIDk0LFxuICAgICAgMTMxLFxuICAgICAgMjMwLFxuICAgICAgMTY1LFxuICAgICAgMTE5LFxuICAgICAgMzIsXG4gICAgICAxMTIsXG4gICAgICAxMTAsXG4gICAgICAxODUsXG4gICAgICA2OCxcbiAgICAgIDc2LFxuICAgICAgNixcbiAgICAgIDIyMyxcbiAgICAgIDE2NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTYsXG4gICAgICA2MixcbiAgICAgIDIxNyxcbiAgICAgIDI1MSxcbiAgICAgIDU0LFxuICAgICAgMTU2LFxuICAgICAgMjE2LFxuICAgICAgMTA3LFxuICAgICAgMTgwLFxuICAgICAgMTksXG4gICAgICAxODksXG4gICAgICAxODQsXG4gICAgICAyMTgsXG4gICAgICA3MyxcbiAgICAgIDkyLFxuICAgICAgMTczLFxuICAgICAgMTE1LFxuICAgICAgMTA5LFxuICAgICAgMjgsXG4gICAgICAxOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKTkRQNUY0WVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NjIxMzQ0NzU1OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJ+anN0aWNrc1wiLFxuICAgIFwibGlkXCI6IFwiMTMwNTc2MDgyMjg0NzE4OjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUsrd0hZUWpKR2F1QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI4OC80b05xOEhhZXdMZzJZZkRrQVR0L1hpT002QWIxeFlqTVZEOUltS1JJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInM3cnBtaVRoQmRxSzRpYVl2VFRhQ3RiaDFkd3VOcitxS1pzMHdDNC9vZ3VzTHJsOTBhaHlpblJ6elg5cU9tTTlUZlBSQ2pWcFFKVUh6UUFlOXhrMEJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkxadGNSZ0xreVVlQnR1ckk1UCtOTjNNL2hySzlFNnV2clF4MEJhOVdZNXp6MmtmWDE2a292aEdXNFhRM2kvdW5QY2tKWWYvMVliaCt6bCtLVk9zNGdBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTYyMTM0NDc1NTo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyODQ4MTQyNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZhK1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRmErLmpzb24iOiAie1wia2V5RGF0YVwiOlwidkVtN2tqU0JUR1lFb1Z0a0NMYTlTL0lZdFhzeHZ3em14NnI2N0pXYjZWQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNDg1MjA0NTAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyODQ4MTQyODQwNFwifSIKfQ==
  
  
IDE0MixcbiAgICAgICAgMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjMsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzIsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA1LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTUyLFxuICAgICAgICA2MSxcbiAgICAgICAgMixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDU3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzNixcbiAgICAgICAgOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTk5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTksXG4gICAgICAgIDI0NixcbiAgICAgICAgNDYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTU5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDMwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDMwLFxuICAgICAgICA1NixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMSxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM3LFxuICAgICAgICA3OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzMsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTAsXG4gICAgICAgIDI0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjI2LFxuICAgICAgICA3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA5NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjI2LFxuICAgICAgICA0NixcbiAgICAgICAgNzQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTg3LFxuICAgICAgICA2MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDY4LFxuICAgICAgICAyLFxuICAgICAgICAxOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzksXG4gICAgICAgIDQxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDExLFxuICAgICAgICA4OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjksXG4gICAgICAgIDIyLFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaFZtbGxFRHFZN3lwMEFWenc2Y3JTTWV2ZnNtaENSWXR6aHpoakxqdjc1Yz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMWVIeFpKOVlTUHlZRjFESVpZMTI4UVwiLFxuICBcInBob25lSWRcIjogXCI3MjJmZWFiZi1mMTFiLTQxMjctODhhYS0yYTk1OWNhMWIyYWRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI1LFxuICAgICAgMjAxLFxuICAgICAgMTA5LFxuICAgICAgMzMsXG4gICAgICA4OSxcbiAgICAgIDQ4LFxuICAgICAgMTk2LFxuICAgICAgMTEyLFxuICAgICAgOTcsXG4gICAgICAyMTAsXG4gICAgICAxMzcsXG4gICAgICAyMjIsXG4gICAgICAyOCxcbiAgICAgIDI0OSxcbiAgICAgIDIxOSxcbiAgICAgIDcwLFxuICAgICAgNjgsXG4gICAgICAyMzcsXG4gICAgICAxMDgsXG4gICAgICA0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTAsXG4gICAgICAyNTQsXG4gICAgICA1MyxcbiAgICAgIDcwLFxuICAgICAgMjQyLFxuICAgICAgMjIzLFxuICAgICAgMTMxLFxuICAgICAgODIsXG4gICAgICAxNjEsXG4gICAgICA0MixcbiAgICAgIDEzMCxcbiAgICAgIDIzMSxcbiAgICAgIDg2LFxuICAgICAgMTk2LFxuICAgICAgNixcbiAgICAgIDIwNyxcbiAgICAgIDIwMyxcbiAgICAgIDExOCxcbiAgICAgIDEwNixcbiAgICAgIDE4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSVBnM3JVRkVQT0FocmNHR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJZRWR3MmFIUFdmd092ck1UQWFrdjBiVEZlWkRMTlNRMnlkQ05uRXZ1WUZZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIklQN1ZHTlJrSEJWRmVaMS9SMmxqSkJGMWdXN3pSakJCR25PU3g2UVR0VnJiNVo3SUExZHZsS3dDVmZNOXEreFZrSFVKRXJza3NRL2xyYUNBbXBQV0RBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInF0akpTYXIxT0JrdmFlcVNZcngzK3ZNSWg3NnV4VHg5a2lvVXMweHBNZFhnMHRpL2NiSkYycGNvbmo3VjQ5TEZ4QjgvQUYyazJNNG5xQ0ZqZEtjSERRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NzQ5NzUwNzA3Ojg0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRFVEVVVfTUVOREVaXCIsXG4gICAgXCJsaWRcIjogXCIyNjI2NTkxMjc2NDAxNjk6ODRAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU3NDk3NTA3MDc6ODRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI2MDU0NTIwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUGlJXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQaCsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJOQXRjTXZDQkFDSDZEeVRJQ0dCa1VEeFZxbWFicklVRUpqblhGZjNyMWU0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NTQ4Nzg3MjIsXCJjdXJyZW50SW5kZXhcIjoxMixcImRldmljZUluZGV4ZXNcIjpbMCw5LDEwLDEyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQaDAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJuN2I5dEhmVEhnWUFYOHlhZUNwQlJmak1mMmlkQ1FDZ3doUXFmMENZYnhFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NTQ4Nzg3MjEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAyNzEzMzExMzZcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQaDEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJITldEaDh1WXE1TEd2NnNTcTZyTkk4QndpUFJIUVdUbmpoSTc2ZTZNeGM4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NTQ4Nzg3MjIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBoMi5qc29uIjogIntcImtleURhdGFcIjpcImY3dTQ2QjEzZ0R2N29wdG5KWE9LRk5LdFFhTDZ3cVhtVUo1YnU2dVVQRGc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ1NDg3ODcyMixcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyLDRdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBoMy5qc29uIjogIntcImtleURhdGFcIjpcIjJqL3pzaWI1NlNMemljbGZuTHVZaGVEWFE5WmVDY2xUQ2RmM29SWEMrbW89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ1NDg3ODcyMixcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQaDQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJkMVQ2TGVyOENaM2YzTTd1dlVucXNmZEJuem5PMGRybFhkVHRtWkdXcXdrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NTQ4Nzg3MjIsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsNV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUGg1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiVzZHV2Q4Vlh4UXNKRXZ5TWJzZ3dqNUtucHJMcjY2RHNEYlIzeHpieGlzbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDU0ODc4NzIyLFwiY3VycmVudEluZGV4XCI6NixcImRldmljZUluZGV4ZXNcIjpbMCwxLDVdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBoNi5qc29uIjogIntcImtleURhdGFcIjpcInMyV2QyeWlLZVZtaHlLV0cvR3dFdFEydGxFSjBLdU9hZm9aNmRBa3dFNFk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ1NDg3ODcyMixcImN1cnJlbnRJbmRleFwiOjcsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSw1XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQaDcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJwUUYzRDZiZGJnQzczalhQUVBmbEFyMkpucjFjeEhBcXlFTjVxQ3VqczlJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NTQ4Nzg3MjIsXCJjdXJyZW50SW5kZXhcIjo4LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsNV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUGg4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiWWh2TytyQXpmNW5IVWova2Rwd1Q4QnJSSzgyZGNuV1NtVEZuTjFVZklDdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDU0ODc4NzIyLFwiY3VycmVudEluZGV4XCI6OSxcImRldmljZUluZGV4ZXNcIjpbMCw1LDldfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBoOS5qc29uIjogIntcImtleURhdGFcIjpcIk56STFXYlJQSEdPallmMmhMTzQ0bzNIYlF6eGs1cFJ6b2NxM3NEVG15akk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ1NDg3ODcyMixcImN1cnJlbnRJbmRleFwiOjExLFwiZGV2aWNlSW5kZXhlc1wiOlswLDksMTAsMTFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBoX18uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIrNk5tSjNHU1Y5dElibzgwa0l5Y0ZrZ3oyUDVTNFhxM1h0eDdmZVVxT21RPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NTQ4Nzg3MjIsXCJjdXJyZW50SW5kZXhcIjoxMixcImRldmljZUluZGV4ZXNcIjpbMCw5LDEwXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQaGYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI1WUZOemNqaHpPS1dJM21UTXV5YWpoZVpnN014V3ViVi9XR0RyZ05MRzY4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NTQ4Nzg3MTksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBoZy5qc29uIjogIntcImtleURhdGFcIjpcInMvVStnUFZaa25sTUNHNk1BNVhhMytIMkpGUGk4N2NSZGE5T0tZcFdpMFE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ1NDg3ODcxOSxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwzXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQaGguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJHZDBQd05JQVRFTkJJVUtjalU2c24yTVlqSmpycWFFcFBKZms4em1TeHpJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NTQ4Nzg3MTksXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDNdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBoaS5qc29uIjogIntcImtleURhdGFcIjpcImExbnR0bFBweERNaHFZUWR1MmdvdEdPZGxESWRDSWwwc0NMdWliRVVhSXM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ1NDg3ODcxOSxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsM119LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUGhqLmpzb24iOiAie1wia2V5RGF0YVwiOlwiV3ZhSGdraUh4RFIxazF3SlVaYndDMHNqSHJ2YUJiRkhkUmZZaG1VN3gvVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDU0ODc4NzE5LFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbMCwzXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQaGsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJGRTZmbnhnOHowZEg2R0NhQ1dEQkpxRm8ybjhUK3phTHN1TlRVTTZGS2pvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NTQ4Nzg3MTksXCJjdXJyZW50SW5kZXhcIjo2LFwiZGV2aWNlSW5kZXhlc1wiOlswLDZdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBobS5qc29uIjogIntcImtleURhdGFcIjpcIncxZ0thaTZJQnEybzJjYUN3OW4zQTI1WTZWT3piVGpiRXFMT0NwdkJzd0E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ1NDg3ODcyMCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUGhuLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZTl6N2NvVUx5a2JqekorZkpIa2hNZWRNb1Zmcjl3blNpL3pGajJBSFJadz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDU0ODc4NzIwLFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwxLDIsNF19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUGhvLmpzb24iOiAie1wia2V5RGF0YVwiOlwiS0M1NThWZ0FLWTZ5T3BVdTJNVzNIajhEcjNUdmludW9tNDgxNDdxT2NqRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDU0ODc4NzIwLFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwyLDRdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBocC5qc29uIjogIntcImtleURhdGFcIjpcInNRaFprSUZXb2FQY21FQm5OSTFPZi9xaFFMdHkzWkdjdklEK3I1QUtRaEE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ1NDg3ODcyMCxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiw0XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQaHEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJsc1RTelJxNm1SWnhGL2c4cTQ4d2pOQklnbERxdVB1a1gzalZKMmZzK0VVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NTQ4Nzg3MjAsXCJjdXJyZW50SW5kZXhcIjo2LFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsNF19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUGhyLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTWV1YXZ5UDYyVFU2THlQdE9CVzh3YjdxaHFGUkN4WVhFN1BKdWZ6Q1VHMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDU0ODc4NzIwLFwiY3VycmVudEluZGV4XCI6NixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQaHMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ0aTZJMWgrYWxhcC9LQ3BmeGtYS0FGcUNKVm5VNDNQZmZkbS92SVZKZUcwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NTQ4Nzg3MjAsXCJjdXJyZW50SW5kZXhcIjo4LFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsN119LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUGh0Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiQjllRkJoSXZBZENKeHZ1eUJDZ1hOVXZyKytwWnlNd3puYTBvREJ0NEV2TT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDU0ODc4NzIwLFwiY3VycmVudEluZGV4XCI6OSxcImRldmljZUluZGV4ZXNcIjpbMCwyLDddfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBodS5qc29uIjogIntcImtleURhdGFcIjpcImQvRDlhNnZUdEs2aTBSSWc4OUVVQ3BQUTRsRVFydlZkTFU3a3djNkU5Tms9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ1NDg3ODcyMCxcImN1cnJlbnRJbmRleFwiOjksXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUGh2Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiV0QzZFFSTVdYUzZmWmtMc3Z5NXBFQmlvbks1S1U2ZjZhYzMvRWg3b3BjWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDU0ODc4NzIwLFwiY3VycmVudEluZGV4XCI6MTEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMTAsMTFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBody5qc29uIjogIntcImtleURhdGFcIjpcIjZ2N0hnL3AxMDVWWjl1RUE0MTZLVnpLSmg2ZlVZTVMzWlFSK2FjSWpCK0k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ1NDg3ODcyMCxcImN1cnJlbnRJbmRleFwiOjExLFwiZGV2aWNlSW5kZXhlc1wiOlswLDExXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQaHguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJqWmdZMFZpZW5adm9zOVI4a0hNNXZhUnhDRXRQSlRvNkFLRDJwbmdlWlZRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NTQ4Nzg3MjAsXCJjdXJyZW50SW5kZXhcIjoxMixcImRldmljZUluZGV4ZXNcIjpbMCwxMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUGh5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiejB3eTRWWTFCWDlsUXhDbS9ZbkdBcUhQa1ZoTXRFODBTRUZncGZ1cWFtdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDU0ODc4NzIwLFwiY3VycmVudEluZGV4XCI6MTIsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDI2MzY5MTM4NlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBoei5qc29uIjogIntcImtleURhdGFcIjpcIkljZ3JLV2pxUm1zNmdqZDFMMWJGUXAvaW1Cd1lHZjlESHhra240a01GZk09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ1NDg3ODcyMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVz"  // PUT your SESSION_ID  

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ MENDEZ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • MENDEZ ᴛᴇᴄʜ』*\n youtube.com/@DUDUU_MENDEZ"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "FANTASTICS BOT",
  ownername:process.env.OWNER_NAME|| "Duduu_mendez",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-None-RMkn7loW3l2EmY3JV1pNT3BlbkFJOM2MSmCXkKhLFKg95Bdg",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "FANTASTICS"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
