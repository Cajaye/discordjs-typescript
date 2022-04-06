import { Command } from "../interfaces/Command";
import {SlashCommandBuilder} from "@discordjs/builders";

export const poop: Command = {
    data: new SlashCommandBuilder().setName("poop").setDescription("poop stuff"),
    run: async(interaction) => {
        interaction.reply("poop")
    }
};