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
  .text("Yes, they certainly are").row()
  .text("I'm not quite sure").row()
  .text("No. 😈")
  .resized()
  .persistent();

bot.hears("Yes, they certainly are", (ctx: Context) => {
  ctx.reply("Great! Let's get started!");
})

bot.hears("I'm not quite sure", (ctx: Context) => {
  ctx.reply("No worries! Take your time to think about it.");
})

bot.hears("No. 😈", (ctx: Context) => {
  ctx.reply("That's okay! Maybe next time.");
})

bot.command("start", (ctx: Context) => {
  ctx.reply("Hello! Are you ready to start?", {
    reply_markup: keyboard,
  });
});

bot.start();