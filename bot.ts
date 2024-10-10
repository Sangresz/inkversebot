import "jsr:@std/dotenv/load";
import { Bot, Context, Keyboard } from "https://deno.land/x/grammy@v1.26.0/mod.ts";

// load the environment variables from a .env file
const TELEGRAM_TOKEN = Deno.env.get("TELEGRAM_TOKEN");

// Create an instance of the `Bot` class and pass your bot token to it.
if (!TELEGRAM_TOKEN) {
  throw new Error("TELEGRAM_TOKEN is not defined.");
}
const bot = new Bot(TELEGRAM_TOKEN);

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
console.log("Bot is up and running!");