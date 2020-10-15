import { App } from '@slack/bolt';

const bot = new App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.SLACK_BOT_TOKEN,
});

(async () => {
  const port = process.env.PORT || 3000;
  await bot.start(port);

  console.log(`Change Notification Bot is listening on port ${port}`);
})();
