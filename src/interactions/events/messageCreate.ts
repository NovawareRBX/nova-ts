import { ArgsOf, Client, Discord, Guard, On } from "discordx";
import { NotBot } from "@discordx/utilities";

@Discord()
export class messageCreate {
	@On({ event: "messageCreate" })
	@Guard(NotBot)
	messageCreate([message]: ArgsOf<"messageCreate">, client: Client, guardPayload: any) {
        console.log(`Message from ${message.author.tag}: ${message.content}`);
		client.executeCommand(message);
    }
}
