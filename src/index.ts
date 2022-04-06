import dotenv from "dotenv";
dotenv.config();

import { Client, Intents, Interaction, Message } from "discord.js";

import { onInteraction } from "./events/onInteraction";
import { onReady } from "./events/onReady";

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.once("ready", () => {
  console.log(`Logged in as ${client.user?.tag}!`);
});

client.on("ready",async () => await onReady(client))

client.on(
  "interactionCreate",
  async (interaction: Interaction) => await onInteraction(interaction)
);

client.login(process.env.DISCORD_TOKEN);
