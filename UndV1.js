const Discord = require('discord.js');
const client = new Discord.Client();
launch = false;
const TOKEN = process.env.TOKEN;
var Player=[];
vote = 0;
teamMember=0;
Choisbit = 0;
a=true;
undercover=" ";
valeur="";
Uvaleur="";
Rword = ["Overwatch", "Fruit", "CSGO","Fourchette","baleine","patron","tacos","rateau","telephone","voiture","stylo","film","bite","fusée","goku","baignoire","apple","instagram","thé","enceinte","TFT","Rocket League","Man VS Wild","Basketball","lac","Poulet","universitée","cinéma","trampoline","jacuzzi","quiche","boxe","guitare","banc","herbe","GOT","Marvel","cheville","disney","machine à laver","japon","Teamspeak","four","tasse","manga","scotch","sabre","squeezie","pepsi","link","lunette","Trotinette","Pamplemousse","Boire","bonnet","Entrée","Camera","Arbre","Camping","Livre","Chevalier","Ronaldo","Omelette","Football","Skate","Physique","Lycéen","Sauce algérienne","Lipton","Deezer","Arc","Python","Programation de film","Rap américain","Shuriken","Squeezie","Sardoche","Marseille","Undercover","Los angeles","Courir","Célibataire","Appartement","Playmobil","Call of Duty","cheval","Shrek","Ping Pong","Anglais","Surf","Pacific Rim","Interstellar","Caramel","Gateau","Milka","Bateau","Pécher","Nager","Espace","Nordique","Hagrid","Voldemort","Fortnite","Addition","Division","Feuille de papier","Ableton","Celui dont on ne prononce pas le nom","Chapeau","Jaeger(Pacific Rim)","Mozilla Firefox","One Piece"];
Fword = ["Deadgame", "Légume", "Valorant","couteau","requin","stagiaire","pizza","pelle","tablette","moto","crayon","cinema","chatte","avion","vegeta","douche","samsung","twitter","café","casque","League of legend","Trackmania","koh lanta","Handball","mer","Dinde","lycée","théatre","balançoire","piscine","pizza","lutte","violon","chaise","weed","The Witcher","DC","genou","pixar","lave-vaisselle","chine","Discord","micro-onde","bol","bande dessinée","colle","couteau","gotaga","coca","zelda","lentille","vélo","Orange","Manger","écharpe","Dessert","Appareil photo","Fleur","Hotel","Cahier","Samouraï","Neymar","Oeuf","Basketball","Trotinette","Chimie","Colégien","sauce Samouraï","Thé froid","Spotify","Arbalette","Javascript","Programation de code","Rap français","Nunchaku","Cyprien","Corobizar","Paris","Loup Garou","New york","Marcher","En couple","Maison","Lego","Battlefield","âne","L'âne de Shrek","Tennis","Espagnol","Paddle","Godzilla","Gravity","Sucre","Meringue","Kinder","Péniche","Chasser","Flotter","Univers","Romain","Dumbledore","Harry Potter","PUBG","Soustraction","Multiplication","Feuille d'arbre","Flstudio","Voldemort","Casquette","Kaijū(Pacific Rim)","Google Chrome","Naruto"];
merde =0;
choisi=0;
console.log(Rword.length);
console.log(Fword.length);

client.on('message', message => {
  if (message.content === 'uc-avatar') {
    message.reply(message.author.displayAvatarURL());
  }
});

client.on('ready', () =>{
	client.user.setPresence({ activity: { name: 'Powered by un dev éclaté' }, status: 'online' })
  		.then(console.log)
		 .catch(console.error);
	
})

client.on('message', message => {
	switch (message.content.toLowerCase()) {
		case 'uc-reset':
			resetBot(message.channel);
			break;

	}
});

function resetBot(channel) {
	channel.send('Reset...')
		.then(msg => client.destroy())
		.then(() => client.login(TOKEN));
	launch = false;
	var Player = [];
	vote = 0;
	teamMember = 0;
	Choisbit = 0;
	a = true;
	undercover = " ";
	valeur = "";
	Uvaleur = "";
	merde = 0;
	choisi = 0;

		}

client.on('message', message=>{
	if(message.content === 'uc-rule'){
		message.channel.send('commande fonctionnel');
		const embed = new Discord.MessageEmbed()
		.setTitle('Starting...')
		.setThumbnail('https://cdn.discordapp.com/attachments/706571623741784095/706571882702307468/loupe_318-1787.jpg')
		.setDescription("Explication de l'undercover(min 3 joueurs/ min 3 tours pour les mots)")
		.addField("Régle:","Tous le monde à le même mot sauf un qui est l'undercover.\n Il à un mot différent des autres mais proche.\nL'objectif est de le retrouver en envoyant des messages un par un dans le chat.\nQuand vous savez qui est l'undercover, VOTEZ!!\n(on écrit de bas en haut pour les mots)")
		.addField("Commande:","Faites uc-join pour rejoindre la partie. Ex: uc-join \nFaites 'uc-launch' pour démarrer la game(assurez-vous que tout le monde a rejoint)\nFaites uc-vote @pseudo pour voter.Ex:uc-vote @Lol\n + de 100 groupes de mots différents.");
		message.channel.send(embed);
	}
})

