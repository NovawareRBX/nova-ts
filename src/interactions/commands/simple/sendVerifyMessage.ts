import { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } from "discord.js";
import { Discord, SimpleCommand, SimpleCommandMessage } from "discordx";

@Discord()
export class sendVerifyMessage {
	@SimpleCommand({ name: "sendVerifyMessage" })
	async sendVerifyMessage(command: SimpleCommandMessage) {
		const embed = new EmbedBuilder()
			.setDescription(
				"### <:novawareemoji:1276797939074727948> Welcome to Novaware!\nIn order to gain access to the rest of the server, you need to verify your Roblox account.\n\nGet started by clicking the **Verify with Roblox** button  below.",
			)
			.setColor(13122681);

		const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
			new ButtonBuilder()
				.setCustomId("verify")
				.setLabel("Verify with Roblox")
				.setStyle(ButtonStyle.Secondary)
				.setEmoji("<:nova_roblox:1278482136881430650>"),
		);

		if (command.message.channel.isSendable()) {
			await command.message.channel.send({ embeds: [embed], components: [row] });
		}
	}
}
