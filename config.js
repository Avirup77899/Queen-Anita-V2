//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Asia, Kolkata";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "919331218857";
global.owner = process.env.OWNER_NUMBER || "919331218857";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://telegra.ph/file/a22200a780671e0e32383.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOERXVFFYZ0FjTnNFS2xJSUM4MTdaczUzWkhvSEU1biswNlpZdUQzTk1YST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOURuSUhaL0FrUU04bXB6ZEN1VnhESnNycWt6MGxIOW5nUnp3RlZXa0MyYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyTWt4clNwUTRBd3VaTUNnblUrNEVVVWFRdVpRMzkwY25JdGhHa09HZFdnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiV3FUc1U0cHh6bTFQU29QVW9YN29VUno4Y3dkaDNlWU0rZDBGVXhkOTEwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9JMGZGcXl5bTVwdi9IY3k3b1BOQWxCazJtOVg3NkU5bGxjZ09vWHgxMHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhDQmJVMzl4NnorYmxlaC9YelovNTFRRWxtSkdlbzB3WG1qWmJMbDJlanM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0lWc2ZQYTZvcFRxMWxaUVR2UHFSdHBMRmN5cGtHU0RhWXpETHFTVldWST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVROSHo0S1QvN3ZpWm5UREErTkFTelBZTXoyWS95VTJ5dTFOMjNDcm1sYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdZV1V6UGlrZjV6YkVIS2tRMEMzUkJaa2VkTElqVGdhTStUMFAvdGVDVUROcndHTHhUZXhnYVpMVjBxTHVsc3h2eXR3YTVSMjlKMTdqZHpJd1VUZmdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk5LCJhZHZTZWNyZXRLZXkiOiJlR1RwT3FvNUFUcGphZFFMUHhYdlZHaGg0WkJIbnJtZC9IbnJsVnNUNXQwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJZUUxlUnFoTFM2NkNiR2tVMExhNFBnIiwicGhvbmVJZCI6IjU0NGNhMjJkLTU1OTYtNDVmMS04MmExLTAwZjU1MzNlMGM0MyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPTU1Ca0s3MmVRdXh2cGlaNjhGMmlhMHZ3cm89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRStmcDYzcUVPU0dWa0JwVzZCYVpOUWVtbExVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkRLRUUxNDhFIiwibWUiOnsiaWQiOiI5MTkzMzEyMTg4NTc6MzNAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BhNHQ4WUhFS2kzK0xjR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlhvaC9tbjB3V0hzRTErZ1dZK2lORHBPbGVqeWdodlpjMCsrYXYyNkZrUmM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjM2bWpZN3g5dExjUHNFdTA0aUNHNGR1eUxDUWpFNElKeW5PZ2lIcjJLR1dMeUtGZjdhY3NaUXhVaTE2dmZMTTh5R3VTT1RHR0hjRmRnRkV3L01aUUJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJVUnRidUpNdm92d3IyYWVlL3gzMkxkUFQ1YWJRL1Jnb1NZTEJNTlUza2pJS29JZTlrTWRvbzZram0vNndnTmFLem80Z2pybjhXdFQ4YjlOeHBCMXRqQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkxOTMzMTIxODg1NzozM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWNklmNXA5TUZoN0JOZm9GbVBvalE2VHBYbzhvSWIyWE5Qdm1yOXVoWkVYIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI3OTI5MjcwfQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`Avirup-MD™`",
  author: process.env.PACK_AUTHER || "Avirup",
  packname: process.env.PACK_NAME || "A V I R U P",
  botname: process.env.BOT_NAME || "King Avirup",
  ownername: process.env.OWNER_NAME || "Avirup",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
