const { Client, GatewayIntentBits } = require("discord.js");
const dotenv = require("dotenv");

dotenv.config();

const client = new Client({ intents: [] });

client.once("ready", () => {
  console.log("Helper code is firing!");
});

client.login(process.env.BOT_TOKEN);
