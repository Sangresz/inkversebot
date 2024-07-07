import { load } from "https://deno.land/std@0.224.0/dotenv/mod.ts";
import { Bot, Context } from "https://deno.land/x/grammy@v1.26.0/mod.ts";

// load the environment variables from a .env file
const env = await load();

// Create an instance of the `Bot` class and pass your bot token to it.
const TELEGRAM_TOKEN: string | undefined = env["TELEGRAM_TOKEN"];
if (!TELEGRAM_TOKEN) {
  throw new Error("TELEGRAM_TOKEN is not defined.");
}
const bot = new Bot(TELEGRAM_TOKEN); // <-- put your bot token between the ""

// You can now register listeners on your bot object `bot`.
// grammY will call the listeners when users send messages to your bot.

// Handle the /start command.
bot.command("start", (ctx: Context) => {
  let reply_parameters = undefined
  if(ctx.msg) {
    reply_parameters = { message_id: ctx.msg.message_id }
  }
  ctx.reply("Welcome! Up and running.");
  ctx.reply(
    '<b>Hi!</b> <i>Welcome</i> to <a href="https://grammy.dev">grammY sangres</a>.',
    { parse_mode: "HTML", reply_parameters: reply_parameters },
  )
})
// Handle other messages.
bot.on("message", (ctx: Context) => {
  ctx.reply("Got another message!")
});

// Now that you specified how to handle messages, you can start your bot.
// This will connect to the Telegram servers and wait for messages.

// Start the bot.
bot.start();