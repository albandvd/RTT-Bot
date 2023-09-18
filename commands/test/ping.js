const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Renvoi la latence du bot'),
  async execute(interaction) {
    const ping = Date.now() - interaction.createdTimestamp;
    await interaction.reply(":ping_pong:  Pong ! `" + ping + "ms`");
  },
};
