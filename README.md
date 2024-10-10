# InkVerseBot

Just a simple telegram bot used to give information about the inkverse project.

The bot is available [here](https://web.telegram.org/k/#@inkversebot)

# Local Development

```sh
git clone git@github.com:Sangresz/inkversebot.git
cd inkversebot
cp .env.example .env # YOU NEED TO EDIT THE TELEGRAM TOKEN TO THE TOKEN OF THE BOT THAT YOU WANT THESE HANDLERS TO LINK TO
deno task main
```

You need to have `deno` installed in order to start the project. If you have [mise](https://mise.jdx.dev/getting-started.html) you can install `deno` like this

```sh
mise install
```