// Commands
// Moderation commands
game.modding.commands.info = function(){
  game.modding.terminal.echo(" | Total amount of aliens: "+game.aliens.length)
  game.modding.terminal.echo(" | Total amount of asteroids: "+game.asteroids.length)
  game.modding.terminal.echo(" | Total amount of players: "+game.ships.length+"\n")
  if (BannedList.length === 0) {names = "None"}
  else {names = BannedList}
  game.modding.terminal.echo(" | Banned players: "+names)
  game.modding.terminal.echo("\n | List of players and their IDs:\n");
  for (let i=0; i<game.ships.length; i++){
    game.modding.terminal.echo(" | id: "+i+", Name: "+game.ships[i].name+", Type: "+game.ships[i].type+"\n | Coordinates: X: "+game.ships[i].x+", Y: "+game.ships[i].y); 
  }
  game.modding.terminal.echo("\n");
};

idle = function(who){
  game.modding.terminal.echo("the player: "+game.ships[who].name+", id: "+who+" has been blocked\n");
  game.ships[who].set({idle: true});
  Exit_screen(game.ships[who]);
  if (game.ships[who].type !== 191) {
    spectator_ship(game.ships[who]);
  }
  game.ships[who].setUIComponent({id: "Spectate",visible: false});
  game.ships[who].setUIComponent({id: "Menu_",visible: false});
  game.ships[who].setUIComponent({id: "Regen",visible: false});
};

unidle = function(who){
  game.ships[who].setUIComponent(Menu_);
  game.ships[who].setUIComponent(Spectate);
  game.ships[who].setUIComponent(Regen);
  game.ships[who].set({idle: false});
  game.modding.terminal.echo("the player: "+game.ships[who].name+", id: "+who+" has been unblocked\n");
};

kick = function(who,reason="Disturbing duels"){
  for (let ship of game.ships) {AddText(ship,"Player: "+game.ships[who].name+" has been kicked.","rgb(255,155,55)",true,4,16)}
  game.ships[who].gameover({"You were kicked for : ":reason,"Your name: ":game.ships[who].name,"Score":game.ships[who].score,"Kills":game.ships[who].custom.Kills,"Deaths":game.ships[who].custom.Deaths});
  game.modding.terminal.echo(" | Player: "+game.ships[who].name+", id: "+who+" Has successfully been kicked\n");
};

ban = function(who,reason="Disturbing duels") {
  BannedList.push(game.ships[who].name);
  for (let ship of game.ships) {AddText(ship,"Player: "+game.ships[who].name+" has been banned.","rgb(255,55,55)",true,4,16)}
  game.ships[who].gameover({"You were banned for : ":reason,"Your name: ":game.ships[who].name,"Score":game.ships[who].score,"Kills":game.ships[who].custom.Kills,"Deaths":game.ships[who].custom.Deaths});
  game.modding.terminal.echo(" | Player: "+game.ships[who].name+", id: "+who+" Has successfully been banned\n");
};

unban = function(name) {
  BannedList.pop(name);
  game.modding.terminal.echo(" | Player: "+name+", Has successfully been unbanned\n");
};

gameover = function(start) {
  endgame_timer = start;
  ColorTimer = 0;
  title = function(text,color) {
    for (let ship of game.ships) {
      ship.setUIComponent({id: "Title_game",position: [24,15,50,20],clickable: false,visible: true,
        components: [{type: "text", position: [0,0,100,50], color: color, value:text},]
      });
      setTimeout( () => {ship.setUIComponent({id: "Title_game",visible: false})}, 6000);
    }
  };
  switch(start) {
    case 1:
      title("The game is ending in 5 Minutes","rgba(255,55,55,0.8)");
      game.modding.terminal.echo(" | Game is ending in: 5 Minutes\n");
    break;
    case 0:
      title("The game is extended","rgba(55,255,55,0.8)");
      game.modding.terminal.echo(" | Game is ending has been canceled\n");
    break;
  }
};

