const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('invite')
    .setDescription('renvoi le lien pour partager le server'),
  async execute(interaction) {
    await interaction.reply("Tu veux inviter des gens ? Trop bien ! :tada: \n Lien d'invitation : https://discord.gg/but-rt");
  },
};
