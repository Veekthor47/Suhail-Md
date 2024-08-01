const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://DARKSHAN:3000@cluster0.t1wsjlv.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '2347040216716') : "2347040216716";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '2347040216716') : "2347040216716";




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
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2347040216716,2347040216716";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "2347040216716,2347040216716";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,2347040216716";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_16_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDUzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTMyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjksXG4gICAgICAgIDYyLFxuICAgICAgICA3NCxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAzLFxuICAgICAgICA3MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTc0LFxuICAgICAgICAyNixcbiAgICAgICAgMzIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDQsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDc3LFxuICAgICAgICAxOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDg2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NixcbiAgICAgICAgMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDksXG4gICAgICAgIDE0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTUwLFxuICAgICAgICA0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDQyLFxuICAgICAgICA5NCxcbiAgICAgICAgNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzksXG4gICAgICAgIDgwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzksXG4gICAgICAgIDEzNixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM1LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODgsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTQsXG4gICAgICAgIDY3LFxuICAgICAgICAxODQsXG4gICAgICAgIDI0LFxuICAgICAgICA3NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4NixcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjAzLFxuICAgICAgICA4MyxcbiAgICAgICAgNDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjksXG4gICAgICAgIDkzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDQwLFxuICAgICAgICAzNixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNixcbiAgICAgICAgNTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTksXG4gICAgICAgIDE0MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjUxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIk9SWFZSOU54TnpLa3pWcGo2eEpEV2lpcVp5eXZIemk4a1pVeE0ydHdhYzg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA0MDIxNjcxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjQ2MUExOUY0RDlENEJGRDkxRDA2RjU1RDU0QTA1NkVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNTE0NTc4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA0MDIxNjcxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMjQyOUY2OUYxMjI4MzZEMjUyQTc1NDg1Mjc2ODNCOERcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNTE0NTc4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkxkS21CQi1pVEpLcDRFVjlsQ3l1aUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjhkMmViOTUtM2ExYi00NGQ0LTgxZmQtNzdiMTUzOTQzZTIzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MixcbiAgICAgIDk0LFxuICAgICAgMTI0LFxuICAgICAgMjA0LFxuICAgICAgMjEyLFxuICAgICAgODMsXG4gICAgICAxNjYsXG4gICAgICAxNzgsXG4gICAgICAxMzAsXG4gICAgICAxNjIsXG4gICAgICAyMTYsXG4gICAgICA4NSxcbiAgICAgIDE1NixcbiAgICAgIDExNSxcbiAgICAgIDIwMCxcbiAgICAgIDcxLFxuICAgICAgMTU3LFxuICAgICAgMjMzLFxuICAgICAgMTIsXG4gICAgICAxOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTMsXG4gICAgICAzNCxcbiAgICAgIDIzNCxcbiAgICAgIDI5LFxuICAgICAgMTY1LFxuICAgICAgMjE1LFxuICAgICAgMTEyLFxuICAgICAgMTIxLFxuICAgICAgMTYzLFxuICAgICAgMjM1LFxuICAgICAgMjQwLFxuICAgICAgMjE0LFxuICAgICAgMTU4LFxuICAgICAgNjYsXG4gICAgICAyNTMsXG4gICAgICAxLFxuICAgICAgNzEsXG4gICAgICA5NyxcbiAgICAgIDIxNixcbiAgICAgIDY1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlJSUDlOMUJXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDQwMjE2NzE2OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0ODY1NzY0Mjk3MTM4NjoxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIlZFRUtUSE9SIOKEolwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0ltOHovVUdFSXY1cmJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNGJzVUlPMDZ5YlN3c3dKcjBWdkFYb202NWRXQ0QvbGJQZFVhM1phMnRBZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ2VVM3WGhlR2JueEowd1l1MnhCd2VWd0hWZTkxc1ZILzY3OXBxV0V2RmxOa3g4M3lpVkgwT21MWXcwRCtyQU1aK0dmei9RSHA3dGl2V0NnLzNqUTNBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ0TEdaMWoxN1lCTDhGYjVHOHVMWXlOL3NxeUxhODRpM3U0MzRRZ1ZDTzBOQUJRSzJtem9SQnUvaUpzTUREbko1STJRZStpOXgrMTN0amxmWEt1VzZDUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDQwMjE2NzE2OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjUxNDU3NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBVMVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUFUxLmpzb24iOiAie1wia2V5RGF0YVwiOlwiemdyeUxLNG1sRVhZdmFPQVdndXFWVHNYYnJzQjg1T1BOZUgxZmVOcTVoST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODU3MjgxNTQ1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI1MTQ1NzY5ODBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "VEEKTHOR™️",
  packname: process.env.PACK_NAME || "VEEKTHOR™️",
  botname : process.env.BOT_NAME  || "VEEKTHOR™️",
  ownername:process.env.OWNER_NAME|| "VEEKTHOR™️",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
