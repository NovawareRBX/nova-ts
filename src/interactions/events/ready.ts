import { GuildMember, Message } from "discord.js";
import { ArgsOf, Client, Discord, On } from "discordx";
import { getMariaConnection } from "../../services/mariaService.js";
import noblox from "noblox.js";
import generateCase from "../../utils/generateCase.js";

@Discord()
export class ready {
	@On({ event: "ready" })
	async ready(_: any, client: Client, guardPayload: any) {
		console.log(`Ready! Logged in as ${client.user?.tag}`);

		const guild = client.guilds.cache.get("1169775476739411978");
		const channel = guild?.channels.cache.get("1301571590915625000");

		const channel1 = guild?.channels.cache.get("1304853764380819626");
		const channel2 = guild?.channels.cache.get("1195524350015721493");

		// if (channel1?.isSendable && channel2?.isSendable && channel1.isTextBased() && channel2.isTextBased()) {
		// 	channel1.send("⚡ Double XP is now active!");
		// 	channel2.send("⚡ Double XP is now active!");
		// }

		let message: Message<true>;
		async function announceUnverified() {
			if (message) {
				message.delete();
			}

			if (channel && channel.isSendable()) {
				message = await channel.send(
					"<@&1169775476756201633> You have not yet verified and gained access to the server.",
				);
			}
		}

		// announceUnverified();
		// setInterval(announceUnverified, 1000 * 60 * 60 * 24 * 7); // 1 week

		void client.initApplicationCommands();
	}

	@On({ event: "guildMemberAdd" })
	async onGuildMemberAdd([member]: ArgsOf<"guildMemberAdd">, client: Client) {
		if (member.guild.id !== "1169775476739411978") return;
		try {
			member.roles.add("1169775476756201633");
		} catch (error) {}
	}
}
