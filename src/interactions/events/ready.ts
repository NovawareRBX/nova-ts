import { GuildMember } from "discord.js";
import { ArgsOf, Client, Discord, On } from "discordx";

@Discord()
export class ready {
	@On({ event: "ready" })
	ready(_:any, client: Client, guardPayload: any) {
        console.log(`Ready! Logged in as ${client.user?.tag}`);
        void client.initApplicationCommands();
    }

    @On({ event: "guildMemberAdd" })
    async onGuildMemberAdd([member]: ArgsOf<"guildMemberAdd">, client: Client) {
        if (member.guild.id !== "1169775476739411978") return;
        member.roles.add("1169775476756201633");
    }
}
