import dotenv from "dotenv";
dotenv.config();

import { dirname, importx } from "@discordx/importer";
import { IntentsBitField, Partials } from "discord.js";
import { Client } from "discordx";

export const client = new Client({
	intents: [
		IntentsBitField.Flags.Guilds,
		IntentsBitField.Flags.GuildMembers,
		IntentsBitField.Flags.GuildMessages,
		IntentsBitField.Flags.GuildMessageReactions,
		IntentsBitField.Flags.GuildVoiceStates,
		IntentsBitField.Flags.MessageContent,
		IntentsBitField.Flags.DirectMessages,
	],
	partials: [Partials.Channel, Partials.Message],
	silent: false,
	simpleCommand: {
		prefix: "!",
	},
});

async function main() {
	await importx(`${dirname(import.meta.url)}/interactions/**/*.{ts,js}`);

	if (!process.env.DISCORD_TOKEN) {
		throw Error("DISCORD_TOKEN is not defined");
	}

	await client.login(process.env.DISCORD_TOKEN);
}

void main();

export default client;
