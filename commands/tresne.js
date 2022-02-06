const i18n = require("../util/i18n");

module.exports = {
  name: "třešně",
  execute(message) {
    return message.channel
      .send(
        `Joooooooo třešně zrály.`
      )
      .catch(console.error);
  }
};
