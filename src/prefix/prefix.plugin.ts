import { DiscordialPlugin, BindEvent, DiscordEvents, Inject, Message, SyntheticMessage } from "discordial";
import { PrefixService } from "./prefix.service";

@DiscordialPlugin()
export class PrefixPlugin {
  constructor(
    @Inject(PrefixService) private readonly prefixService: PrefixService,
  ) {}

  @BindEvent(DiscordEvents.MESSAGE)
  public replyWithPong(@Message() message: SyntheticMessage) {
    this.prefixService.replyWithPong(message);
  }

  @BindEvent(DiscordEvents.MESSAGE)
  public whatDateIsIt(@Message() message: SyntheticMessage) {
    this.prefixService.whatDateIsIt(message);
  }
}