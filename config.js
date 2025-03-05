const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_59_03_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjksXG4gICAgICAgIDIxLFxuICAgICAgICA1NCxcbiAgICAgICAgMjIwLFxuICAgICAgICA0NCxcbiAgICAgICAgNyxcbiAgICAgICAgMTE4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTc0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzksXG4gICAgICAgIDk1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExMixcbiAgICAgICAgNDEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODAsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTksXG4gICAgICAgIDg4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyNixcbiAgICAgICAgOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTMsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTUyLFxuICAgICAgICA1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDkwLFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgODMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDgyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTksXG4gICAgICAgIDAsXG4gICAgICAgIDc4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI3LFxuICAgICAgICA0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTA2LFxuICAgICAgICA4OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxODIsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDExMixcbiAgICAgICAgNTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDMzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzksXG4gICAgICAgIDAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDQwLFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTUzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTAwLFxuICAgICAgICA5MixcbiAgICAgICAgMjM3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTA2LFxuICAgICAgICA1NixcbiAgICAgICAgMjEyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODUsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDYxLFxuICAgICAgICA3NSxcbiAgICAgICAgNyxcbiAgICAgICAgOTksXG4gICAgICAgIDY5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDU4LFxuICAgICAgICAxMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDcsXG4gICAgICAgIDUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAzMixcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDk1LFxuICAgICAgICA1MSxcbiAgICAgICAgODEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjE2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI0LFxuICAgICAgICA4NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI2LFxuICAgICAgICAyMixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDY2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDk1LFxuICAgICAgICA3NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTI0LFxuICAgICAgICA5NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMixcbiAgICAgICAgMzQsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDU1LFxuICAgICAgICA1NixcbiAgICAgICAgMjMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTU4LFxuICAgICAgICA0NixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjksXG4gICAgICAgIDU0LFxuICAgICAgICAzMixcbiAgICAgICAgMzgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjAyLFxuICBcImFkdlNlY3JldEtleVwiOiBcImFCMFlkMWtxbmpYKzBuWXJ2b1h4RjVvM05xdkNWUUhMRmEyMEprKzZsVXM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkJoTHJ4bFJmVEFTeU1idG5CR0prZ2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDJmNDgyZjctMGFhMi00ZGEyLWEwZjAtODZkNDhjM2I0MmExXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNyxcbiAgICAgIDc3LFxuICAgICAgMTY5LFxuICAgICAgOTgsXG4gICAgICAyNDIsXG4gICAgICAyMzYsXG4gICAgICA5MCxcbiAgICAgIDE2NixcbiAgICAgIDE0LFxuICAgICAgMjQxLFxuICAgICAgNDgsXG4gICAgICAxNjIsXG4gICAgICA0NyxcbiAgICAgIDIwMSxcbiAgICAgIDEyNCxcbiAgICAgIDYyLFxuICAgICAgMTc0LFxuICAgICAgOTEsXG4gICAgICAxOTYsXG4gICAgICAyMjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ5LFxuICAgICAgMjUsXG4gICAgICAxMDksXG4gICAgICAxNzgsXG4gICAgICA5MSxcbiAgICAgIDQzLFxuICAgICAgMjEzLFxuICAgICAgNjQsXG4gICAgICAxNDMsXG4gICAgICA2NCxcbiAgICAgIDEyMSxcbiAgICAgIDcyLFxuICAgICAgNTIsXG4gICAgICA5MixcbiAgICAgIDMsXG4gICAgICAxOTYsXG4gICAgICAxMjksXG4gICAgICAyNDYsXG4gICAgICAyNixcbiAgICAgIDE0OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJHU0xMQzg1QVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI4OTE4OTExMTA6ODJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0ODk5NTc3MTM5MjQ0OjgyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BHbGw5WUdFT2ZBb0w0R0dBWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibmFscGMrdER5UnZWQkw3TXJSdEFYYlNxK1dxMllsd0hzcVhuY0xNb1hUTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJKaEhXWmhPQm9kek9wVkZTOWVXcHFEWFpJYUtlNENIMGowVXB6TVdoRkVZeHo0NVJwTHJzdElIZ1RVYkw0dFB4NmJ5YkNjQXFkWWN5RGcvemRBMXNDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ4VVJ2Q3hvdGx5em1FUFBobllkdkNpOVJNRkhoZzROTGRJRUlYNXJXb2lnTXpVOWQ5amFJN0RyQnhqdm9GVk8wRDdSL2FHUTNxOEhTZzhXUlFxREVqUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjg5MTg5MTExMDo4MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDUxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDExNjg3NDcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKS0tcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpLSy5qc29uIjogIntcImtleURhdGFcIjpcInZMZ1JhbHlpRmhXQ1I2MmZCZytOd3puZTJvMXIzNkFKZWRmM01HS2xNWXM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc5MTM0OTQ4OSxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsM119LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9
"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


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
