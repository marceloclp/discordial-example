import { Injectable, SyntheticMessage } from "discordial";

@Injectable()
export class PrefixService {
  private readonly _prefix = "!";

  private isValid(message: SyntheticMessage, command: string): boolean {
    if (!message.content.startsWith(this._prefix + command))
      return false;
    return !message.author.bot;
  }

  public replyWithPong(message: SyntheticMessage): void {
    if (!this.isValid(message, "ping"))
      return;
    message.reply("pong");
  }

  public whatDateIsIt(message: SyntheticMessage): void {
    if (!this.isValid(message, "date"))
      return;
    message.reply(new Date().toDateString());
  }
}