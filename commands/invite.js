const i18n = require("../util/i18n");

module.exports = {
  name: "invite",
  description: i18n.__("invite.description"),
  execute(message) {
    return message.member
      .send(
        `Nejsem k mání na pozvání na jiný server`
      )
      .catch(console.error);
  }
};
