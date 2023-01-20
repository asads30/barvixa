const TelegramBot = require('node-telegram-bot-api');
const token = '5928218946:AAGopuQqFk_lY3RVl_YPKdGSpXYmlKV5Pdo';
const bot = new TelegramBot(token, {polling: true});
bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1]; 
  bot.sendMessage(chatId, resp);
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `Привет, ${msg.chat.first_name}

Мы рады приветствовать тебя в нашем новом боте!`, {
  reply_markup: {
      "inline_keyboard": [
          [
              {
                  "text": "Меню бара",
                  "web_app": {
                    "url": "https://qwerty.wpaka.uz/?ver"
                  }            
              }
          ],
          [
            {
                "text": "Меню кухни",
                "web_app": {
                  "url": "https://qwerty2.wpaka.uz/?ver"
                }            
            }
        ]
      ],
      hide_keyboard: true
  }
});
});