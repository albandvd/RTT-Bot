# RTT-Bot

## Instalaltion 

### To run this app you need to have js installed on your pc 

### Creation of the application 

You need to create an application for that :

1/ Go to https://discord.com/developers
2/ "New Application"
3/ OAuth2
4/ URL Generator => tick Bot 
5/ Tick administrator 
6/ Copy the link and past it on your navigator

### Initialisation of the package
```
  yarn init
```

### Installation of the dependencies 

```
  yarn add discord.js
  yarn add dotenv
```

### Creation of the .env file 

```
TOKEN= "your token findable here https://discord.com/developers"
CLIENTID= "your client id findable here https://discord.com/developers"
GUILDID= "findable by clicking one your server"
```

### Running the bot 

```
yarn node .\deploy-commands.js
yarn node .\index.js
```