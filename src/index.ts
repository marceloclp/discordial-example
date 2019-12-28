import { Discordial } from "discordial";
import { PrefixPlugin } from "./prefix/prefix.plugin";

const token = "your discord bot token";
const discordial = new Discordial(token, {
  plugins: [PrefixPlugin]
});