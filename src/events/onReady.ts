import { Client } from "discord.js";
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import {CommandList} from "../commands/_CommandList"

export const onReady = async (client: Client) => {
  const rest = new REST({ version: "9" }).setToken(
    process.env.DISCORD_TOKEN as string
  );

  const commandData = CommandList.map((command) => command.data.toJSON());

    await rest.put(
    Routes.applicationGuildCommands(
      process.env.clientId as string,
      process.env.guildId as string
    ),
    { body: commandData }
  );

   console.log("Discord ready!");
};