// General commands
set = function(who,what,crystals,stats=88888888){
  var level = Math.trunc(what / 100);
  if (crystals === undefined) {
    switch (level) {
      case 1: crystals = 20; break;
      case 2: crystals = 80; break;
      case 3: crystals = 180; break;
      case 4: crystals = 320; break;
      case 5: crystals = 500; break;
      case 6: crystals = 720; break;
      case 7: crystals = 980; break;
    }
  }
  game.ships[who].set({type:what,crystals:crystals,stats:stats,shield:999});
  game.modding.terminal.echo(" | Player: "+game.ships[who].name+", id: "+who+" Has successfully been given:");
  game.modding.terminal.echo(" | Type: "+what+", Crystals: "+crystals+", Stats: "+stats+"\n");
};

// Teleportation commands
tpto = function(who,towho){
  ship = game.ships[towho];
  game.ships[who].set({x:ship.x,y:ship.y});
  game.modding.terminal.echo(" | Player: "+game.ships[who].name+", id: "+who+" Has successfully been TP to:");
  game.modding.terminal.echo(" | Player: "+game.ships[towho].name+", id: "+towho+", coordinates: X: "+game.ships[towho].x+", Y:"+game.ships[towho].y+"\n");
};

tp = function(who,xx,yy){
  game.ships[who].set({x:xx,y:yy});
  game.modding.terminal.echo(" | Player: "+game.ships[who].name+", id: "+who+" Has successfully been TP to:");
  game.modding.terminal.echo(" | Coordinates: X: "+xx+", Y:"+yy+"\n");
};

tpall = function(x,y){
  var x = [...new Array(21)].map((j, i) => x - 10 + i)
  var y = [...new Array(21)].map((j, i) => y - 10 + i)
  for (i=0;i<game.ships.length;i++) {
    game.ships[i].set({x: x[~~(Math.random()*x.length)], y: y[~~(Math.random()*y.length)]});
    game.modding.terminal.echo(" | Player: "+game.ships[i].name+", id: "+i);
  }
  game.modding.terminal.echo(" | Has been successfully TP to:");
  game.modding.terminal.echo(" | Coordinates: X: "+x+", Y:"+y+"\n");
};

// Announce command
say = function(text="") {
  for (i=0;i<game.ships.length;i++) {
    game.ships[i].setUIComponent({id: "announceText",position: [20,75,50,25],clickable: false,visible: true,
      components: [{type: "text", position: [0,0,100,20], color: "#FFFFFF", value: text}]
    });
  }
  game.modding.terminal.echo(" | Text: "+text+" applyed\n");
};

// Commands Annex
game.modding.commands.help = function(){
  game.modding.terminal.echo("Mod by ⮞ Megalodon");
  game.modding.terminal.echo("Coding support ⮞ Lotus, Bhpsngum\n");
  game.modding.terminal.echo(" | info ⮞ "+"Gives informations about the game.");
  game.modding.terminal.echo(" | helpgeneral ⮞ "+"very useful stuff.");
  game.modding.terminal.echo(" | helpmoderation ⮞ "+"Every moderation related commands");
};
game.modding.commands.helpmoderation = function(){
  game.modding.terminal.echo(" | idle(who) ⮞ "+"Makes a specific player stuck in one position.");
  game.modding.terminal.echo(" | unidle(who) ⮞ "+"Makes a specific player free.");
  game.modding.terminal.echo(" | kick(id,reason) ⮞ "+"To kick someone from the game.\n");
  game.modding.terminal.echo(" | gameover(Yes/No) ⮞ "+"To end a game with a timer\n");
};
game.modding.commands.helpgeneral = function(){
  game.modding.terminal.echo(" | set(who,type,crystals,stats) ⮞ "+"Replace: game.ships[0].set({});.");
  game.modding.terminal.echo(" | tpto(who,towho) ⮞ "+"To teleport a player to another player.");
  game.modding.terminal.echo(" | tp(who,x,y) ⮞ "+"To teleport someone.");
  game.modding.terminal.echo(" | tpall(x,y) ⮞ "+"To teleports everyone.");
  game.modding.terminal.echo(" | say(hello) ⮞ "+"To make an announcement to the players while playing.\n");
};