client.on('message',message=>{
	msg=message.content.toLowerCase();
	mention= message.mentions.users.first();
	
	if (message.content === 'uc-fete') {
		message.delete();
		message.channel.send("Joyeuse fête des mères");
	}
	

	if (message.content === 'uc-join'){
		if(launch===true){
			message.channel.send("Game en cours, fais pas le fou.");
	}
		if(launch === false) {
			teamMember = teamMember + 1;
			message.channel.send(message.author.toString() + ' a rejoint la partie!');
			console.log(message.author.username);
			Player.push(message.author.id);
	}}
	
	if (msg.startsWith('uc-send')) {
		if(mention== null){return;}
		message.delete();
		mentionMessage= message.content.slice(8);
		mention.send(mentionMessage);
	}

	if (msg.startsWith('!chut')) {
		message.delete();
		message.channel.send("Chut!!!!!");
	}
	
	
	if (msg.startsWith('uc-ment')) {
		console.log(msg);
		if (mention == null) { return; }
		message.delete();
		if (msg == "uc-ment "+ "<@" + undercover + ">") {
			mention.send("Votre mot est "+ Uvaleur);
			console.log("a");
		
		}
		if (msg != "uc-ment " +"<@" + undercover + ">") {
			mention.send("Votre mot est " +valeur);
			console.log("b");

		}

	}

	
	
	

	if (msg.startsWith('uc-vote')) {
		if (mention == null) {return;}
		if (launch === false) {
			message.channel.send("Crée une game si tu veux voter CHACAL");

		}
		if(launch===true){
			message.delete();
			mentionMessage = message.content.slice(8);
			message.channel.send(message.author.toString()+' a voté pour '+mentionMessage);
			vote=vote+1;
			console.log(vote);
			console.log(Player.length);
			if (vote >= Player.length) {
				message.channel.send("Partie terminé!!!!!");
				message.channel.send("L'undercover était " + "<@" + undercover + ">");
				message.channel.send("Son mot était " + Uvaleur);
				message.channel.send("L'autre mot était " + valeur);
				vote=0;
				Player=[];
				undercover=" ";
				valeur= " ";
				Uvaleur=" ";
				merde=0;
				choisi=0;
				launch=false;
				teamMember = 0;
				Choisbit =0;

		}
	}
		
	}



	if (message.content === 'uc-launch'){
		if (launch === true) {
			message.channel.send("Partie déja en cours donc..... c'est NON.");
		}
		if(launch===false){
			if (teamMember >=2){
				message.channel.send("Démarrage de la partie");
				launch=true;
				Player.forEach(function(element){
					message.channel.send("uc-send "+"<@"+element+">"+" Vous êtes dans la partie.");

				})
				Choisbit =Math.floor(Math.random() *2);
				console.log(Choisbit);
				choisi = Math.floor(Math.random() * Rword.length);
				console.log(choisi);
				merde = Math.floor(Math.random() * Player.length);
				console.log(merde);
				if (Choisbit == 0) { //Rword intru 
					undercover = Player[merde];
					console.log(Player[merde]);
					console.log("Rword");
					console.log("valeur");
					valeur = Fword[choisi];
					console.log(Fword[choisi]);
					Uvaleur = Rword[choisi];
				}
				if (Choisbit == 1) { //Fword intru 
					undercover = Player[merde];
					console.log(Player[merde]);
					console.log("Fword");
					console.log("valeur");
					valeur = Rword[choisi];
					console.log(Rword[choisi]);
					Uvaleur = Fword[choisi];
				}
				console.log(Fword[choisi]);
				message.channel.send("<@" + Player[Math.floor(Math.random() * Player.length)] + "> Commence!")


				Player.forEach(function(elem){
					console.log(elem)
					message.channel.send("uc-ment " + "<@"+elem+">");
				
					
				})
		}
	}



	}

})

client.on("message", async message => {
	if (message.author.bot) return;
	if (message.content.startsWith("uc-ping")){
		const m = await message.channel.send("uc-ping");
		m.edit(`La latence est de ${m.createdTimestamp - message.createdTimestamp}ms.`);
	}
	

})



client.login(TOKEN);
