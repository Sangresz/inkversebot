import { load } from "https://deno.land/std@0.224.0/dotenv/mod.ts";
import { Bot, Context, Keyboard } from "https://deno.land/x/grammy@v1.26.0/mod.ts";

// load the environment variables from a .env file
const env = await load();

// Create an instance of the `Bot` class and pass your bot token to it.
const TELEGRAM_TOKEN: string | undefined = env["TELEGRAM_TOKEN"];
if (!TELEGRAM_TOKEN) {
  throw new Error("TELEGRAM_TOKEN is not defined.");
}
const bot = new Bot(TELEGRAM_TOKEN); // <-- put your bot token between the ""

const keyboard = new Keyboard()
  .text("Fumetti e animazione").row()
  .text("Videogames").row()
  .text("Roleplay").row()
  .text("Assistenza")
  .resized()
  .persistent();

bot.command("start", (ctx: Context) => {
  ctx.reply("Ciao, di cosa hai bisogno?", {
    reply_markup: keyboard,
  });
});

bot.hears("Fumetti e animazione", (ctx: Context) => {
  ctx.reply("Messaggio fumetti");
})

bot.hears("Videogames", (ctx: Context) => {
  ctx.reply("Messaggio videogames");
})

bot.hears("Roleplay", (ctx: Context) => {
  ctx.reply("Messaggio roleplay");
})

bot.hears("Assistenza", (ctx: Context) => {
  ctx.reply("Contattare @Draizer per supporto");
})

bot.start();