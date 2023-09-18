const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('coef')
    .setDescription('renvoie le fichier des coefs des matières'),
  async execute(interaction) {
    await interaction.reply({
      content: ":mortar_board: Tu as oublié le coeff. de tes matières ? Allez cadeau :",
      files: [{
        name: 'Coefficient_Ressource_RT.pdf',
        attachment: './Coefficient_Ressource_RT.pdf',
      }],
    });
  },
};