import { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } from "discord.js";
import { Discord, SimpleCommand, SimpleCommandMessage } from "discordx";
import generateCase from "../../../utils/generateCase.js";
import { errorEmbed, successEmbed } from "../../../utils/embed.js";

@Discord()
export class sendVerifyMessage {
	@SimpleCommand({ name: "kick_alt" })
	async sendVerifyMessage(command: SimpleCommandMessage) {
        const required_roles = ["1277325690664124428"];
        if (!command.message.member?.roles.cache.some((role) => required_roles.includes(role.id))) return;

		const embed = new EmbedBuilder()
			.setDescription(
				`### <:xxx:1280251418166689903> Sorry, this account isn't allowed into Novaware.\n\nWe have detected that this account may be an alternative account, which are not allowed inside our server. If you believe this is a mistake, please contact a staff member.`,
			)
			.setColor("#f04747");

		const user_id = command.argString.split(" ")[0];
		const member = await command.message.guild?.members.fetch(user_id);
		if (!member) {
			return command.message.reply({
				embeds: [errorEmbed("User not found.", "The user you are trying to kick is not in the server.")],
			});
		}

		let success = false;
		try {
			await member.send({
				embeds: [embed],
			});
			success = true;
		} catch (error) {}

		try {
			await member.kick("Alternative Account");
		} catch (error) {}

		return command.message.reply({
			embeds: [successEmbed("User Kicked", `The user <@${user_id}> has been kicked from the server.`)],
		});
	}
}
