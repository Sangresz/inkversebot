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
  .text("Canali Telegram / Discord").row()
  .text("Eventi").row()
  .text("Contatti").row()
  .text("Crediti")
  .resized()
  .persistent();

bot.command("start", (ctx: Context) => {
  ctx.reply("Ciao, di cosa hai bisogno?", {
    reply_markup: keyboard,
  });
});

bot.hears("Canali Telegram / Discord", (ctx: Context) => {
  ctx.reply("Usa questi link per entrare nei canali e condividerli con altri! (a capo) Telegram: https://t.me/+sDYYl18Rv9UwYmE8 , Discord: https://discord.gg/yXeqJZts");
})

bot.hears("Eventi", (ctx: Context) => {
  ctx.reply("In questa sezione troverai gli eventi disponibili attualmente o in programma. Clicca su un evento per sapere di più!");
})

bot.hears("Contatti", (ctx: Context) => {
  ctx.reply("Se noti qualsiasi tipo di problema nei gruppi Telegram o Discord, sentiti libero di scrivere a queste persone \n ... \n Hai un idea o suggerimento da dare alla community? Ti va di collaborare direttamente allo sviluppo della stessa? Contattami! \n ... ");
})

bot.hears("Crediti", (ctx: Context) => {
  ctx.reply("Niente sarebbe stato così senza l'aiuto di queste persone: \n ... Owner \n ... Modder/Programmatore  \n ... Designer \n ");
})

bot.start();
console.log("Bot is up and running!");
Deno.serve((_req) => new Response("Bot is up and running!"));
